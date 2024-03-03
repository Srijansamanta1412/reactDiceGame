import React, { useState, useRef,useEffect } from "react";
import Box from '@mui/material/Box';
import './index.css';
import dice1 from './dice_1.png';
import dice2 from './dice_2.png'
import dice3 from './dice_3.png'; // Import dice_3.png
import dice4 from './dice_4.png';
import dice5 from './dice_5.png';
import dice6 from './dice_6.png';
import Button from '@mui/material/Button';


function GamePage() {
    let valueArr = ['1', '2', '3', '4', '5', '6']
    let valueBox = [];
    const [imageSrc, setImageSrc] = useState(dice1); // Initialize image source state with dice_1.png
    const [selectedIndex, UpdatedIndex] = useState();
    const [currentScore, UpdatedScore] = useState(0);
    const [showRules,updateShowRule]=useState(false);
    const [showWarning,updateShowWarning]=useState(false);
    const boxRefs = useRef({});
   /* function addHoverEffect(e) {
        e.target.style.background = 'black'
        e.target.style.color = 'white'
    }

    function removeHoverEffect(e) {
        e.target.style.background = ''
        e.target.style.color = 'black'
    }*/
    const makeSelected = (id) => {
        let indexToDeselect = selectedIndex;
        if (indexToDeselect != null) {
            const boxRefPrev = boxRefs.current[indexToDeselect];
            boxRefPrev.classList.remove('your-class-to-remove')
        }
        UpdatedIndex(id);
        console.log(id)
        const boxRef = boxRefs.current[id];
        if (boxRef) {
            // Access the boxRef and perform any actions you need
            boxRef.classList.add('your-class-to-remove');
        }
    };

    function changeImage() {
        console.log(selectedIndex)
        console.log(showWarning)
        if (selectedIndex!=null) {
            updateShowWarning(false)
            console.log("Change Image")
            var numberToShow = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
            console.log(numberToShow)
            if (numberToShow == 1)
                setImageSrc(dice1)
            if (numberToShow == 2)
                setImageSrc(dice2)
            if (numberToShow == 3)
                setImageSrc(dice3)
            if (numberToShow == 4)
                setImageSrc(dice4)
            if (numberToShow == 5)
                setImageSrc(dice5)
            if (numberToShow == 6)
                setImageSrc(dice6)

            /* ------------ Updating The Score ---------------*/
            if(selectedIndex+1==numberToShow)
            UpdatedScore(currentScore+2);
            else
            UpdatedScore(currentScore-2);
            /*---------------- Deselecting The Selected Box ----------------------*/
            let indexToDeselect = selectedIndex;
        if (indexToDeselect != null) {
            const boxRefPrev = boxRefs.current[indexToDeselect];
            boxRefPrev.classList.remove('your-class-to-remove')
        }
            UpdatedIndex(null);
        }
        else{
        //alert("Select a Value")
        updateShowWarning(true)
        }
    }
    function toggleGameRules() {
            if(showRules)
            updateShowRule(false)
            else
            updateShowRule(true)
    }
    function resetScore(){
        UpdatedScore(0);
    }
    

    for (let i = 0; i < valueArr.length; i++) {
        valueBox.push(
            <Box key={i} ref={(element) => { boxRefs.current[i] = element; }}  component="section"  onClick={() => makeSelected(i)} className="mx-2 box-design" sx={{ p: 2, border: '2px solid grey', width: '60px', textAlign: 'center' }}>
                <div style={{ textAlign: 'center' }}>{valueArr[i]}</div>
            </Box>
        )
    }

    return (
        <>
            <div className="d-flex mt-3">
                <div>
                    <p className="ms-5"style={{fontSize:'5.6rem'  }}><b>{currentScore}</b></p>
                    <p className="ms-4" style={{fontSize:'1.3rem'}}><b>Total Score</b></p>
                </div>
                <div className="d-flex ms-auto mt-5 me-3" style={{ float: 'right', height: '60px',flexDirection:'column' }}>
                    {showWarning == true? (() => {
    // Call your function here
    return <p style={{color:'red'}}>* Select A Value From The Box</p>;
})():<></> }
                    <div className="d-flex">
                    {valueBox}
                    </div>
                    <br></br>
                    <div className="ms-auto" style={{fontSize:'1.7rem'}}><b>Select A Number</b></div>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <img style={{height:'11rem'}}src={imageSrc} onClick={changeImage} alt="" />
                <br></br>
                <b>Click On Dice To Play</b>
                <br></br>
                <Button variant="contained" className="my-3"style={{ background: 'black', color: 'white' }} onClick={resetScore}>Reset Score</Button>
                <br></br>
                <Button variant="contained" className="my-1" style={{ background: 'white', color: 'black' }} onClick={toggleGameRules}>Show Rules</Button>
                <br></br>
                <br></br>
                {showRules == true?
                <div className="p-2" style={{background:'pink',textAlign:'center',width:'auto',display: 'inline-block'}}> 
                <ul style={{ listStyle:'none',paddingInlineStart: '0', display: 'inline-block', textAlign: 'left'}}> <b>The Rule is To Click On The Dice</b>
                    <li>Select Any Number</li>
                    <li>Click On The Dice</li>
                    <li>After Clicking on the Device If Selected Number Is Equal To The Number You Will Get Some Points</li>
                </ul></div>:<></> }
            </div>
        </>
    );
}

export { GamePage };
