import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

function NavvBarr()
 {
    var navigate=useNavigate();
    function goBack() {
        navigate('/');
      }
  return (
    <>
    <Navbar className="bg-body-dark justify-content-between" style={{ width: "1360px", height: "90px", backgroundColor: "#184603", marginTop: "0px", paddingRight: "50px" }}>
    <Form inline style={{ display: "flex", flexDirection: "row" }}>
      <h1 style={{ fontSize: "30px", color: "white", marginTop: "10px", marginLeft: "70px", fontFamily: "Lucida Handwriting", float: "left" }}>GreenBridge</h1>
    </Form>
    <Form inline>
      <Row>
        <Col xs="auto">
          <Button variant="warning" onClick={goBack}>Back</Button>
        </Col>
      </Row>
    </Form>
  </Navbar>
    </>
  )
}

export default NavvBarr