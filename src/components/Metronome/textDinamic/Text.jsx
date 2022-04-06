import React from "react";
import { useState, useEffect } from "react";
import { dinamics } from "./dinamics";

const Text = (props) => {
    const[description, setDescription] = useState("Allegro - Presto")
    const bpm = props.bpm;
    useEffect(() => {
        dinamics.map((item) => {
            return (bpm >= item.bpmMin && bpm <= item.bpmMax) ? setDescription(item.description) : null
        })
    }, [bpm])
    return(
        <p className="metro-text">{description}</p>
    )
}

export default Text;