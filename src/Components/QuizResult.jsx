import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const QuizResult = (props) => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <div className="resultBody">
              <h1 className="resultScore"> Your Score: {props.score} </h1>
              <h2 className="resultTotal"> Total Score: {props.totalScore} </h2>
              <button
                className="resetBtn btn btn-primary"
                onClick={props.tryAgain}
              >
                Again
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default QuizResult;
