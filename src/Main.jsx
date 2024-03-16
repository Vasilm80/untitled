import './App.css';
import Tyt from "./AV";
import AVMenu from "./AV-menu";
import AVContent from "./AV-content";
import React from "react";

export default function Main() {
    return(
        <div>
        <Tyt/>
        <AVMenu/>
        <AVContent/>
        </div>
    )
}