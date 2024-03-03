import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StartGamePage } from './startGame';
import { GamePage } from './gamePage';
function App() {
  const [showPage, toggleShowPage] = useState(true);

  function showGamePage() {
    if (showPage)
      toggleShowPage(false);
    else
      toggleShowPage(true);
    console.log(showPage)
  }
  return (
    <>
    {showPage == true? <StartGamePage showGamePage={showGamePage}></StartGamePage>: <GamePage></GamePage> }
      {/*<StartGamePage showGamePage={showGamePage}></StartGamePage>
      <GamePage></GamePage>*/}
    </>
  )
}
export default App;

