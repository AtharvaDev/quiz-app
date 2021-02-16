import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import "../App.css";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function MainMenu() {
  const { gameState, setGameState, setName, name } = useContext(QuizContext);

  return (
    <div className="Menu">
      <h2 className="Name">Enter your name: </h2>
      <TextField
        id="outlined-basic"
        value={name}
        onChange={event => setName(event.target.value)}
        label="Name"
        variant="outlined"
      />
      <span></span>
      <Button
        variant="outlined"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </Button>
    </div>
  );
}

export default MainMenu;
