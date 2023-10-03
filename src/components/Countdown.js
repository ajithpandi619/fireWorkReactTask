import React from "react";
import Countdown from "react-countdown";
import { Container, Row, Col } from "react-bootstrap";
import "../components/Countdown.css";

const Countdowns = () => {
  const newYearDate = new Date("January 1, 2024 00:00:00").getTime();

  const renderer = ({ days, hours, minutes, seconds }) => (
    <Container fluid className="app-container">
      <Row className="background-image" />
      <Row className="content">
        <Row>
          <div className="count-text">
            <span style={{ fontSize: "60%" }}>Countdown</span>
            <br />
            <span style={{ fontSize: "60%" }}>To</span>
            <br />
            <b>New Year</b>
          </div>
        </Row>

        <Row className="count-container">
          <Col className="count-item">
            <div className="count-value">{days}</div>
            <div className="count-label">Days</div>
          </Col>
          <Col className="count-item">
            <div className="count-value">{hours}</div>
            <div className="count-label">Hours</div>
          </Col>
          <Col className="count-item">
            <div className="count-value">{minutes}</div>
            <div className="count-label">Minutes</div>
          </Col>
          <Col className="count-item">
            <div className="count-value">{seconds}</div>
            <div className="count-label">Seconds</div>
          </Col>
        </Row>
      </Row>
    </Container>
  );

  return <Countdown date={newYearDate} renderer={renderer} />;
};

export default Countdowns;
