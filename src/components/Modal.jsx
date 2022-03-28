import React from "react";
import { useState, useEffect } from "react";
import 'boxicons'

const Modal = (props) => {
    let modalActive = props.modal;
    let rithmic = props.rithmic;

    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    useEffect(() => {
        if(modalActive){
            if(rithmic === 1){setModalContent('Has selecionado la figura de redonda la cual equivale a 4 tiempos.')}
            if(rithmic === 2){setModalContent("Has selecionado la figura de blanca la cual equivale a 2 tiempos.")}
            if(rithmic === 3){setModalContent("Has selecionado la figura de negra la cual equivale a 1 tiempo.")}
            if(rithmic === 4){setModalContent("Has selecionado la figura de corchea la cual equivale a medio tiempo.")}
            if(rithmic === 5){setModalContent("Has selecionado la figura de semicorchea la cual equivale a un cuarto de tiempo.")}
            if(rithmic === 6){setModalContent("Has selecionado la figura de tresillo la cual equivale a un tercio de tiempo.")}
        }
        setModal(modalActive);
        setTimeout(() => {setModal(false)},4000)
    }, [modalActive, rithmic]);

    function toggleModal() {
        setModal(false);
    }

    return (
        <div className="modalWindow" style={modal?{display:'block'}:{display:'none'}}>
            <div className="modal-header">
                <button className="modal-button" onClick={toggleModal}><box-icon name='x' rotate='90' color='#ffffff' ></box-icon></button>
            </div>
            <div className="modal-content">
                <p className="modal-text">{modalContent}</p>
            </div>
        </div>
    );
}

export default Modal;
