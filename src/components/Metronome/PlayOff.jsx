import React, { useEffect, useState } from "react";
import audio from "../../assets/click1.mp3";

const PlayOff = (props) => { 
    const [button, setButton] = useState(true);
    const [sound, setSound] = useState(false);

    const bpm = props.interval;

    useEffect(() => {
        const interval = setInterval(() => {
            const audioClick = new Audio(audio)
            if(sound){audioClick.play();}
        }, bpm);
        return () => {
            clearInterval(interval);
        }
    },[bpm, sound]);

    function soundSettings(){
        setSound(!sound);
        setButton(!button);
    }
    //modal de encendido y apagado, imagen de play y pausa
    return (
        <div>
            <button className="btn-onOff" onClick={soundSettings}>
                {button ? <box-icon name='play' color="white" animation="flashing-hover"></box-icon>
                :<box-icon name='pause' color="white" animation="flashing-hover"></box-icon>}
            </button>
        </div>
    );
}

export default PlayOff;