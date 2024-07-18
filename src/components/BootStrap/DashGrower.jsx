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
import grow from "../Pics/grow.avif"
import pic2 from "../Pics/pic2.jpg"
import pic3 from "../Pics/pic3.avif"
import NavvBarr from "../BootStrap/NavvBarr"
import Footer from './Footer';
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
        <Footer></Footer>
    </>
  )
}

export default DashGrower