import React, { useContext, useState } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from "../helpers/QuestionBank";
import "../App.css";
import "../nextButton.css"


import Radio from "@material-ui/core/Radio";


function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  const nextQuestion = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
    setSelectedValue('')
    setOptionChosen('')
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };
  return (
    <div className="Quiz">
      <h1>{currQuestion+1}. What shape comes next?</h1>
      <div className="Question">{Questions[currQuestion].prompt}</div>
      <div>
        <div className="options">
          <button onClick={() => setOptionChosen("A")}>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />
            {Questions[currQuestion].optionA}
          </button>
          <button onClick={() => setOptionChosen("B")}>
          <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-button-demo"
              inputProps={{ "aria-label": "B" }}
            />
            {Questions[currQuestion].optionB}
          </button>
          {/* <button onClick={() => setOptionChosen("C")}>
            {Questions[currQuestion].optionC}
          </button>
          <button onClick={() => setOptionChosen("D")}>
            {Questions[currQuestion].optionD}
          </button> */}
        </div>
        {currQuestion == Questions.length - 1 ? (
          <button className="next" onClick={finishQuiz}>Finish Quiz</button>
        ) : (
          <button className="next" onClick={nextQuestion}>Next Question</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
