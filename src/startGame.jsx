import React, { useState } from "react";
import Button from '@mui/material/Button';
import './index.css'
function StartGamePage(props) {
    /*let [showPage,toggleShowPage]=useState(true);
    function showGamePage(){
        if(showPage)
        toggleShowPage(false)
        console.log(showPage)
    }*/
    return (
        <>
            <div className="d-flex ">
                <img class="me-5" src={require('./dice.png')} alt="Dice" />
                <div className="d-flex ps-5" style={{ justifyContent: 'center', alignItems: 'center' , flexDirection:'column' }}>
                    <h1 style={{fontSize:'6.2rem'}}>DICE GAME</h1>
                    <Button variant="contained" className="your-class-to-remove" onClick={props.showGamePage}>Play Now</Button>
                </div>
            </div>
        </>
    )
}
export { StartGamePage }