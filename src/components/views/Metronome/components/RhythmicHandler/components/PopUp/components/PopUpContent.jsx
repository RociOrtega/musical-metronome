import React, { useState, useEffect } from "react";
import styled from "styled-components"
import PropTypes from "prop-types"
import rhythmicFigures from "../../../../../../../../config/rhythmicFigures"
const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 2%;
`
PopUpContent.propTypes = {
  rhythmic: PropTypes.number.isRequired
}
function PopUpContent( { rhythmic } ) {
  const [content, setContent] = useState(" ")
  useEffect(() => {
    const textContent = rhythmicFigures.find(item => item.id === rhythmic).text
    setContent(textContent)
  },[rhythmic])
  return (
    <StyledDiv>
      {content}
    </StyledDiv>
  )
}
export default PopUpContent