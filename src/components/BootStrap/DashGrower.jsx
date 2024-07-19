import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from "react-router-dom";
import NavvBarr from "../BootStrap/NavvBarr";
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import grow from "../Pics/grow.avif";
import profile from "../Pics/profile.jpg";
import listpro from "../Pics/listpro.png";
import viewpro from "../Pics/viewpro.png";
import lp from "../Pics/lp.jpg";
import pic3 from "../Pics/pic3.avif";


function DashGrower() {
 
  let { eid } = useParams();
  var navigate = useNavigate();

  function goGrowerProfile() {
    navigate("/profilegrower/" + eid);
  }

  function goListproducts() {
    navigate("/listproducts/" + eid);
  }

  function goViewListProducts() {
    navigate("/viewlistproducts/" + eid);
  }

  function goBack() {
    navigate("/");
  }

  function handleLogout() {
    navigate("/");
  }

  return (
    <>
      <NavvBarr></NavvBarr>
      <Container className="mt-4">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <img src={grow} className="img-fluid rounded" alt="Grower" />
          </Col>
          <Col xs={12} md={6}>
            <Card className="h-100">
              <Card.Body className="text-center">
                <img src={profile} className="img-fluid mb-4 rounded-circle" alt="Profile" style={{ maxHeight: "200px" }} />
                <Card.Title>Create Profile</Card.Title>
                <Card.Text>Create Your Profile, If you have already your profile, you can update your profile</Card.Text>
                <Button variant="warning" onClick={goGrowerProfile}>Grower Profile</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="align-items-center mt-4">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <Card className="h-100">
              <Card.Body className="text-center">
                <img src={listpro} className="img-fluid mb-4" alt="List Products" style={{ maxHeight: "200px" }} />
                <Card.Title>List Products</Card.Title>
                <Card.Text>List Your Products instantly and make them public for consumers.</Card.Text>
                <Button variant="warning" onClick={goListproducts}>List Products</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <img src={lp}style={{hegiht:"80%", width:"100%"}} className="img-fluid rounded" alt="Products" />
          </Col>
        </Row>
        <Row className="align-items-center mt-4">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <img src={pic3} className="img-fluid rounded" alt="Products" />
          </Col>
          <Col xs={12} md={6}>
            <Card className="h-100">
              <Card.Body className="text-center">
                <img src={viewpro} className="img-fluid mb-4" alt="View Products" style={{ maxHeight: "200px" }} />
                <Card.Title>View Products</Card.Title>
                <Card.Text>View Your Products instantly and make sure that all the products have the right information.</Card.Text>
                <Button variant="warning" onClick={goViewListProducts}>View Products</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br /><br />     
      <Footer></Footer>
    </>
  );
}

export default DashGrower;
