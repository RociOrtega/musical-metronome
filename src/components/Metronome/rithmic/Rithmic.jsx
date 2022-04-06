import React from "react";
import { useState, useEffect } from "react";
import PlayOff from "../PlayOff";
import Modal from "../../Modal";

const Rithmic = (props) => {
    let bpm = props.bpm;
    const [interval, setInterval] = useState(3);
    const [rithmic, setRithmic] = useState(3);

    const [redondaClass, setRedondaClass] = useState('');
    const [blancaClass, setBlancaClass] = useState('');
    const [negraClass, setNegraClass] = useState('active');
    const [corcheaClass, setCorcheaClass] = useState('');
    const [semicorcheaClass, setSemicorcheaClass] = useState('');
    const [tresilloClass, setTresilloClass] = useState('');

    const [modal, setModal] = useState(false);

    useEffect(() => {
        let timeConvertion = (60*1000)/bpm;
        if(rithmic === 1){setInterval(timeConvertion*4)} //redonda
        if(rithmic === 2){setInterval(timeConvertion*2)} //blanca
        if(rithmic === 3){setInterval(timeConvertion*1)} //negra
        if(rithmic === 4){setInterval(timeConvertion/2)} //corchea
        if(rithmic === 5){setInterval(timeConvertion/4)} //semicorchea
        if(rithmic === 6){setInterval(timeConvertion/3)} //tresillo
    }, [bpm, rithmic]);

    const rythmStatusRedonda = () => {
        setRithmic(1); 
        setModal(true);
        setRedondaClass('active'); setBlancaClass(''); setNegraClass(''); setCorcheaClass(''); setSemicorcheaClass(''); setTresilloClass('');}
    const rythmStatusBlanca = () => {
        setRithmic(2);
        setModal(true);
        setRedondaClass(''); setBlancaClass('active'); setNegraClass(''); setCorcheaClass(''); setSemicorcheaClass(''); setTresilloClass('');}
    const rythmStatusNegra = () => {
        setRithmic(3); 
        setModal(true);
        setRedondaClass(''); setBlancaClass(''); setNegraClass('active'); setCorcheaClass(''); setSemicorcheaClass(''); setTresilloClass('');}
    const rythmStatuCorchea = () => {
        setRithmic(4); 
        setModal(true);
        setRedondaClass(''); setBlancaClass(''); setNegraClass(''); setCorcheaClass('active'); setSemicorcheaClass(''); setTresilloClass('');}
    const rythmStatusSemicorchea = () => {
        setRithmic(5); 
        setModal(true);
        setRedondaClass(''); setBlancaClass(''); setNegraClass(''); setCorcheaClass(''); setSemicorcheaClass('active'); setTresilloClass('');}
    const rythmStatusTresillo = () => {
        setRithmic(6); 
        setModal(true);
        setRedondaClass(''); setBlancaClass(''); setNegraClass(''); setCorcheaClass(''); setSemicorcheaClass(''); setTresilloClass('active');}


    //Estos botones pueden ser un array y luego leerlo con map
    return (
        <>
            <div className="rythm">
                <button className={`btn-rythm redonda ${redondaClass}`} onClick={rythmStatusRedonda}></button>
                <button className={`btn-rythm blanca ${blancaClass}`} onClick={rythmStatusBlanca}></button>
                <button className={`btn-rythm negra ${negraClass}`} onClick={rythmStatusNegra}></button>
                <button className={`btn-rythm corchea ${corcheaClass}`} onClick={rythmStatuCorchea}></button>
                <button className={`btn-rythm semicorchea ${semicorcheaClass}`} onClick={rythmStatusSemicorchea}></button>
                <button className={`btn-rythm tresillo ${tresilloClass}`}  onClick={rythmStatusTresillo}></button>
            </div>
            <PlayOff interval={interval}/>
            <Modal modal={modal} rithmic={rithmic}/>
        </>
    );
}

export default Rithmic;