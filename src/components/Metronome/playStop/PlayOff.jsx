import React, { useEffect, useState } from "react";
import audio from "./audio/click.mp3";
import "./styleSheet/styleButton.css";

const PlayOff = (props) => { 
    const [sound, setSound] = useState(false);
    const bpm = props.interval;

    useEffect(() => {
        const interval = setInterval(() => {
            const audioClick = new Audio(audio)
            if(sound)audioClick.play();
        }, bpm);
        return () => {
            clearInterval(interval);
        }
    },[bpm, sound]);

    const soundSettings = () => {
        setSound(!sound);
    }

    return (
        <div>
            <button className="btn-onOff" onClick={soundSettings}>
                {!sound ? <box-icon name='play' color="white" animation="flashing-hover"></box-icon>
                :<box-icon name='pause' color="white" animation="flashing-hover"></box-icon>}
            </button>
        </div>
    );
}

export default PlayOff;