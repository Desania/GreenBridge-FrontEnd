import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import NavvBarr from "../BootStrap/NavvBarr";
import baseURL from '../config/apiConfig';

function ListProducts() {
  
  let { eid} = useParams();
 
  const { id } = useParams();


  useEffect(() => {
    if (id !== undefined) {
      fetchAndFillForm(id);
    }
  }, [id]);

  var navigate=useNavigate();
  function goBack()
  {
    navigate("/")
  }

  const [obj, setObj] = useState({
    email: eid,
    productCategory: "",
    product: "",
    price: 0,
    per: "",
    village: "",
    city: "",
    moreInfo: "", 
    ppic: null,
  });

  const doSaveWithAxios = async () => {
    let fd = new FormData();
    for (let prop in obj) {
      fd.append(prop, obj[prop]);
    }
    const url = `${baseURL}/grower/listproductsave`;
    try {
      let resp = await axios.post(url, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      console.log(JSON.stringify(resp.data));
      alert("Product Published Successfully");
    } catch (error) {
      console.error("Error while saving product:", error);
    }
  }

  const doChange = (event) => {
    let { name, value } = event.target;
    setObj({ ...obj, [name]: value });
  }

  const [prevImg, setPrevImg] = useState("");

  const doUpdatePic = (event) => {
    setObj({ ...obj, ["ppic"]: event.target.files[0] });
    setPrevImg(URL.createObjectURL(event.target.files[0]));
  }

  async function fetchAndFillForm(id)
   {
    let url = `${baseURL}/grower/find?id=${id}`;
    try {
      let response = await axios.get(url);
      let { status, products } = response.data;
      if (products && products.length > 0) 
        {
        const { email, productCategory, product,price, per,village,city, moreInfo,ppic} = products[0];
        setObj({ ...obj, email, productCategory, product, price, per,village,city, moreInfo });
        setPrevImg(`${baseURL}/`+ ppic);
      } else {
        console.log("No products found.");
      }
    } catch (error) {
      console.error("Error while fetching product:", error);
    }
  }
  async function doUpdateWithAxios()
  {
   
    let fd=new FormData();
    for(let prop in obj){
        fd.append([prop],obj[prop]);
    }
    const url = `${baseURL}/grower/listproductupdate?id=${id}`;
       let respObj= await axios.post(url,fd,{headers:{'Content-Type':'multipart/form-data'}});
       console.log(JSON.stringify(respObj.data)) ;
       alert("Product Deatils Updated Successfully");
 }

  return (
    <>
    <NavvBarr></NavvBarr>
    email id :{eid}
      <br />
      <center><h1>ListProducts</h1></center>
      <div style={{ width: "1000px", height: "800px", margin: "auto", border: "1px solid gray", padding: "50px" }}>

        <br /><br />
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={{ float: "left", fontSize: "20px" }}>Email</Form.Label>
              <Form.Control style={{ marginLeft: "200px", width: "500px" }} type="email" name="email" value={obj.email} onChange={doChange} />
            </Form.Group>
          </Row>
          

          <Row className="mb-3">
            <Form.Group as={Col} >
              <Form.Label style={{ float: "left", fontSize: "20px", marginRight: "50px" }}>Product Category</Form.Label>
              <Form.Select style={{ width: "500px" }} aria-label="Default select example" name='productCategory' value={obj.productCategory} onChange={doChange}>
                <option>select Product Category</option>
                <option value="Milk">Milk</option>
                <option value="Vegeatables">Vegeatables</option>
                <option value="Fruits">Fruits</option>
                <option value="Pickle">Pickle</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} >
              <Form.Label style={{ float: "left", fontSize: "20px" }}>Product</Form.Label>
              <Form.Control style={{ marginLeft: "200px", width: "500px" }} type="text" name='product' value={obj.product} onChange={doChange} />
            </Form.Group>
          </Row>
          
          <br />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formFile">
              <Form.Label style={{ float: "left", fontSize: "20px", marginRight: "100px" }} >Product Pic</Form.Label>
              <Form.Control style={{ width: "250px", float: "left", marginRight: "30px" }} type="file" name="ppic" onChange={doUpdatePic} />
              <img src={prevImg} height="100px" width="100px" alt="" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} >
              <Form.Label style={{ float: "left", fontSize: "20px" }}>Price</Form.Label>
              <Form.Control style={{ marginLeft: "100px", width: "250px" }} type="number" name='price' value={obj.price} onChange={doChange} />
            </Form.Group>
            <Form.Group as={Col} >
              <Form.Label style={{ float: "left", fontSize: "20px" }}>Per</Form.Label>
              <Form.Select style={{ marginLeft: "100px", width: "250px" }} aria-label="Default select example" name="per" value={obj.per} onChange={doChange}>
                <option>Select</option>
                <option value="unit">unit</option>
                <option value="gram">gram</option>
                <option value="killogram">killogram</option>
                <option value="litre">litre</option>
                <option value="millilitre">millilitre</option>
              </Form.Select>
            </Form.Group>
          </Row><br />
          <Row className="mb-3">
            <Form.Group as={Col} >
              <Form.Label style={{ float: "left", fontSize: "20px" }}>Village</Form.Label>
              <Form.Control style={{ marginLeft: "100px", width: "250px" }} type="text" name='village' value={obj.village} onChange={doChange} />
            </Form.Group>
            <Form.Group as={Col} >
              <Form.Label style={{ float: "left", fontSize: "20px" }}>City</Form.Label>
              <Form.Control style={{ marginLeft: "100px", width: "250px" }} type="text" name='city' value={obj.city} onChange={doChange} />
            </Form.Group>
        </Row>
        
          <Row className="mb-3">
            <Form.Group as={Col} >
              <Form.Label style={{ float: "left", fontSize: "20px" }}>More Information</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write additional information"
                style={{ height: '100px' }}
                value={obj.moreInfo}
                onChange={doChange}
                name='moreInfo'
              />
            </Form.Group>
          </Row>
          
<br /><br />
          <Row className="mb-3" style={{display:"flex",flexDirection:"row"}}>
            <center><input type="button" value="Publish Now" style={{ width: "150px",marginRight:"20px" }} onClick={doSaveWithAxios} />
            <input type="button" value="Update" style={{ width: "150px",marginLeft:"20px" }} onClick={doUpdateWithAxios} /></center>
            
          </Row>
        </Form>
      </div>
    </>
  )
}

export default ListProducts;
