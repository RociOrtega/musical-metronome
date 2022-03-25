import React from "react";
import { useState, useEffect } from "react";

const Text = (props) => {
    const[description, setDescription] = useState("Allegro - Presto")
    let textArray = ["Larghissimo", "Largo", "Lento", "Adagio", "Andante", "Moderato", "Allegretto", "Allegro", "Allegro - Vivace", "Allegro - Presto", "Presto", "Prestissimo"];
    let bpm = props.bpm;

    useEffect(() => {
        if(bpm >= 20){setDescription(textArray[0])}
        if(bpm >= 40){setDescription(textArray[1])}
        if(bpm >= 55){setDescription(textArray[2])}
        if(bpm >= 69){setDescription(textArray[3])}                   
        if(bpm >= 81){setDescription(textArray[4])}
        if(bpm >= 88){setDescription(textArray[5])}
        if(bpm >= 100){setDescription(textArray[6])}
        if(bpm >= 120){setDescription(textArray[7])}
        if(bpm >= 133){setDescription(textArray[8])}
        if(bpm >= 143){setDescription(textArray[9])}
        if(bpm >= 161){setDescription(textArray[10])}
        if(bpm >= 201){setDescription(textArray[11])}
    }, [bpm])
    return(
        <p className="metro-text">{description}</p>
    )
}

export default Text;