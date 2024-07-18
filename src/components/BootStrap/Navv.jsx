// // import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// // import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import axios from "axios";
// // import {FormControl } from 'react-bootstrap';
// import {useNavigate} from "react-router-dom";
// // import green3 from "../Pics/green3.png";
// import green4 from "../Pics/green4.png"
// import { ModalBody } from 'react-bootstrap';
// import baseURL from '../config/apiConfig';
// import { Spinner } from 'react-bootstrap';


// function navv()
//  {
//   var navigate = useNavigate();
//   const handleCloseS = () => setShowS(false);
//   const handleShowS = () => setShowS(true);

//   const [loading, setLoading] = useState(false);
//     const handleCloseL = () => setShowL(false);
//     const handleShowL = () => setShowL(true);

//     const [showS, setShowS] = useState(false);
//     const [showL, setShowL] = useState(false);

//     const [errSpan,setErrSpan]=useState("");

//   let [obj,setObj]=useState({
//     email:"",
//     pwd:"",
//     utype:"",
// });
    

//     function doUpdate(event)
//     {
//        let {name,value}=event.target;
//        setObj({...obj,[name]:value});

//     }
//     // async function doSave()
//     // {
      
//     //   const url = `http://localhost:2025/product/save?email=${obj.email}&pwd=${obj.pwd}&utype=${obj.utype}`;
//     //   let respObj=await axios.get(url);
//     //   console.log(respObj.status);
//     //     alert(JSON.stringify(respObj.data));
        
//     // }
//     async function doSave() {
//       const url = `${baseURL}/product/save?email=${obj.email}&pwd=${obj.pwd}&utype=${obj.utype}`;
//        setLoading(true);
//       try {
//           let respObj = await axios.get(url);
//           console.log(respObj.status);
//           alert(JSON.stringify(respObj.data));
//           setLoading(false);
//       } catch (error) {
//           if (error.response && error.response.status === 400) {
//               alert("Email Id is Already in use! Try to log in or Sign Up with a different email id");
//           } else {
//               alert("An error occurred. Please try again later.");
//           }
//           console.error("Error saving data:", error);
//       }
//   }
  
    
    
//     async function doLogin() {
//       setLoading(true);
//       try {
//           const { email, pwd, utype } = obj;
//           if (!email || !pwd) {
//               setErrSpan("Email or password is empty");
//               return;
//           }
  
//           const url = `${baseURL}/product/fetchUserType?email=${email}&pwd=${pwd}&utype=${utype}`;
//           const resp = await axios.get(url);
  
//          if(resp.data)
//           {
//             if (resp.data == "user is blocked") alert("user is blocked");
            
//             else if (resp.data.status) {
//               const { user, jtoken } = resp.data;
//               localStorage.setItem("jtoken", resp.data.jtoken);
//               alert("Login successful");
//               const type = user.utype;
//               const eid = user.email;
//               if (type === "Grower") {
//                   navigate("/dashgrower/" + eid);
//               } else if (type === "Customer") {
//                   navigate("/dashcustomer/" + eid);
//               } else {
//                   navigate("/dashadmin/"+eid);
//               }
//           } else {
//               alert("Error: " + resp.data.msg);
//           }
//           }
//           setLoading(false);
//       } catch (error) {
//           console.error("Error during login:", error);
//           alert("Email or Password is InCorrect.Kindly checked it again...");
//       }
//   }
  
  
//       return (
//         <>
//     <Navbar className="bg-body-dark justify-content-between "  style={{width:"1350px", height:"90px",backgroundColor:"#184603", marginTop:"0px",paddingRight:"50px"}}>
//       <Form inline>
//         {/* <img src={green4} height="200px" width="250px" alt=""  style={{marginLeft:"50px",float:"left"}}/> */}
//        <h1 style={{fontSize:"30px",color:"white",marginTop:"10px",marginLeft:"70px",fontFamily:"Lucida Handwriting ",float:"left"}}>GreenBridge</h1>
//       </Form>
//       <Form inline>
//         <Row>
//           <Col xs="auto">
//           <Button variant="warning"  onClick={handleShowS}>SignUp</Button>

//           </Col>
//           <Col xs="auto">
//             <Button variant="warning" onClick={handleShowL}>Log In</Button>
//           </Col>
//         </Row>
//       </Form>
//     </Navbar>
//             {/* ----- SignUp modal  */}
//           <Modal show={showS} onHide={handleCloseS}>
//             <Modal.Header closeButton>
//               <Modal.Title>Sign Up</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//             <Form>
//       <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
//         <Form.Label column sm="2">
//           Email
//         </Form.Label>
//         <Col sm="10">
//           <Form.Control type="email" name='email' placeholder='Email Id' value={obj.email} onChange={doUpdate} />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
//         <Form.Label column sm="2">
//           Password
//         </Form.Label>
//         <Col sm="10">
//           <Form.Control type="password" name='pwd' placeholder="Password"  onChange={doUpdate}/>
//         </Col>
//         </Form.Group>

//         <Form.Group as={Row} className="mb-3" controlId="formSelectUser" >
//         <Form.Label column sm="2"> UserType</Form.Label>
//         <Col sm="10">
//         <Form.Select aria-label="Default select example" name='utype' onChange={doUpdate}>
//              <option aria-readonly>Select</option>
//             <option value="Grower">Grower</option>
//             <option value="Customer">Customer</option>
//             {/* <option value="admin">admin</option> */}
//         </Form.Select>
//         </Col>
//       </Form.Group>
//     </Form>
//     {/* <p>Already Have an Account ? <a href="#" onClick={handleShowLA}>Log In</a> </p> */}
    
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleCloseS}>
//                 Close
//               </Button>
//               {/* <Button variant="primary" onClick={doSave}>
//                 Sign Up
//               </Button> */}
//                 <Button variant="primary" onClick={doSave} disabled={loading}>
//   {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Sign Up"}
// </Button>
//             </Modal.Footer>

