import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavvBarr()
 {
    var navigate=useNavigate();
    function goBack() {
        navigate('/');
      }
  return (
    <>
     
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:" rgb(19, 87, 53)"}}>
      <Container>
        <Navbar.Brand style={{fontSize:"30px",color:"white",marginTop:"10px",marginLeft:"40px",fontFamily:"Lucida Handwriting ",float:"left"}}>Green Bridge</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className="mx-3 mb-2">
          <Button variant="warning" onClick={goBack}>Back</Button>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </>
  )
}

export default NavvBarr