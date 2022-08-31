import React from "react";
import useSSR from "./useSSR";

const Articles = () => {
	const articles = useSSR('articles', () => {
		console.log("No preloaded articles found, loading from server");
		return fetch("http://localhost:8080/api/articles").then(response => response.json())
	});
	return (
		<article>
			<h1>Articles</h1>
			<ul>
				{articles.map(item => <li key={item.title}>
					<h3>{item.title}</h3>
					<p>by {item.author}</p>
				</li>)}
			</ul>
		</article>
	)
}

export default Articles;