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
import NavvBarr from "../BootStrap/NavvBarr"
import { Chart } from "react-google-charts";
import baseURL from '../config/apiConfig';
import Footer from './Footer';
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
    <Footer></Footer>
      
    </>
  )
}

export default DashAdmin