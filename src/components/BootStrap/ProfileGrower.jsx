
    import React, { useState } from 'react';
    import axios from "axios";
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Button from 'react-bootstrap/Button';
    import Col from 'react-bootstrap/Col';
    import Form from 'react-bootstrap/Form';
    import Row from 'react-bootstrap/Row';
    import { useNavigate, useParams } from "react-router-dom";
    import NavvBarr from "../BootStrap/NavvBarr";
    import Footer from '../BootStrap/Footer'; // Assuming Footer is imported from here
    import Container from 'react-bootstrap/Container';
    import baseURL from "../config/apiConfig";
    import "./Cards.css"
    function ProfileGrower() {
        const jtoken = localStorage.getItem("jtoken");
        
        let { eid } = useParams();
        const [obj, setObj] = useState({
            email: eid,
            name: "",
            contact: "",
            address: "",
            village: "",
            city: "",
            Aadhaar: "",
            ppic: null,
            idpic: null,
            info: ""
        });
        var navigate = useNavigate();
        function goBack() {
            navigate("/")
        }
    
        async function doSavewithAxios() {
            let fd = new FormData();
            for (let prop in obj) {
                fd.append(prop, obj[prop]);
            }
        
            const url = `${baseURL}/grower/profsave`;
        
            try {
                let respObj = await axios.post(url, fd, { 
                    headers: { 
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${jtoken}`
                    }
                });
                console.log(JSON.stringify(respObj.data));
                alert("Profile Saved Successfully");
            } catch (error) {
                console.error("Error saving data:", error);
        
                if (error.response && error.response.status === 401) {
                    alert("Session expired. Please log in again.");
                    navigate("/login"); // Navigate to login page if session expired
                } else if (error.response) {
                    alert("Error: " + error.response.data.message); // Display specific error message from the backend
                } else {
                    alert("Network error or other issue occurred.");
                }
            }
        }
    
        async function doFetchwithAxios() {
            const url = `${baseURL}/grower/fetchprof?email=${obj.email}`;
    
            let response = await axios.get(url);
            const { email, name, contact, address, village, city, Aadhaar, info, picpath, idpicpath } = response.data[0];
            setObj({ ...obj, email, name, contact, address, village, city, Aadhaar, info });
            setPrevimg(`${baseURL}/` + picpath);
            setPrevid(`${baseURL}/` + idpicpath);
        }
        
        let dochange = (event) => {
            let { name, value } = event.target;
            setObj({ ...obj, [name]: value });
        }
    
        let [previmg, setPrevimg] = useState("");
        let [previd, setPrevid] = useState("");
    
        function doUpdatePic(event) {
            setObj({ ...obj, ["ppic"]: event.target.files[0] });
            setPrevimg(URL.createObjectURL(event.target.files[0]));
        }
    
        function doUpdateId(event) {
            setObj({ ...obj, ["idpic"]: event.target.files[0] });
            setPrevid(URL.createObjectURL(event.target.files[0]));
        }
    
        async function doUpdate() {
            let fd = new FormData();
            for (let prop in obj) {
                fd.append([prop], obj[prop]);
            }
            const url = `${baseURL}/grower/profupdate`;
            let respObj = await axios.post(url, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
            alert("Profile Updated Successfully"); 
        }
    
        return (
            <>
                <NavvBarr />
                <Container className="mt-4" style={{ maxWidth: "1100px" }}>
                    <Form className="border p-4 rounded">
                        <div className="text-center mb-4">
                            <h1><b>Create Profile</b></h1>
                        </div>
                        <div className="text-center mb-4">
                            <img src={previmg} style={{marginRight:"20px"}} height="100px" width="100px" alt="" className="mr-3 rounded" />
                            <img src={previd} style={{marginLeft:"20px"}} height="100px" width="100px" alt="" className="rounded" />
                        </div>
                        <Row className="mb-3 text-center">
                            <Col>
                                <Form.Label>Upload your pic</Form.Label>
                                <Form.Control type="file" name="ppic" onChange={doUpdatePic} />
                            </Col>
                            <Col>
                                <Form.Label>Upload ID proof pic</Form.Label>
                                <Form.Control type="file" name="idpic" onChange={doUpdateId} />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email Id</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={obj.email} onChange={dochange} disabled />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail" className="d-flex align-items-end">
                                <Button variant="success" onClick={doFetchwithAxios}>
                                    Fetch
                                </Button>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" name="name" value={obj.name} onChange={dochange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control name="contact" value={obj.contact} onChange={dochange} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" name="address" value={obj.address} onChange={dochange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>Village</Form.Label>
                                <Form.Control name="village" value={obj.village} onChange={dochange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>City</Form.Label>
                                <Form.Control name="city" value={obj.city} onChange={dochange} />
                            </Form.Group>
                        </Row>
                        <Form.Group as={Col} controlId="formGridAddress1" className="mb-3">
                            <Form.Label>Aadhaar Card Number</Form.Label>
                            <Form.Control  name="Aadhaar" value={obj.Aadhaar} onChange={dochange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>More Info</Form.Label>
                            <Form.Control as="textarea" rows={3} name="info" value={obj.info} onChange={dochange} />
                        </Form.Group>
                        <Row className="mb-3">
                            <Col>
                                <Button variant="success" onClick={doSavewithAxios} className="w-100">
                                    Submit
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="success" onClick={doUpdate} className="w-100">
                                    Update
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                <Footer />
            </>
        );
    }
    
    export default ProfileGrower;
    