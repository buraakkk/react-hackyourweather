import React from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import covid1 from "./covid1.jpg";
import covid2 from "./covidTech.png";
import covid3 from "./covidSearch.jpg";
import covid4 from "./covidResponse.jpg";
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
              Advice
            </Nav.Link>
          </h4>
          <h4>
            <Nav.Link
              style={{ color: "black", textDecoration: "none" }}
              href="#details"
            >
              Response
            </Nav.Link>
          </h4>
          <h4>
            <Nav.Link
              style={{ color: "black", textDecoration: "none" }}
              href="#payment"
            >
              Technical guidance
            </Nav.Link>
          </h4>
          <h4>
            <Nav.Link
              style={{ color: "black", textDecoration: "none" }}
              href="#fqa"
            >
              Research
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
            <h3>Advice for the public</h3>
            <p
              style={{
                fontSize: "1.3rem",
                textAlign: "justify",
                marginTop: "2rem",
              }}
            >
              Maintain at least a 1-metre distance between yourself and others
              to reduce your risk of infection when they cough, sneeze or speak.
              Maintain an even greater distance between yourself and others when
              indoors. The further away, the better. Make wearing a mask a
              normal part of being around other people. The appropriate use,
              storage and cleaning or disposal are essential to make masks as
              effective as possible. The further away, the better. Make wearing
              a mask a normal part of being around other people.
            </p>
          </Col>
          <Col>
            <img
              src={covid1}
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
              src={covid2}
              className="img-fluid shadow-2-strong"
              alt="..."
              style={{ maxWidth: "36rem" }}
            />
          </Col>
          <Col>
            <h3>Response</h3>
            <p
              style={{
                fontSize: "1.3rem",
                textAlign: "justify",
                marginTop: "2rem",
              }}
            >
              The Weekly Epidemiological Update provides an overview of the
              global, regional and country-level COVID-19 cases and deaths,
              highlighting key data and trends; as well as other pertinent
              epidemiological information concerning the COVID-19 pandemic. The
              COVID-19 Weekly Operational Update reports on WHO and partners’
              actions in response to the pandemic.
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
            <h3>Status of environmental surveillance for SARS-CoV-2 virus</h3>
            <p
              style={{
                fontSize: "1.3rem",
                textAlign: "justify",
                marginTop: "2rem",
              }}
            >
              Environmental surveillance by testing of wastewater for evidence
              of pathogens has a long history of use in public health,
              particularly for poliovirus1 and more recently antimicrobial
              resistance (AMR).2 In the context of the ongoing COVID-19
              pandemic, it is being used for the detection of SARS-CoV-2 shed
              into wastewater from the upper gastrointestinal and upper
              respiratory system and via faeces.
            </p>
          </Col>
          <Col>
            <img
              src={covid3}
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
        id="fqa"
      >
        {" "}
        <Row>
          <Col>
            <img
              src={covid4}
              className="img-fluid shadow-2-strong"
              alt="..."
              style={{ maxWidth: "36rem" }}
            />
          </Col>
          <Col>
            <h3>Research</h3>
            <p
              style={{
                fontSize: "1.3rem",
                textAlign: "justify",
                marginTop: "2rem",
              }}
            >
              Global research on coronavirus disease (COVID-19)
              <br /> WHO is bringing the world’s scientists and global health
              professionals together to accelerate the research and development
              process, and develop new norms and standards to contain the spread
              of the coronavirus pandemic and help care for those affected. The
              R&D Blueprint has been activated to accelerate diagnostics,
              vaccines and therapeutics for this novel coronavirus. The
              solidarity of all countries will be essential to ensure equitable
              access to COVID-19 health products.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CovidPage;
