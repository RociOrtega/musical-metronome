import React from "react";
import { useState, useEffect } from "react";
import PlayOff from "./PlayOff";

const Rithmic = (props) => {
    let bpm = props.bpm;
    let timeConvertion = (60*1000)/bpm;
    const [interval, setInterval] = useState(3);

    const [rithmic, setRithmic] = useState(3);
    let classname = '';//revisar active

    useEffect(() => {
        if(rithmic === 1){setInterval(timeConvertion*4)} //redonda
        if(rithmic === 2){setInterval(timeConvertion*2)} //blanca
        if(rithmic === 3){setInterval(timeConvertion*1)} //negra
        if(rithmic === 4){setInterval(timeConvertion/2)} //corchea
        if(rithmic === 5){setInterval(timeConvertion/4)} //semicorchea
        if(rithmic === 6){setInterval(timeConvertion/3)} // no estoy segura
    }, [bpm, rithmic]);

    const rythmStatusRedonda = () => setRithmic(1);
    const rythmStatusBlanca = () => setRithmic(2);
    const rythmStatusNegra = () => setRithmic(3);
    const rythmStatuCorchea = () => setRithmic(4);
    const rythmStatusSemicorchea = () => setRithmic(5);
    const rythmStatusTresillo = () => setRithmic(6);

    //Falta la ventana modal por cada boton y que se actualice la clase active

    return (
        <>
            <div className="rythm">
                <button className={`btn-rythm redonda ${classname}`} onClick={rythmStatusRedonda}></button>
                <button className={`btn-rythm blanca ${classname}`} onClick={rythmStatusBlanca}></button>
                <button className={`btn-rythm negra ${classname}`} onClick={rythmStatusNegra}></button>
                <button className={`btn-rythm corchea ${classname}`} onClick={rythmStatuCorchea}></button>
                <button className={`btn-rythm semicorchea ${classname}`} onClick={rythmStatusSemicorchea}></button>
                <button className={`btn-rythm tresillo ${classname}`} onClick={rythmStatusTresillo}></button>
            </div>
            <PlayOff interval={interval}/>
        </>
    );
}

export default Rithmic;