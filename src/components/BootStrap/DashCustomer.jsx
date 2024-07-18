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
import NavvBarr from "../BootStrap/NavvBarr"
import Footer from '../BootStrap/Footer';

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
    <Footer></Footer>
    </>
  )
}

export default DashCustomer;