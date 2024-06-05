import Navv from "./Navv"
import 'bootstrap/dist/css/bootstrap.min.css';  
import farmer3 from "../Pics/farmer3.jpg"
import Img1 from "../Pics/Img1.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ds from "../Pics/ds.jpg"
import om2 from "../Pics/om2.jpg";
import ms from "../Pics/ms.svg";
import dc1 from "../Pics/dc1.jpg"
import cs from "../Pics/cs.png"
import lp from "../Pics/lp.jpg"
import github from "../Pics/github.png"
import inst from "../Pics/inst.png"
import twit from "../Pics/twit.png"
import localfarmer from "../Pics/localfarmer.jpg"
import susagr from "../Pics/susagr.jpg"


function Index() 
{
  return (
    <div>
        <Navv></Navv>
       
<Container>
<center>
    <div style={{height:"500px",width:"1000px",marginTop:"100px",display:"flex",flexDirection:"row"}}>
      <div style={{height:"500px",width:"500px",paddingTop:"100px"}}>
        <center>
          <p style={{fontSize:"3rem",fontFamily:"Lucida Handwriting ",textAlign:"left"}}>Welcome To GreenBridge....</p>
          <p style={{fontSize:"18px",fontFamily:"arial",color:"gray",textAlign:"left"}}>
           It is an innovative platform that addresses the needs of growers (farmers) who may find themselves
            in a situation where they did not receive as much money as they
            deserve due to intermediaries. My project acts as a bridge between growers (farmers) and direct customers so that growers 
            (farmers) can sell their products directly.</p>
        </center>
      </div>
      <div >
        <img src={farmer3} height="500px" width="500px" alt="" />
      </div>
  
    </div>
    <br /><br />
    <center>
          <div>
            <h1>Services We Are Providing</h1>
            <br /><br />
            <Container>
            <Row>
              <Col>
                <img src={ds} style={{height:"180px" ,width:"180px",borderRadius:"50%"}} alt="" />
                <br /><br />
                  <p style={{fontSize:"25px",fontFamily:"arial",color:"black"}}>Direct Sales</p>
              </Col>
              <Col> <img src={localfarmer} style={{height:"180px" ,width:"180px",borderRadius:"50%"}} alt="" />
              <br /><br />
              <p style={{fontSize:"25px",fontFamily:"arial",color:"black"}}>Support Local Farmers</p>
              </Col>
              <Col> <img src={susagr} style={{height:"180px" ,width:"180px",borderRadius:"50%"}} alt="" />
              <br /><br />
                 <p style={{fontSize:"25px",fontFamily:"arial",color:"black"}}>Sustainable Agriculture</p>
              
              </Col>
            </Row>
          </Container>
          <br /><br /><br />
          <Container>
            <Row>
              <Col>
                <img src={dc1} style={{height:"180px" ,width:"180px",borderRadius:"50%"}} alt="" />
                <br /><br />
                  <p style={{fontSize:"25px",fontFamily:"arial",color:"black"}}>Direct Communication</p>
              </Col>
              <Col> <img src={cs} style={{height:"180px" ,width:"180px",borderRadius:"50%"}} alt="" />
              <br /><br />
              <p style={{fontSize:"25px",fontFamily:"arial",color:"black"}}>Customer Support</p>
              </Col>
              <Col> <img src={lp} style={{height:"180px" ,width:"180px",borderRadius:"50%"}} alt="" />
              <br /><br />
                 <p style={{fontSize:"25px",fontFamily:"arial",color:"black"}}>Loyality Programs</p>
              
              </Col>
            </Row>
          </Container>
          </div>
        </center>
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
</center>
</Container>
      <p style={{marginLeft:"30px",backgroundColor:"#F6F5F2",width:"1350px"}}>&#169; All Rights Are Reserved..</p>
</div>
  );
}

export default Index