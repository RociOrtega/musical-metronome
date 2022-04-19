import StyledMetronome from "./styled"
import React, { useState } from "react"
import DynamicDescription from "./components/DynamicDescription/DynamicDescription"
import RhythmicHandler from "./components/RhythmicHandler/index"

function Metronome(){
  const [bpm, setBpm] = useState(160)
  const plus = () =>{
    if(bpm < 300){
      setBpm(bpm + 1)
    }
  } 
  const minus = () => {
    if(bpm > 20){
      setBpm(bpm - 1)
    }
  }
  const slide = (e) => {
    const slideValue = Number(e.target.value)
    setBpm(slideValue)
  }
  return(
    <StyledMetronome className="container">
      <h1 className="container__title">Metronome</h1>
      <section className="container__metronome">
        <div className="metronome__info">
          <span className="metronome__info-tempo">{bpm}</span>
          <span className="metronome__info-bpm">bpm</span> 
        </div>
        <DynamicDescription bpm={bpm} />
        <div className="metronome__settings">
          <button 
            type="button" 
            className="metronome__settings-button" 
            onClick={minus}>
            <box-icon name='minus'/>
          </button>
          <input 
            type="range" 
            min="20" max="300" step="1" 
            onChange={slide} 
            value={bpm}
            className="metronome__settings-slide"
          />
          <button 
            type="button" 
            className="metronome__settings-button" 
            onClick={plus}><box-icon name='plus'/>
          </button>
        </div>
        <RhythmicHandler bpm={bpm} />
      </section>
    </StyledMetronome>
  )
}
export default Metronome