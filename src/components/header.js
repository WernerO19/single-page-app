import React from "react";
import Navigation from "./Navigation";

function Header (){
    return (
        <header className="border-b flex justify-between items-center p-2">
            <span className="font-bold">
                appName
            </span>
            <Navigation />
        </header>
    )
}

export default  Header;