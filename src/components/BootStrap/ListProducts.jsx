
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import NavvBarr from "../BootStrap/NavvBarr";
import baseURL from '../config/apiConfig';
import './ListProductCSS.css'; // Import the custom CSS file

function ListProducts() {
  let { eid } = useParams();
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      fetchAndFillForm(id);
    }
  }, [id]);

  var navigate = useNavigate();
  function goBack() {
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

  async function fetchAndFillForm(id) {
    let url = `${baseURL}/grower/find?id=${id}`;
    try {
      let response = await axios.get(url);
      let { status, products } = response.data;
      if (products && products.length > 0) {
        const { email, productCategory, product, price, per, village, city, moreInfo, ppic } = products[0];
        setObj({ ...obj, email, productCategory, product, price, per, village, city, moreInfo });
        setPrevImg(`${baseURL}/` + ppic);
      } else {
        console.log("No products found.");
      }
    } catch (error) {
      console.error("Error while fetching product:", error);
    }
  }

  async function doUpdateWithAxios() {
    let fd = new FormData();
    for (let prop in obj) {
      fd.append([prop], obj[prop]);
    }
    const url = `${baseURL}/grower/listproductupdate?id=${id}`;
    let respObj = await axios.post(url, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
    console.log(JSON.stringify(respObj.data));
    alert("Product Details Updated Successfully");
  }

  return (
    <>
      <NavvBarr />
      <div className="container mt-5">
        <center><h1>List Products</h1></center>
        <Form className="list-products-form p-4 shadow-sm rounded">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={obj.email} onChange={doChange} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Product Category</Form.Label>
              <Form.Select aria-label="Default select example" name='productCategory' value={obj.productCategory} onChange={doChange}>
                <option>Select Product Category</option>
                <option value="Milk">Milk</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Pickle">Pickle</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Product</Form.Label>
              <Form.Control type="text" name='product' value={obj.product} onChange={doChange} />
            </Form.Group>
          </Row>

          <Row className="mb-3 align-items-center">
            <Form.Group as={Col} controlId="formFile">
              <Form.Label>Product Pic</Form.Label>
              <Form.Control type="file" name="ppic" onChange={doUpdatePic} />
            </Form.Group>
            {prevImg && <img src={prevImg} height="50px" width="50px" alt="Product preview" className="" />}
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" name='price' value={obj.price} onChange={doChange} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Per</Form.Label>
              <Form.Select aria-label="Default select example" name="per" value={obj.per} onChange={doChange}>
                <option>Select</option>
                <option value="unit">Unit</option>
                <option value="gram">Gram</option>
                <option value="kilogram">Kilogram</option>
                <option value="litre">Litre</option>
                <option value="millilitre">Millilitre</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Village</Form.Label>
              <Form.Control type="text" name='village' value={obj.village} onChange={doChange} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name='city' value={obj.city} onChange={doChange} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>More Information</Form.Label>
              <Form.Control as="textarea" placeholder="Write additional information" style={{ height: '100px' }} value={obj.moreInfo} onChange={doChange} name='moreInfo' />
            </Form.Group>
          </Row>

          <Row className="mb-3 text-center">
            <Col>
              <Button variant="primary" onClick={doSaveWithAxios} className="w-100 mb-2">Publish Now</Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={doUpdateWithAxios} className="w-100">Update</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  )
}

export default ListProducts;
