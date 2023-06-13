import React, { useState } from "react";
import { Fragment } from "react";
import "../assets/CSS/bootstrap.min.css";
import "../assets/CSS/Custom.css";
import { QuizData } from "../Data/QuizData.jsx";
import { Col, Container, Row } from "react-bootstrap";
import QuizResult from "./QuizResult";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const nextQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClicked(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clicked === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setCurrentQuestion(0);
    setClicked(0);
    setShowResult(false);
    setScore(0);
  };
  return (
    <Fragment>
      <Container fluid={true} className="bodyCon">
        <h1 className="quizTitle">Quiz App</h1>
        <Row>
          <Col>
            <div className="wrappingCon">
              <div className="mainContainer">
                {showResult ? (
                  <QuizResult
                    score={score}
                    totalScore={QuizData.length}
                    tryAgain={resetAll}
                  />
                ) : (
                  <>
                    <div className="questionCon">
                      <span>{currentQuestion + 1}: </span>
                      <span>{QuizData[currentQuestion].question}</span>
                    </div>
                    <div className="optionCon">
                      {QuizData[currentQuestion].options.map((option, i) => {
                        return (
                          <button
                            onClick={() => setClicked(i + 1)}
                            className={`optionBtn ${
                              clicked == i + 1 ? "activeBtn" : "null"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    <button
                      onClick={nextQuestion}
                      className="nextBtn btn btn-primary"
                    >
                      Next
                    </button>
                  </>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default QuizApp;
