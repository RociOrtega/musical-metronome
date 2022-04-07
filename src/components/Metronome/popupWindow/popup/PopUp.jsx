import React from "react";
import 'boxicons'
import "./styleSheet/stylePopup.css";
import { useState, useEffect } from "react";
import PopUpContent from "../popupContent/PopUpContent";
import PopUpHeader from "../popupHeader/PopUpHeader";

const PopUp = (props) => {
    let popupActive = props.popup;
    let rithmic = props.rithmic;

    const [popup, setPopup] = useState(false);

    useEffect(() => {
        setPopup(popupActive);
        setTimeout(() => {setPopup(false)},4000)
    }, [popupActive, rithmic]);

    const togglePopup = () => {
        setPopup(false);
    }

    return (
        <div className="modalWindow" style={popup?{display:'block'}:{display:'none'}}>
            <PopUpHeader togglePopup={togglePopup} />
            <PopUpContent rithmic={rithmic}/>
        </div>
    );
}

export default PopUp;
