import React from "react";
import './HelloWorld.css'

export function HelloWorld({name}) {
    return <div className="HelloContainer"><h1>Hello World my name is {name}</h1></div>;
}