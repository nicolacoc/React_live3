import React, {useState} from "react";

export function GetEditor({onCreate, lastID, onCancel}) {
    const [title, setTitle] = useState("your title");
    const [body, setBody] = useState("your Text");
    const [ID, setID] = useState(lastID);

    function onSubmitHeader() {
        setID(ID + 1)
        onCreate({title, body, date: new Date().toISOString(), ID});
    }

    function onCancelHeader() {
        setTitle("your title");
        setBody("your Text");
        onCancel();
    }

    return (<div className={"container"}>
        <h1>Create posts</h1>
        <label>
            Title:
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}
                   onClick={_ => {if (title === "your title") {setTitle("")}}}
            onBlur={_ => {
                // guarda quà
                if (!title){setTitle("your title");}
            }}/>
        </label>
        <label>
            <textarea value={body} cols="30" rows="10" onChange={e => setBody(e.target.value)}
                      onFocus={_ => {if (body === "your Text") {setBody("")}}}
                      onBlur={_ => {
                          // guarda quà
                          if (!body){setBody("your Text");}
                      }}
            >{body}</textarea>
        </label>
        <button onClick={onSubmitHeader}>Submit</button>
        <button onClick={onCancelHeader}>Cancel</button>
    </div>);
}