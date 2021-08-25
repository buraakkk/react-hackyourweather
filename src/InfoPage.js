import React from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import covid1 from "./info1.jpg";
import covid2 from "./info2.png";
import covid3 from "./info3.jpg";
import covid4 from "./info4.png";
import covid5 from "./info5.png";
const CovidPage = () => {
  return (
    <Container className="border" style={{ color: "black" }}>
      <Container style={{ marginTop: "2%", marginBottom: "2%", padding: "1%" }}>
        <Nav className="me-auto">
          <h4>
            <Nav.Link
              style={{ color: "black", textDecoration: "none" }}
              href="#about"
            >
              Open Weather
            </Nav.Link>
          </h4>
          <h4>
            <Nav.Link
              style={{ color: "black", textDecoration: "none" }}
              href="#payment"
            >
              API
            </Nav.Link>
          </h4>
          <h4>
            <Nav.Link
              style={{ color: "black", textDecoration: "none" }}
              href="#details"
            >
              Pricing
            </Nav.Link>
          </h4>
          <h4>
            <Nav.Link
              style={{ color: "black", textDecoration: "none" }}
              href="#fqa"
            >
              Partners
            </Nav.Link>
          </h4>
          <h4>
            <Nav.Link
              style={{ color: "black", textDecoration: "none" }}
              href="#contact"
            >
              Contact Us
            </Nav.Link>
          </h4>
        </Nav>
      </Container>
      <Container
        style={{ marginTop: "2%", marginBottom: "2%", padding: "1%" }}
        className="border"
        id="about"
      >
        <Row>
          <Col>
            <img
              src={covid1}
              className="img-fluid shadow-2-strong"
              alt="..."
              style={{ maxWidth: "36rem" }}
            />
          </Col>
          <Col>
            <h3>Weather data in a fast and elegant way</h3>
            <p
              style={{
                fontSize: "1.3rem",
                textAlign: "justify",
                marginTop: "2rem",
              }}
            >
              We are providing highly recognisable weather products that make
              working with the weather data a way easier. We work with millions
              of developers around a clock and believe that these benefits might
              be suitable for most of applications, up to the complex enterprise
              systems.
            </p>
          </Col>
        </Row>
      </Container>
      <Container
        style={{ marginTop: "2%", marginBottom: "2%", padding: "1%" }}
        className="border"
        id="payment"
      >
        <Row>
          <Col>
            <h3>Historical weather for any location</h3>
            <p
              style={{
                fontSize: "1.3rem",
                textAlign: "justify",
                marginTop: "2rem",
              }}
            >
              Our new technology, Time Machine, has allowed us to enhance the
              data in the Historical Weather Collection. Historical weather data
              available for ANY coordinate The depth of historical data have
              been extended to 40 YEARS You can download data from Personal
              account or contact us to order it. The price is highly competitive
              - only 10$ per location!
            </p>
          </Col>
          <Col>
            <img
              src={covid2}
              className="img-fluid shadow-2-strong"
              alt="..."
              style={{ maxWidth: "36rem" }}
            />
          </Col>
        </Row>
      </Container>
      <Container
        style={{ marginTop: "2%", marginBottom: "2%", padding: "1%" }}
        className="border"
        id="details"
      >
        <Row>
          <Col>
            <img
              src={covid3}
              className="img-fluid shadow-2-strong"
              alt="..."
              style={{ maxWidth: "36rem" }}
            />
          </Col>
          <Col>
            <h3>Pricing</h3>
            <p
              style={{
                fontSize: "1.3rem",
                textAlign: "justify",
                marginTop: "2rem",
              }}
            >
              Get weather data for any location on the globe immediately with
              our superb APIs! Just sign up with your email and start using
              minute forecasts, hourly forecasts, history and other weather data
              in your applications for free. For more functionality, please
              consider our generous subscriptions.
            </p>
          </Col>
        </Row>
      </Container>
      <Container
        style={{ marginTop: "2%", marginBottom: "2%", padding: "1%" }}
        className="border"
        id="fqa"
      >
        {" "}
        <Row>
          <Col>
            <h3>Partners and solutions</h3>
            <p
              style={{
                fontSize: "1.3rem",
                textAlign: "justify",
                marginTop: "2rem",
              }}
            >
              <h4>
                Google Weather-Based Campaign Management with OpenWeatherMap API
              </h4>
              Demand for certain products and services varies greatly depending
              on the weather. For example, users are much more likely to search
              for information on amusement parks on a hot, sunny day than if
              it's cold and raining. An amusement park company may want to
              increase their bids when the weather is nice, but doing so every
              day would require a lot of manual work. With AdWords scripts,
              however, it's possible to programmatically fetch weather
              information and adjust bids in a matter of minutes.
            </p>
          </Col>
          <Col>
            <img
              src={covid4}
              className="img-fluid shadow-2-strong"
              alt="..."
              style={{ maxWidth: "36rem" }}
            />
          </Col>
        </Row>
      </Container>
      <Container
        style={{ marginTop: "2%", marginBottom: "2%", padding: "1%" }}
        className="border"
        id="contact"
      >
        <Row>
          <Col>
            <img
              src={covid5}
              className="img-fluid shadow-2-strong"
              alt="..."
              style={{ maxWidth: "36rem" }}
            />
          </Col>
          <Col>
            <h3>Have a question? </h3>
            <p
              style={{
                fontSize: "1.4rem",
                textAlign: "justify",
                marginTop: "2rem",
              }}
            >
              We are providing highly recognisable weather products that make
              working with the weather data a way easier. We work with millions
              of developers around a clock and believe that these benefits might
              be suitable for most of applications, up to the complex enterprise
              systems.
            </p>
            <h3>
              <Link style={{ color: "black" }} to="/ContactUsPage">
                Contact us{" "}
              </Link>{" "}
            </h3>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CovidPage;
