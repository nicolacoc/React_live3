import React from "react";

export function PostList({posts}) {
    return <>{posts.map((p, index) =>
        <article key={index} className={"Container"}>
            <p className={"date"}>{p.date}</p>
            <h1>{p.title}</h1>
            <p>{p.body}</p>
        </article>
    )}</>
}