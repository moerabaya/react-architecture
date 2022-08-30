import React, { useEffect, useState } from "react";

const Articles = () => {
	const [articles, setArticles] = useState(window && window.preloadedArticles);

	useEffect(()=> {
		if(window && !window.preloadedArticles)
			fetch("/api/articles").then(response => response.json()).then(data => setArticles(data))
	}, [])
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