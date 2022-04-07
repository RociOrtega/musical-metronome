import React from "react";
import "./styleSheet/styleHeader.css";

const PopUpHeader = (props) => {
    const togglePopup = () => props.togglePopup();
    return(
        <div className="modal-header">
            <button className="modal-button" onClick={togglePopup}><box-icon name='x' rotate='90' color='#ffffff' ></box-icon></button>
        </div>
    )
}

export default PopUpHeader;