import React from 'react'
import github from "../Pics/github.png"
import inst from "../Pics/inst.png"
import twit from "../Pics/twit.png"

function Footer() {
  return (
    <div>
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
    <p style={{paddingLeft:"30px",height:"30px",backgroundColor:"#F6F5F2",width:"1350px"}}>&#169; All Rights Are Reserved..</p>
    </div>
  )
}

export default Footer