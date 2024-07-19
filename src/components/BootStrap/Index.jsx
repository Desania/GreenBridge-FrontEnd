import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import farmer3 from "../Pics/farmer3.jpg"
import ds from "../Pics/ds.jpg"
import dc1 from "../Pics/dc1.jpg"
import cs from "../Pics/cs.png"
import lp from "../Pics/lp.jpg"
import localfarmer from "../Pics/localfarmer.jpg"
import susagr from "../Pics/susagr.jpg"
import Footer from "./Footer";
import { Container, Row, Col } from 'react-bootstrap';
import Navv from "./Navv";
import "./IndexCSS.css"

function Index() {
  return (
    <div>
      <Navv />
      <Container>
        <center>
          <div className="welcome-section">
            <div className="welcome-text">
              <p className="welcome-title">Welcome To GreenBridge....</p>
              <p className="welcome-description">
                It is an innovative platform that addresses the needs of growers (farmers) who may find themselves
                in a situation where they did not receive as much money as they
                deserve due to intermediaries. My project acts as a bridge between growers (farmers) and direct customers so that growers 
                (farmers) can sell their products directly.
              </p>
            </div>
            <div className="welcome-image">
              <img src={farmer3} alt="Farmer" className="responsive-img" />
            </div>
          </div>
        </center>

        <br /><br />
        <center>
          <div>
            <h1>Services We Are Providing</h1>
            <br /><br />
            <Container>
              <Row>
                <Col xs={12} sm={6} md={4} className="service-col">
                  <img src={ds} className="service-img" alt="Direct Sales" />
                  <br /><br />
                  <p className="service-title">Direct Sales</p>
                </Col>
                <Col xs={12} sm={6} md={4} className="service-col">
                  <img src={localfarmer} className="service-img" alt="Support Local Farmers" />
                  <br /><br />
                  <p className="service-title">Support Local Farmers</p>
                </Col>
                <Col xs={12} sm={6} md={4} className="service-col">
                  <img src={susagr} className="service-img" alt="Sustainable Agriculture" />
                  <br /><br />
                  <p className="service-title">Sustainable Agriculture</p>
                </Col>
              </Row>
              <br /><br /><br />
              <Row>
                <Col xs={12} sm={6} md={4} className="service-col">
                  <img src={dc1} className="service-img" alt="Direct Communication" />
                  <br /><br />
                  <p className="service-title">Direct Communication</p>
                </Col>
                <Col xs={12} sm={6} md={4} className="service-col">
                  <img src={cs} className="service-img" alt="Customer Support" />
                  <br /><br />
                  <p className="service-title">Customer Support</p>
                </Col>
                <Col xs={12} sm={6} md={4} className="service-col">
                  <img src={lp} className="service-img" alt="Loyalty Programs" />
                  <br /><br />
                  <p className="service-title">Loyalty Programs</p>
                </Col>
              </Row>
            </Container>
          </div>
        </center>
        <br /><br /><br />
      </Container>
      <Footer />
    </div>
  );
}

export default Index;
