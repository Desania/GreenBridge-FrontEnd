// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import {useNavigate,useParams} from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar'
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import cust from "../Pics/cust.jpg"
// import custpro from "../Pics/custpro.jpg"
// import growfind from "../Pics/growfinf.jpg"
// import NavvBarr from "../BootStrap/NavvBarr"
// import Footer from '../BootStrap/Footer';

// import fresh from "../Pics/fresh.jpg"
// function DashCustomer() 
// {
//   let {eid}=useParams();
//   var navigate=useNavigate();
//   function goGrowerFinder()
//   {
//     navigate("/growerfinder/"+eid);
//   }
//   function goCustomerProfile()
//   {
//     navigate("/customerprofile/"+eid);
//   }
//   function goBack()
//   {
//     navigate("/")
//   }
//   return(
//     <>
//   <NavvBarr></NavvBarr>
//     <center>
//       {/* <h1>Dash Customer</h1> */}
//       </center>
//     <br /><br />
//     {/* email id : {eid} */}
//     <div style={{paddingTop:"20px",height:"",width:"1350px"}}>
    
//     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
//          <img src={cust} height="350px" width="450px" alt="" />
         
//          <Card style={{ width: '350px',height:"400px" }}>

//           <Card.Body>
//          <center><img src={custpro} height="200px" alt="" />
//          <br /><br />
//          <Card.Title>Create Profile</Card.Title>
//           <p>Create Your Profile, If You have already your profile, you can update your profile</p>
//           <Button variant="warning" onClick={goCustomerProfile}>Create Profile</Button>
//         </center>
//         </Card.Body>
//         </Card>

//   </div>
//   <div style={{paddingTop:"20px",height:"",width:"1350px"}}>
    
//     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
       
         
//          <Card style={{ width: '350px',height:"400px" }}>

//           <Card.Body>
//          <center><img src={growfind} style={{borderRadius:"50%"}} height="200px" alt="" />
//          <br /><br />
//          <Card.Title>Grower Finder</Card.Title>
//           <p>You can find Products as per your requirements,also the details of grower</p>
//           <Button variant="warning" onClick={goGrowerFinder}>Grower Finder</Button>
//         </center>
//         </Card.Body>
//         </Card>
//         <img src={fresh} height="350px" width="450px" alt="" />
//   </div>
//   </div>
//     </div>
//     <br /> <br />
//     <Footer></Footer>
//     </>
//   )
// }

// export default DashCustomer;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from "react-router-dom";
import NavvBarr from "../BootStrap/NavvBarr";
import Footer from '../BootStrap/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import cust from "../Pics/cust.jpg";
import custpro from "../Pics/custpro.jpg";
import growfind from "../Pics/growfinf.jpg";
import fresh from "../Pics/fresh.jpg";

function DashCustomer() {
  let { eid } = useParams();
  var navigate = useNavigate();

  function goGrowerFinder() {
    navigate("/growerfinder/" + eid);
  }

  function goCustomerProfile() {
    navigate("/customerprofile/" + eid);
  }

  function goBack() {
    navigate("/");
  }

  return (
    <>
      <NavvBarr></NavvBarr>
      <Container className="mt-4">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <img src={cust}  className="img-fluid" alt="Customer" />
          </Col>
          <Col xs={12} md={6}>
            <Card style={{ width: '100%', height: "100%" }}>
              <Card.Body className="text-center">
                <img src={custpro} className="img-fluid mb-4" alt="Customer Profile" style={{ maxHeight: "200px" }} />
                <Card.Title>Create Profile</Card.Title>
                <Card.Text>Create Your Profile, If you have already your profile, you can update your profile</Card.Text>
                <Button variant="warning" onClick={goCustomerProfile}>Create Profile</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="align-items-center mt-4">
          <Col xs={12} md={6}>
            <Card style={{ width: '100%', height: "100%" }}>
              <Card.Body className="text-center">
                <img src={growfind} className="img-fluid mb-4" alt="Grower Finder" style={{ maxHeight: "200px", borderRadius: "50%" }} />
                <Card.Title>Grower Finder</Card.Title>
                <Card.Text>You can find Products as per your requirements, also the details of grower</Card.Text>
                <Button variant="warning" onClick={goGrowerFinder}>Grower Finder</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <img src={fresh} className="img-fluid" alt="Fresh Products" />
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default DashCustomer;
