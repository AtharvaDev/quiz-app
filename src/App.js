import { useState, useContext } from "react";
import "./App.css";
import "./nextButton.css"
import React from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { QuizContext } from "./helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="App">
      <div className="header">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/quizapp-by-ad.appspot.com/o/appLogo.png?alt=media&token=b3769882-4cbd-41a6-b61a-edfd0f451a65"
          alt=""
          height="100px"
          width="120px"
        />
        <h1>Quiz App</h1>
      </div>

      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore, name, setName }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
