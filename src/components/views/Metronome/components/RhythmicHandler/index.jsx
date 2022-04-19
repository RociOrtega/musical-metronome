import React, { useState, useEffect } from "react"
import rhythmicFigures from "../../../../../config/rhythmicFigures"
import PopUp from "./components/PopUp/index"
import PlayButton from "./components/PlayButton"
import StyledRhythmicHandler from "./styled"
import clsx from "clsx"
import PropTypes from "prop-types"

RhythmicHandler.propTypes = {
  bpm: PropTypes.number.isRequired
}
function RhythmicHandler( { bpm } ){
  const [popupStatus, setPopupStatus] = useState(false)
  const [rhythmic, setRhythmic] = useState(3)
  const [rhythmicInterval, setRhythmicInterval] = useState(375)

  useEffect(() => {
    const timeConvertion = (60*1000)/bpm
    const figure = rhythmicFigures.find(item => item.id === rhythmic).division
    setRhythmicInterval(timeConvertion * figure)
  },[bpm, rhythmic])

  const rythmStatus = (id) => {
    setRhythmic(id)
    setPopupStatus(true)
  }
  return(
    <StyledRhythmicHandler>
      <div className="rhythm">
        {rhythmicFigures.map((item) => {
          return(
            <button 
              type="button" 
              className={clsx("rhythm__button", item.nameStyle, item.id == rhythmic && "rhythm__button--active")}
              key={item.id}
              onClick={() => {rythmStatus(item.id)}}
            />
          )
        })}
      </div>
      <PlayButton rhythmicInterval={rhythmicInterval}/>
      <PopUp popupStatus={popupStatus} rhythmic={rhythmic}/>
    </StyledRhythmicHandler>
  )
}
export default RhythmicHandler