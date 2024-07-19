
import { useState, useEffect } from 'react';
import { Form, Col, Row, Card, Modal, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import NavvBarr from "../BootStrap/NavvBarr";
import baseURL from '../config/apiConfig';
import "./GrowerFinderCSS.css";

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

  const handleCityChange = (event) => setSelectedCity(event.target.value);
  const handleVillageChange = (event) => setSelectedVillage(event.target.value);
  const handleProductCategoryChange = (event) => setSelectedProductCategory(event.target.value);
  const handleProductChange = (event) => setSelectedProduct(event.target.value);

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
      <NavvBarr />
      <Container className="my-4">
        <center>
          <h1 className="mb-4">Grower Finder</h1>
          <div className="finder-container">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} md={6}>
                  <Form.Label className="form-label">Select City</Form.Label>
                  <Form.Select className="form-select" onChange={handleCityChange}>
                    <option>Select City</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md={6}>
                  <Form.Label className="form-label">Select Village</Form.Label>
                  <Form.Select className="form-select" onChange={handleVillageChange}>
                    <option>Select Village</option>
                    {villages.map((village) => (
                      <option key={village} value={village}>{village}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md={6}>
                  <Form.Label className="form-label">Select Product Category</Form.Label>
                  <Form.Select className="form-select" onChange={handleProductCategoryChange}>
                    <option>Select Product Category</option>
                    {productCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md={6}>
                  <Form.Label className="form-label">Select Product</Form.Label>
                  <Form.Select className="form-select" onChange={handleProductChange}>
                    <option>Select Product</option>
                    {products.map((product) => (
                      <option key={product} value={product}>{product}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Row>
              <Button variant="success" onClick={doFetch}>Fetch Product Details</Button>
            </Form>
          </div>
          <div className="card-container mt-4">
            {productDetails.map((productDetail, index) => (
              <Card key={index} className="product-card mb-4">
                <Card.Body>
                  <img src={`${baseURL}/${productDetail.ppic}`} className="product-image" alt={productDetail.product} />
                  <Card.Title>{productDetail.product}</Card.Title>
                  <Card.Text>
                    <p><strong>Email:</strong> {productDetail.email}</p>
                    <p><strong>Category:</strong> {productDetail.productCategory}</p>
                    <p><strong>Price:</strong> {productDetail.price}</p>
                    <p><strong>Per:</strong> {productDetail.per}</p>
                    <p><strong>Village:</strong> {productDetail.village}</p>
                    <p><strong>City:</strong> {productDetail.city}</p>
                    <p><strong>More Info:</strong> {productDetail.moreInfo}</p>
                  </Card.Text>
                  <Button variant="warning" onClick={() => doFetchGrower(productDetail.email)}>Grower Details</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </center>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Grower Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {growerDetails && (
              <div>
                <p><strong>Email:</strong> {growerDetails.email}</p>
                <p><strong>Name:</strong> {growerDetails.name}</p>
                <p><strong>Contact:</strong> {growerDetails.contact}</p>
                <p><strong>Address:</strong> {growerDetails.address}</p>
                <p><strong>Village:</strong> {growerDetails.village}</p>
                <p><strong>City:</strong> {growerDetails.city}</p>
                <p><strong>More Info:</strong> {growerDetails.info}</p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={handleClose}>Done</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default GrowerFinder;
