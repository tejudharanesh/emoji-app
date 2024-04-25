import React from "react";
import Card from "./card";
import emojipedia from "../emojidesc";



function emoji(emojies){
    return (<Card
    key = {emojies.id}
    emoji = {emojies.emoji}
    name = {emojies.name}
    description = {emojies.meaning}
    />
);
}

function App(){
    return ( 
    <div>
        <h1><span>emojipedia</span></h1>
        <dl className="dictionary">
        {emojipedia.map(emoji)}
        </dl>
    </div>
    );
}

export default App;