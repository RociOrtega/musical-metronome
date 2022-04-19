import React, { useState, useEffect } from "react"
import styled from "styled-components"
import rhythmicFigures from "../../../../../../../../config/rhythmicFigures"
import PropTypes from "prop-types"

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: #c9c6c6 solid 2px;
  .popup__header--name{
    display: flex;
    align-items: center;
    margin: 1%;
  }
  .popup__header--button{
    border: none;
    cursor: pointer;
    width: 10%;
    height: 8%;
    background-color: #dc3545;
    border-radius: 2px;
    margin: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
PopUpHeader.propTypes = {
  togglePopup: PropTypes.func.isRequired,
  rhythmic: PropTypes.number.isRequired
}
function PopUpHeader( { togglePopup, rhythmic } ){
  const togglePopupFunction = () => togglePopup()
  const [figureName, setFigureName] = useState(" ")
  useEffect(() => {
    const figure = rhythmicFigures.find(item => item.id === rhythmic).name
    setFigureName(figure)
  },[rhythmic])
  return(
    <StyledDiv>
      <p className="popup__header--name" >
        {figureName}
      </p>
      <button 
        type="button" 
        className="popup__header--button" 
        onClick={togglePopupFunction}>
        <box-icon name='x' rotate='90' color='#ffffff'/>
      </button>
    </StyledDiv>
  )
}
export default PopUpHeader