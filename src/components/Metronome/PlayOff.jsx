import React, { useEffect, useState } from "react";
import audio from "../../assets/click1.mp3";

const PlayOff = (props) => { 
    const [button, setButton] = useState(true);
    const [sound, setSound] = useState(false);

    const bpm = props.interval;
    const audioClick = new Audio(audio)

    useEffect(() => {
        const interval = setInterval(() => {
            if(sound){audioClick.play();}
        }, bpm);
        return () => {
            clearInterval(interval);
        }
    },[bpm, sound]);

    function soundSettings(){
        if(button){
            setSound(true)
            setButton(false)
        }else{
            setSound(false)
            setButton(true)
        }
    }
    //modal de encendido y apagado, imagen de play y pausa
    return (
        <div>
            <button className="btn-onOff" onClick={soundSettings}>
                <div className="btn-play"></div> 
            </button>
        </div>
    );
}

export default PlayOff;