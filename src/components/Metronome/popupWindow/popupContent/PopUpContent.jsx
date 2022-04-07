import React from "react";
import { text } from "./text";
import { useState, useEffect } from "react";
import "./styleSheet/styleContent.css";

const PopUpContent = (props) => {
    const rithmic = props.rithmic
    const [content, setContent] = useState(' ');

    useEffect(() => {
        const index = rithmic - 1;
        const textContent = text[index].text;
        setContent(textContent);
    }, [rithmic]);

    return(
        <div className="modal-content">
            <p>{content}</p>
        </div>
    )
}

export default PopUpContent;