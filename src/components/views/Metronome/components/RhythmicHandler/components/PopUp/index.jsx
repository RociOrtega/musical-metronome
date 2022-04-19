import React, { useEffect, useState } from "react"
import PopUpHeader from "./components/PopUpHeader"
import PopUpContent from "./components/PopUpContent"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledDiv = styled.div`
  width: 95%;
  height: auto;
  border-radius: 5px;
  box-shadow: 1px 1px 6px #3b3b3b;
  background-color: #ebe8e8;
  margin: 0 auto .5rem;
`
PopUp.propTypes = {
  popupStatus: PropTypes.bool.isRequired,
  rhythmic: PropTypes.number.isRequired
}
function PopUp( { popupStatus, rhythmic } ){
  const [popupConfig, setPopupConfig] = useState(false)
  
  useEffect(() => {
    setPopupConfig(popupStatus)
    const timeout = setTimeout(() => {
      setPopupConfig(false)
    }, 4000)
    return() => {
      clearTimeout(timeout)
    }
  },[rhythmic])

  const togglePopup = () => {
    setPopupConfig(false)
  }
  return(
    <StyledDiv 
      style={popupConfig ? {display: "block"} : {display: "none"}}>
        <PopUpHeader togglePopup={togglePopup} rhythmic={rhythmic}/>
        <PopUpContent rhythmic={rhythmic} />
    </StyledDiv>
  )
}
export default PopUp