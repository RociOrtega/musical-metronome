import React from "react";
import { useState, useEffect } from "react";
import PlayOff from "../playStop/PlayOff";
import PopUp from "../popupWindow/popup/PopUp";
import {buttonsRithmic} from "./rithmicDescription"
import "./styleSheet/rithmicStyle.css";

const Rithmic = (props) => {
    const bpm = props.bpm;
    const [interval, setInterval] = useState(3);
    const [rithmic, setRithmic] = useState(3);

    const [popup, setPopup] = useState(false);

    useEffect(() => {
        const timeConvertion = (60*1000)/bpm;
        const index = rithmic - 1;
        const division = buttonsRithmic[index].division;
        setInterval(timeConvertion*division);
    }, [bpm, rithmic]);

    const rythmStatus = (id) => {
        setRithmic(id); 
        setPopup(true);
    }

    return (
        <>
            <div className="rythm">
                {buttonsRithmic.map((item, index) => {//falta clase active
                    return (
                        <button className={`btn-rythm ${item.nameStyle}`} key={index} onClick={() => {rythmStatus(item.id)}}></button>
                    )
                })}
            </div>
            <PlayOff interval={interval}/>
            <PopUp popup={popup} rithmic={rithmic}/>
        </>
    );
}

export default Rithmic;