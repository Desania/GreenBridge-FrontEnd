// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
// import {FormControl } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
// import green3 from "../Pics/green3.png";
import green4 from "../Pics/green4.png"
import { ModalBody } from 'react-bootstrap';
import baseURL from '../config/apiConfig';
import { Spinner } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';


function navv()
 {
  var navigate = useNavigate();
  const handleCloseS = () => setShowS(false);
  const handleShowS = () => setShowS(true);

  const [loading, setLoading] = useState(false);
    const handleCloseL = () => setShowL(false);
    const handleShowL = () => setShowL(true);

    const [showS, setShowS] = useState(false);
    const [showL, setShowL] = useState(false);

    const [errSpan,setErrSpan]=useState("");

  let [obj,setObj]=useState({
    email:"",
    pwd:"",
    utype:"",
});
    

    function doUpdate(event)
    {
       let {name,value}=event.target;
       setObj({...obj,[name]:value});

    }
    // async function doSave()
    // {
      
    //   const url = `http://localhost:2025/product/save?email=${obj.email}&pwd=${obj.pwd}&utype=${obj.utype}`;
    //   let respObj=await axios.get(url);
    //   console.log(respObj.status);
    //     alert(JSON.stringify(respObj.data));
        
    // }
    async function doSave() {
      const url = `${baseURL}/product/save?email=${obj.email}&pwd=${obj.pwd}&utype=${obj.utype}`;
       setLoading(true);
      try {
          let respObj = await axios.get(url);
          console.log(respObj.status);
          alert(JSON.stringify(respObj.data));
          setLoading(false);
      } catch (error) {
          if (error.response && error.response.status === 400) {
              alert("Email Id is Already in use! Try to log in or Sign Up with a different email id");
          } else {
              alert("An error occurred. Please try again later.");
          }
          console.error("Error saving data:", error);
      }
  }
  
    
    
    async function doLogin() {
      setLoading(true);
      try {
          const { email, pwd, utype } = obj;
          if (!email || !pwd) {
              setErrSpan("Email or password is empty");
              return;
          }
  
          const url = `${baseURL}/product/fetchUserType?email=${email}&pwd=${pwd}&utype=${utype}`;
          const resp = await axios.get(url);
  
         if(resp.data)
          {
            if (resp.data == "user is blocked") alert("user is blocked");
            
            else if (resp.data.status) {
              const { user, jtoken } = resp.data;
              localStorage.setItem("jtoken", resp.data.jtoken);
              alert("Login successful");
              const type = user.utype;
              const eid = user.email;
              if (type === "Grower") {
                  navigate("/dashgrower/" + eid);
              } else if (type === "Customer") {
                  navigate("/dashcustomer/" + eid);
              } else {
                  navigate("/dashadmin/"+eid);
              }
          } else {
              alert("Error: " + resp.data.msg);
          }
          }
          setLoading(false);
      } catch (error) {
          console.error("Error during login:", error);
          alert("Email or Password is InCorrect.Kindly checked it again...");
      }
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
          <Nav className="mx-2 ">
          <Button variant="warning"  onClick={handleShowS}>SignUp</Button>
          </Nav>
          <Nav className="mx-2 ">
          <Button variant="warning" onClick={handleShowL}>Log In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            {/* ----- SignUp modal  */}
          <Modal show={showS} onHide={handleCloseS}>
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" name='email' placeholder='Email Id' value={obj.email} onChange={doUpdate} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" name='pwd' placeholder="Password"  onChange={doUpdate}/>
        </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formSelectUser" >
        <Form.Label column sm="2"> UserType</Form.Label>
        <Col sm="10">
        <Form.Select aria-label="Default select example" name='utype' onChange={doUpdate}>
             <option aria-readonly>Select</option>
            <option value="Grower">Grower</option>
            <option value="Customer">Customer</option>
            {/* <option value="admin">admin</option> */}
        </Form.Select>
        </Col>
      </Form.Group>
    </Form>
    {/* <p>Already Have an Account ? <a href="#" onClick={handleShowLA}>Log In</a> </p> */}
    
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseS}>
                Close
              </Button>
              {/* <Button variant="primary" onClick={doSave}>
                Sign Up
              </Button> */}
                <Button variant="primary" onClick={doSave} disabled={loading}>
  {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Sign Up"}
</Button>
            </Modal.Footer>

            {/* ----- log in modal  */}
          </Modal>
          <Modal show={showL} onHide={handleCloseL}>
            <Modal.Header closeButton>
              <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
        <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
        <Form.Control type="email" name='email' placeholder='Email Id' value={obj.email} onChange={doUpdate} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
        <Form.Control type="password" name='pwd' placeholder="Password" value={obj.pwd}  onChange={doUpdate}/>
        </Col>
      </Form.Group>
    </Form>
  
            </Modal.Body>
            <Modal.Footer>
            <span style={{color:"red"}}>{errSpan}</span>
              <Button variant="secondary" onClick={handleCloseL}>
                Close
              </Button>
              {/* <Button variant="primary" onClick={doLogin}>
                Log In
              </Button> */}
                <Button variant="primary" onClick={doLogin} disabled={loading}>
  {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Log In"}
</Button>
            </Modal.Footer>
          </Modal>         
          
        
     
          </>

  );
}
// import { formToJSON } from 'axios';

export default navv;