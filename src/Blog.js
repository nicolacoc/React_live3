import React, {useState} from "react";
import "./Blog.css";
import {PostList} from "./PostList";
import * as Consts from "./Consts";
import {GetEditor} from "./GetEditor";
import {mockPosts} from "./MockPosts";
import {SearchPost} from "./SearchPost";

export function Blog() {

    const [posts, setPosts] = useState(mockPosts);
    const [viewPost, setViewPost] = useState(posts)
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

    let onSearchOnPostChange= (p)=>{
       const FilterPost = posts.filter(x=> {
           if(p.target.value) {
               if (x.title.toLowerCase().startsWith(p.target.value.toLowerCase()) ) {
                   return x
               }
               return null
           }
            return x
        })
        setViewPost(FilterPost);
    };
    return <>
        <button onClick={onClickHeader}>add Posts</button>
        <SearchPost onChange={onSearchOnPostChange}/>
        <PostList posts={viewPost}/>
        </>
}

