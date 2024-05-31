import { useState, useEffect } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import NavvBarr from "../BootStrap/NavvBarr"
import baseURL from '../config/apiConfig';

function GrowerFinder() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [villages, setVillages] = useState([]);
  const [selectedVillage, setSelectedVillage] = useState('');
  const [productCategories, setProductCategories] = useState([]);
  const [selectedProductCategory, setSelectedProductCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [productDetails, setProductDetails] = useState([]);
  const [growerDetails, setGrowerDetails] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(`${baseURL}/customer/fetchCity`);
        setCities(response.data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    const fetchVillages = async () => {
      if (selectedCity) {
        try {
          const response = await axios.get(`${baseURL}/customer/fetchVillages?city=${selectedCity}`);
          setVillages(response.data);
        } catch (error) {
          console.error('Error fetching villages:', error);
        }
      }
    };

    fetchVillages();
  }, [selectedCity]);

  useEffect(() => {
    const fetchProductCategories = async () => {
      if (selectedCity && selectedVillage) {
        try {
          const response = await axios.get(`${baseURL}/customer/fetchProductCategories?city=${selectedCity}&village=${selectedVillage}`);
          setProductCategories(response.data);
        } catch (error) {
          console.error('Error fetching product categories:', error);
        }
      }
    };

    fetchProductCategories();
  }, [selectedCity, selectedVillage]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (selectedCity && selectedVillage && selectedProductCategory) {
        try {
          const response = await axios.get(`${baseURL}/customer/fetchProducts?city=${selectedCity}&village=${selectedVillage}&productCategory=${selectedProductCategory}`);
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
    };

    fetchProducts();
  }, [selectedCity, selectedVillage, selectedProductCategory]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleVillageChange = (event) => {
    setSelectedVillage(event.target.value);
  };

  const handleProductCategoryChange = (event) => {
    setSelectedProductCategory(event.target.value);
  };

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const doFetch = async () => {
    if (selectedProduct) {
      try {
        const response = await axios.get(`${baseURL}/customer/fetchproduct?product=${selectedProduct}`);
        setProductDetails(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }
  };

  const doFetchGrower = async (email) => {
    setShow(true);
    try {
      const response = await axios.get(`${baseURL}/customer/fetchgrower?email=${email}`);
      if (response.data.status) {
        setGrowerDetails(response.data.Data[0]);
      } else {
        alert('No grower data found for the given email');
      }
    } catch (error) {
      console.error('Error fetching grower details:', error);
      alert('not found');
    }
  };

  return (
    <>
    <NavvBarr></NavvBarr>
    <center>
      <h1 style={{ marginTop: '50px' }}>Grower Finder</h1>
      <div style={{ border: '1px solid gray', height: '330px', width: '850px', marginTop: '50px', padding: '20px' }}>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <Form.Label style={{ float: 'left', fontSize: '20px', marginRight: '50px'}}>Select City</Form.Label>
              <Form.Select style={{ width: '500px' }} aria-label="Default select example" name="City" onChange={handleCityChange}>
                <option>Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <Form.Label style={{ float: 'left', fontSize: '20px', marginRight: '50px' }}>Select Village</Form.Label>
              <Form.Select style={{ width: '500px' }} aria-label="Default select example" name="Village" onChange={handleVillageChange}>
                <option>Select Village</option>
                {villages.map((village) => (
                  <option key={village} value={village}>
                    {village}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <Form.Label style={{ float: 'left', fontSize: '20px', marginRight: '50px' }}>Select Product Category</Form.Label>
              <Form.Select style={{ width: '500px' }} aria-label="Default select example" name="ProductCategory" onChange={handleProductCategoryChange}>
                <option>Select Product Category</option>
                {productCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <Form.Label style={{ float: 'left', fontSize: '20px', marginRight: '50px' }}>Select Product</Form.Label>
              <Form.Select style={{ width: '500px' }} aria-label="Default select example" name="Product" onChange={handleProductChange}>
                <option>Select Product</option>
                {products.map((product) => (
                  <option key={product} value={product}>
                    {product}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
          {/* <button  variant="success"  value="Fetch Product Deatils" onClick={doFetch}> </button> */}
          <br />
          <Button variant="success" onClick={doFetch} >Fetch Product Deatils</Button>
        </Form>
      </div>
<br /><br />
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
      {productDetails.map((productDetail, index) => (
        <Card key={index}  style={{ width: '350px',height:"600px" }}>
          <Card.Body>
            <img src={`http://localhost:2025/${productDetail.ppic}`} height="200px" width="200px" alt="" />
            <Card.Title>{productDetail.product}</Card.Title>
            <Card.Text>
              <p>email: {productDetail.email}</p>
              <p>Category: {productDetail.productCategory}</p>
              <p>Price: {productDetail.price}</p>
              <p>Per: {productDetail.per}</p>
              <p>Village: {productDetail.village}</p>
              <p>City: {productDetail.city}</p>
              <p>More Info: {productDetail.moreInfo}</p>
            </Card.Text>
            {/* <input type="button" value="Grower Details" onClick={() => doFetchGrower(productDetail.email)} /> */}
            <Button variant="warning" onClick={() => doFetchGrower(productDetail.email)}>Grower Deatils</Button>
          </Card.Body>
        </Card>
      ))}

      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Grower Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {growerDetails && (
            <div>
              <p>Email: {growerDetails.email}</p>
              <p>Name: {growerDetails.name}</p>
              <p>Contact: {growerDetails.contact}</p>
              <p>Address: {growerDetails.address}</p>
              <p>Village: {growerDetails.village}</p>
              <p>City: {growerDetails.city}</p>
              <p>More Info: {growerDetails.info}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </center>
    </>
  );
}

export default GrowerFinder;
