import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate,useParams} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cust from "../Pics/cust.jpg"
import custpro from "../Pics/custpro.jpg"
import growfind from "../Pics/growfinf.jpg"
import github from "../Pics/github.png"
import inst from "../Pics/inst.png"
import twit from "../Pics/twit.png"
import NavvBarr from "../BootStrap/NavvBarr"

import fresh from "../Pics/fresh.jpg"
function DashCustomer() 
{
  let {eid}=useParams();
  var navigate=useNavigate();
  function goGrowerFinder()
  {
    navigate("/growerfinder/"+eid);
  }
  function goCustomerProfile()
  {
    navigate("/customerprofile/"+eid);
  }
  function goBack()
  {
    navigate("/")
  }
  return(
    <>
  <NavvBarr></NavvBarr>
    <center>
      {/* <h1>Dash Customer</h1> */}
      </center>
    <br /><br />
    {/* email id : {eid} */}
    <div style={{paddingTop:"20px",height:"",width:"1350px"}}>
    
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
         <img src={cust} height="350px" width="450px" alt="" />
         
         <Card style={{ width: '350px',height:"400px" }}>

          <Card.Body>
         <center><img src={custpro} height="200px" alt="" />
         <br /><br />
         <Card.Title>Create Profile</Card.Title>
          <p>Create Your Profile, If You have already your profile, you can update your profile</p>
          <Button variant="warning" onClick={goCustomerProfile}>Create Profile</Button>
        </center>
        </Card.Body>
        </Card>

  </div>
  <div style={{paddingTop:"20px",height:"",width:"1350px"}}>
    
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
       
         
         <Card style={{ width: '350px',height:"400px" }}>

          <Card.Body>
         <center><img src={growfind} style={{borderRadius:"50%"}} height="200px" alt="" />
         <br /><br />
         <Card.Title>Grower Finder</Card.Title>
          <p>You can find Products as per your requirements,also the details of grower</p>
          <Button variant="warning" onClick={goGrowerFinder}>Grower Finder</Button>
        </center>
        </Card.Body>
        </Card>
        <img src={fresh} height="350px" width="450px" alt="" />
  </div>
  </div>
    </div>
    <br /> <br />
    <div style={{height:"380px",width:"1350px",backgroundColor:"#F6F5F2",padding:"50px",display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
    
    <div style={{borderRight:"1px solid gray",paddingRight:"40px"}}>
    <h3>Services</h3>
    <br />
    <p>Direct Sales</p>
    <p>Order Management</p>
    <p>Marketing Support</p>
    <p>Direct Communication</p>
    <p>Customer Support</p>
    <p>Loyality Programs</p>
    
    </div>

    <div style={{borderRight:"1px solid gray",paddingRight:"40px"}}>
    <h3>About Us</h3>
    <br />
    <p  style={{textAlign:"left"}}>
       It is an innovative platform that addresses the needs <br /> of growers (farmers) who may find themselves
        in a  <br /> situation where they did not receive as much money as they <br />
        deserve due to intermediaries. My project acts as a bridge <br /> between growers (farmers) and direct customers so that growers  <br />
        (farmers) can sell their products directly.</p>
    </div>

    <div style={{borderRight:"1px solid gray",paddingRight:"40px"}}>
    <h3>Contact Us</h3>
    <br />
    <p style={{textAlign:"left"}}>
      Bathinda, Punjab
      <br />
      Email Id : gargdesania@gmail.com
      <br />
      Phone No. +91 7973406533
    </p>
    </div>

    <div >
    <h3></h3>
    <br />
    <p>
      <img src={github} alt="github" style={{float:"left"}} />
      <img src={inst} alt="instagram" style={{float:"left",height:"30px",width:"30px"}}/>
      <img src={twit} alt="twitter" style={{float:"left",height:"25px",width:"25px"}} />
    </p>
    </div>
 
    </div>
    </>
  )
}

export default DashCustomer;