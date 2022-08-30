import express from 'express';
import React from "react";
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import path from "path";
import fs from "fs";
import App from "./src/App";
import { InitialDataContext } from './src/server-side-render/dataContext';

const app = express();

// to stop server from crashing
global.window = {};

const articles = [
	{ title: 'Article 1', author: 'Bob' },
	{ title: 'Article 2', author: 'Betty' },
	{ title: 'Article 3', author: 'Frank' },
];

app.use(express.static("./build", {index: false}));

app.get("/api/articles", (req, res) => {
	const loadedArticles = articles;
	res.json(loadedArticles);
})

app.get("/*", (req, res) => {
	const sheet = new ServerStyleSheet();
	const context = {}
	const reactApp = renderToString(
		sheet.collectStyles(
			<InitialDataContext.Provider>
				<StaticRouter location={req.url} context={context}>
					<App />
				</StaticRouter>
			</InitialDataContext.Provider>
		)
	);
	const templateFile = path.resolve("./build/index.html");
	fs.readFile(templateFile, 'utf-8', (err, data) => {
		if(err){
			return res.status(500).send(err);
		}
		return res.send(
			data.replace('<div id="root"></div>', `<link rel="stylesheet" type="text/css" href="/build/static/main.e6c13ad2.css" /><script>window.preloadedArticles = ${JSON.stringify(articles)};</script><div id="root">${reactApp}</div>`)
				.replace('{{ styles }}', sheet.getStyleTags())
		)
	});
});

app.listen(8080, () => {
	console.log('Server is listening on port 8080');
});