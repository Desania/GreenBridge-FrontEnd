import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate, useParams} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import green4 from "../Pics/green4.png"
import agrbg4 from "../Pics/agrbg4.jpg"
import profile from "../Pics/profile.jpg"
import listpro from "../Pics/listpro.png"
import viewpro from "../Pics/viewpro.png"
import github from "../Pics/github.png"
import inst from "../Pics/inst.png"
import twit from "../Pics/twit.png"
import grow from "../Pics/grow.avif"
import pic2 from "../Pics/pic2.jpg"
import pic3 from "../Pics/pic3.avif"
import NavvBarr from "../BootStrap/NavvBarr"
function DashGrower() 
{
  let {eid}=useParams();
  var navigate=useNavigate();
  function goGrowerProfile()
  {
    navigate("/profilegrower/"+eid);
  }
  function goListproducts()
  {
    navigate("/listproducts/"+eid);

  }
  function goViewListProducts()
  {
    navigate("/viewlistproducts/"+eid);
  }

  function goBack()
  {
    navigate("/")
  }
  function handleLogout() {
    // Perform logout actions here, e.g., clearing session, removing tokens, etc.
    // Then navigate to the homepage
    navigate("/");
  }
  return (
    <>
   <NavvBarr></NavvBarr>

      {/* <br /><br />
      <p> <b>Email Id : </b> {eid}</p> */}
    
    <div style={{paddingTop:"20px",height:"",width:"1350px"}}>
    
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
         <img src={grow} height="400px" width="500px" style={{borderRadius:"50px"}} />
          <Card style={{ width: '350px',height:"400px" }}>

          <Card.Body>
         <center><img src={profile} height="200px" style={{borderRadius:"50%"}} />
         <br /><br />
         <Card.Title>Create Profile</Card.Title>
          <p>Create Your Profile, If You have already your profile, you can update your profile</p>
          <Button variant="warning" onClick={goGrowerProfile} >Grower Profile</Button>
        </center>
        </Card.Body>
        </Card>
  </div>
<br /><br />
  <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
    <Card style={{ width: '350px',height:"400px" }}>

      <Card.Body>
      <center><img src={listpro} height="200px" alt="" />
      <br /><br />
      <Card.Title>List Products</Card.Title>
  <p>List Your Products instantly and make them public for consumers.</p>
  <Button variant="warning" onClick={goListproducts}>List Products</Button>
</center>
</Card.Body>
</Card>

    <img src={pic2} height="400px" width="600px" style={{borderRadius:"50px"}} />
  </div>
<br /><br />

<div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>

  <img src={pic3} style={{borderRadius:"50px"}} />
    <Card style={{ width: '350px',height:"400px" }}>

<Card.Body>
<center><img src={viewpro} height="200px" alt="" />
<br /><br />
<Card.Title>View Products</Card.Title>
  <p>View Your Products instantly and make sure that all the products have right information.</p>
  <Button variant="warning" onClick={goViewListProducts}>View Products</Button>
</center>
</Card.Body>
</Card>
    </div>
    </div>
    <br /><br /><br />
     {/* ///// footer */}
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
    <p style={{marginLeft:"30px",backgroundColor:"#F6F5F2",width:"1350px"}}>&#169; All Rights Are Reserved..</p>
    </>
  )
}

export default DashGrower