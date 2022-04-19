import styled from "styled-components"

const StyledMetronome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  .container__title{
    margin: 3rem 0 2rem;
    letter-spacing: 1%;
    font-size: 3.5em;
    text-shadow: 2px 2px 3px #000000;
  }
  .container__metronome{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 310px;
    height: auto;
    box-shadow: 2px 2px 6px #000000;
    border-radius: 5px;
    background-color: #ff7e33;
  }
  .metronome__info{
    text-align: center;
    font-weight: bold;
    color: #FFFFFF;
    text-transform: uppercase;
    margin: 1rem 0;
  }
  .metronome__info-tempo{
    font-size: 4em;
  }
  .metronome__info-bpm{
    font-size: 1.5em;
  }
  .metronome__settings{
    width: 310px;
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 0;
  }
  .metronome__settings-button{
    width: 30px;
    height: 30px;
    background-color: #FAFAFA;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
  .metronome__settings-button:hover{
    transform: scale(.95, .95);
    transition-duration: .15s;
    box-shadow: 1px 2px 6px #3b3b3b;
  }
  .metronome__settings-slide{
    -webkit-appearance: none;
    background-color: transparent;
    width: 65%;
  }
  .metronome__settings-slide::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background-color: #3B3B3B;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -7px;
  }
  .metronome__settings-slide::-webkit-slider-thumb:hover{
    box-shadow: 2px 2px 6px #3b3b3bc4;
  }
  .metronome__settings-slide::-webkit-slider-runnable-track{
    height: 2px;
    background: #FAFAFA;
  }
  .metronome__settings-slide::-moz-range-track{
    height: 2px;
    background: #FAFAFA;
  }
`
export default StyledMetronome