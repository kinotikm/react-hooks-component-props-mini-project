import React from "react";
import Article from "./Article";
import blogData from "../data/blog"

function ArticleList({posts}) {
    const articles = posts.map (post => {
        return ( 
        <Article
            key = {post.id}
            title = {post.title}
            date = {post.date}
            preview = {post.preview}
        />
        )
    })

    return (
        <main> {articles} </main>
    )
}
export default ArticleList
