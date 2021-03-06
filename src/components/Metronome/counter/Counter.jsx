import React from "react";
import "boxicons";
import "./styleSheetButtons/buttonsInputStyle.css"
import "./styleSheetText/textDescription.css"
import { useState } from "react";
import DinamicDescription from "../textDinamic/DinamicDescription";
import Rithmic from "../rithmic/Rithmic";

const Metronome = () => {
    const [bpm, setBpm] = useState(160);
    const plus = () =>{
        if(bpm < 300){
            setBpm(bpm + 1);
        }
    } 
    const minus = () => {
        if(bpm > 20){
            setBpm(bpm - 1);
        }
    }
    const slide = (e) => {
        const slideValue = Number(e.target.value);
        setBpm(slideValue);
    }
    return (
        <main className="container">
            <h1 className="title">Metronome</h1>
            <section className="metronome">
                <div className="metro-info">
                    <span className="tempo">{bpm}</span>
                    <span className="bpm">bpm</span> 
                </div>
                <DinamicDescription bpm={bpm} />
                <div className="metro-settings">
                    <button type="button" className="btn-settings" onClick={minus}><box-icon name='minus'></box-icon></button>
                    <input type="range" min="20" max="300" step="1" onChange={slide} value={bpm} className="slide"></input>
                    <button type="button" className="btn-settings" onClick={plus}><box-icon name='plus'></box-icon></button>
                </div>
                <Rithmic bpm={bpm} />
            </section>
        </main>
    );
}

export default Metronome;