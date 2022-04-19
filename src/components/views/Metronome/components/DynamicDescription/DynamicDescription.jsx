import React, { useState, useEffect } from "react"
import dynamics from "../../../../../config/dynamics"
import styled from "styled-components"
import PropTypes from 'prop-types';

const StyledP = styled.p`
  font-weight: bold;
  color: #FFFFFF;
`
DynamicDescription.propTypes = {
  bpm: PropTypes.number.isRequired
}
function DynamicDescription( { bpm } ) {
  const [description, setDescription] = useState( "Alegro - Presto")
  
  useEffect(() => {
    dynamics.map((item) => {
      return (bpm >= item.bpmMin && bpm <= item.bpmMax
      ? setDescription(item.name)
      : null)
    })
  },[bpm])
  return (
  <StyledP className="metronome__dynamic-escription">
    {description}
  </StyledP>
  )
}
export default DynamicDescription