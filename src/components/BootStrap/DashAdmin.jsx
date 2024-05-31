import React, { useState,useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import usermanager from "../Pics/usermanager.png"
import custpro from "../Pics/custpro.jpg"
import profile from "../Pics/profile.jpg"
import github from "../Pics/github.png"
import inst from "../Pics/inst.png"
import twit from "../Pics/twit.png"
import NavvBarr from "../BootStrap/NavvBarr"
import { Chart } from "react-google-charts";
import baseURL from '../config/apiConfig';
function DashAdmin() 
{
    var navigate=useNavigate();
    const {eid} =useParams();

    const [data, setData] = useState([
      ["utype", "Count"],
      ["Grower", 0],
      ["Customer", 0],
    ]);

    const [product, setProduct] = useState([["Category", "Count"]]);

    function goBack()
    {
      navigate("/")
    }
    function goUserManager()
    {
      navigate("/usermanager/"+eid);
    }
    function goGrowerData()
    {
      navigate("/growerInfo/"+eid);
    }
    function goCustomerData()
    {
      navigate("/customerInfo/"+eid);
    }
    async function fetchCount() {
      try {
        const url = `${baseURL}/admin/fetchusercount`;
        let respObj = await axios.get(url);
        const newData = [
          ["utype", "Count"],
          ["Grower", respObj.data.Grower],
          ["Customer", respObj.data.Customer],
        ];
        setData(newData);
      } catch (error) {
        alert(error);
      }
    }
  
   // fetching category
  async function fetchCategory() {
    try {
      const url = `${baseURL}/admin/fetchproductcategory`;
      let respObj = await axios.get(url);
      // alert(JSON.stringify(respObj.data))
      // Extract the data array
      const categoryData = respObj.data.data;

      // Prepare the data for the chart
      const newData = [
        ["Category", "Count"],
        ...categoryData.map((item) => [item._id, item.count]),
      ];

      setProduct(newData);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchCount();
    fetchCategory();
  }, []);

    const options = {
      title: "Grower and Consumer's Activity",
    };  
    const productOptions = {
      title: "Product Categories Data",
      width: "100%",
      height: 400,
      bar: { groupWidth: "80%" },
      legend: { position: "none" },
    
    };
  return (
    <>
   <NavvBarr></NavvBarr>
    Email Id : {eid}

    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}} >

    <Card style={{ width: '350px',height:"400px" }}>

          <Card.Body>
         <center><img src={usermanager} height="200px" alt="" />
         <br /><br />
         <Card.Title>User Manager</Card.Title>
          <p>User Mananger, you can manage the profiles</p>
          <Button variant="warning" onClick={goUserManager} >User Manager</Button>
        </center>
        </Card.Body>
        </Card>
        <Card style={{ width: '350px',height:"400px" }}>

<Card.Body>
<center><img src={profile} height="200px" style={{borderRadius:"50%"}} />
<br /><br />
<Card.Title>Manage Grower Profiles</Card.Title>
<p>Manage Grower Profiles and Information</p><br />
<Button variant="warning" onClick={goGrowerData} >Manage Grower Profiles</Button>
</center>
</Card.Body>
</Card>
<Card style={{ width: '350px',height:"400px" }}>

<Card.Body>
<center><img src={custpro} height="200px" alt="" />
<br /><br />
<Card.Title>Manage Customer Profiles</Card.Title>
<p>Manage Customer Profiles and Information</p><br />
<Button variant="warning" onClick={goCustomerData} >Manage Customer Profiles</Button>
</center>
</Card.Body>
</Card>
    </div>
    <br /><br /><br /><br />
    <div className="text-success fw-bold fs-3 mb-4 mx-5">
          Grower and Consumer's Activity Respresents as Google Pie charts
        </div>
        <div className="chart-container">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div className="text-success fw-bold fs-3 mb-4 mx-5">Product Categories Respresents as Google Bar Graphs</div>
        <div className="chart-container">
          <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={product}
            options={productOptions}
          />
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

export default DashAdmin