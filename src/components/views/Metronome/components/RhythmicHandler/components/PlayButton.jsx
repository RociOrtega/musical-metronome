import React, { useEffect, useState } from "react"
import audio from "../../../../../../audio/click.mp3"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1rem 0;
  .playButton{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid #FFFFFF;
    background-color: #ff6b15;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 1px 8px #3b3b3b;
  }
  .playButton:hover{
    transform: scale(.95, .95);
    box-shadow: 2px 2px 6px #3b3b3b;
    transition-duration: .15s;
  }
`
PlayButton.propTypes = {
  rhythmicInterval: PropTypes.number.isRequired
}
function PlayButton( { rhythmicInterval } ) {
  const [sound, setSound] = useState(false);
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const audioClick = new Audio(audio)
      if(sound){
        audioClick.play()
      }
    }, [rhythmicInterval])
    return () => {
      clearInterval(timeInterval);
    }
  },[rhythmicInterval, sound])
  const soundSettings = () => {
    setSound(!sound)
  }
  return(
    <StyledDiv>
      <button className="playButton" onClick={soundSettings}>
        {!sound 
        ? <box-icon name='play' color="white" animation="flashing-hover"/>
        :<box-icon name='pause' color="white" animation="flashing-hover"/>}
      </button>
    </StyledDiv>
  )
}
export default PlayButton;