//             {/* ----- log in modal  */}
//           </Modal>
//           <Modal show={showL} onHide={handleCloseL}>
//             <Modal.Header closeButton>
//               <Modal.Title>Log In</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//         <Form>
//       <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
//         <Form.Label column sm="2">
//           Email
//         </Form.Label>
//         <Col sm="10">
//         <Form.Control type="email" name='email' placeholder='Email Id' value={obj.email} onChange={doUpdate} />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
//         <Form.Label column sm="2">
//           Password
//         </Form.Label>
//         <Col sm="10">
//         <Form.Control type="password" name='pwd' placeholder="Password" value={obj.pwd}  onChange={doUpdate}/>
//         </Col>
//       </Form.Group>
//     </Form>
  
//             </Modal.Body>
//             <Modal.Footer>
//             <span style={{color:"red"}}>{errSpan}</span>
//               <Button variant="secondary" onClick={handleCloseL}>
//                 Close
//               </Button>
//               {/* <Button variant="primary" onClick={doLogin}>
//                 Log In
//               </Button> */}
//                 <Button variant="primary" onClick={doLogin} disabled={loading}>
//   {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Log In"}
// </Button>
//             </Modal.Footer>
//           </Modal>         
          
        
     
//           </>

//   );
// }
// // import { formToJSON } from 'axios';

// export default navv;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import green4 from '../Pics/green4.png';
import { Spinner } from 'react-bootstrap';
import baseURL from '../config/apiConfig';

function Navv() {
  const navigate = useNavigate();
  const handleCloseS = () => setShowS(false);
  const handleShowS = () => setShowS(true);

  const [loading, setLoading] = useState(false);
  const handleCloseL = () => setShowL(false);
  const handleShowL = () => setShowL(true);

  const [showS, setShowS] = useState(false);
  const [showL, setShowL] = useState(false);

  const [errSpan, setErrSpan] = useState('');

  const [obj, setObj] = useState({
    email: '',
    pwd: '',
    utype: '',
  });

  function doUpdate(event) {
    let { name, value } = event.target;
    setObj({ ...obj, [name]: value });
  }

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
        alert('Email Id is Already in use! Try to log in or Sign Up with a different email id');
      } else {
        alert('An error occurred. Please try again later.');
      }
      console.error('Error saving data:', error);
      setLoading(false); // Ensure to stop loading in case of an error
    }
  }

  async function doLogin() {
    setLoading(true);
    try {
      const { email, pwd, utype } = obj;
      if (!email || !pwd) {
        setErrSpan('Email or password is empty');
        setLoading(false); // Ensure to stop loading in case of an empty field
        return;
      }

      const url = `${baseURL}/product/fetchUserType?email=${email}&pwd=${pwd}&utype=${utype}`;
      const resp = await axios.get(url);

      if (resp.data) {
        if (resp.data === 'user is blocked') {
          alert('User is blocked');
        } else if (resp.data.status) {
          const { user, jtoken } = resp.data;
          localStorage.setItem('jtoken', jtoken);
          alert('Login successful');
          const type = user.utype;
          const eid = user.email;
          if (type === 'Grower') {
            navigate('/dashgrower/' + eid);
          } else if (type === 'Customer') {
            navigate('/dashcustomer/' + eid);
          } else {
            navigate('/dashadmin/' + eid);
          }
        } else {
          alert('Error: ' + resp.data.msg);
        }
      }
      setLoading(false);
    } catch (error) {
      console.error('Error during login:', error);
      alert('Email or Password is incorrect. Kindly check it again...');
      setLoading(false); // Ensure to stop loading in case of an error
    }
  }

  return (
    <>
      <Navbar className="bg-body-dark justify-content-between" style={{ backgroundColor: '#184603', padding: '10px 20px' }}>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          {/* <img src={green4} height="50px" alt="GreenBridge" className="mr-2" /> */}
          <h1 style={{ fontSize: '30px', color: 'white', margin: '0', fontFamily: 'Lucida Handwriting' }}>GreenBridge</h1>
        </Navbar.Brand>
        <Form inline>
          <Row>
            <Col xs="auto" className="my-1">
              <Button variant="warning" onClick={handleShowS}>
                Sign Up
              </Button>
            </Col>
            <Col xs="auto" className="my-1">
              <Button variant="warning" onClick={handleShowL}>
                Log In
              </Button>
            </Col>
          </Row>
        </Form>
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
                <Form.Control type="email" name="email" placeholder="Email Id" value={obj.email} onChange={doUpdate} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" name="pwd" placeholder="Password" onChange={doUpdate} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formSelectUser">
              <Form.Label column sm="2">
                UserType
              </Form.Label>
              <Col sm="10">
                <Form.Select aria-label="Default select example" name="utype" onChange={doUpdate}>
                  <option value="">Select</option>
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
          <Button variant="primary" onClick={doSave} disabled={loading}>
            {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Sign Up'}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ----- Log In modal  */}
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
                <Form.Control type="email" name="email" placeholder="Email Id" value={obj.email} onChange={doUpdate} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" name="pwd" placeholder="Password" value={obj.pwd} onChange={doUpdate} />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <span style={{ color: 'red' }}>{errSpan}</span>
          <Button variant="secondary" onClick={handleCloseL}>
            Close
          </Button>
          <Button variant="primary" onClick={doLogin} disabled={loading}>
            {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Log In'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navv;
