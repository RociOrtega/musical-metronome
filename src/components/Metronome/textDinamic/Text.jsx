import React from "react";
import { useState, useEffect } from "react";
import { dinamics } from "./dinamics";

const Text = (props) => {
    const[description, setDescription] = useState("Allegro - Presto")
    const bpm = props.bpm;
    useEffect(() => {
        dinamics.map((item) => {
            if(bpm >= item.bpmMin && bpm <= item.bpmMax){
                setDescription(item.name)
            }
        })
    }, [bpm])
    return(
        <p className="metro-text">{description}</p>
    )
}

export default Text;