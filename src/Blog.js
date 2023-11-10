import React, {useState} from "react";
import "./Blog.css";
import {PostList} from "./PostList";
import * as Consts from "./Consts";
import {GetEditor} from "./GetEditor";
import {mockPosts} from "./MockPosts";

export function Blog() {
    const [posts, setPosts] = useState(mockPosts);
    const [view, setView] = useState(Consts.LISTS)


    function onClickHeader() {
      setView(Consts.EDITOR);
    }


    if (view === Consts.EDITOR){
        return <GetEditor onCreate={p=>{
            setView(Consts.LISTS)
            setPosts([p, ...posts])}} lastID={mockPosts[0].id}
        onCancel={_=>setView(Consts.LISTS)}/>
    }

    return <>
        <button onClick={onClickHeader}>add Posts</button>
        <PostList posts={posts}/>
        </>
}

