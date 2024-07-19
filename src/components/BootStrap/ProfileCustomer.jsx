
import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NavvBarr from "../BootStrap/NavvBarr";
import baseURL from '../config/apiConfig';
import "./ProfileCustomerCSS.css"
import { Container} from 'react-bootstrap';

function ProfileCustomer() {
    const navigate = useNavigate();
    const { eid } = useParams();
    const [obj, setObj] = useState({
        email: eid,
        name: "",
        contact: "",
        address: "",
        village: "",
        city: "",
        pin: "",
        ppic: null,
        info: ""
    });
    const [previmg, setPrevimg] = useState("");
    const [isExistingUser, setIsExistingUser] = useState(false);

    let dochange = (event) => {
        let { name, value } = event.target;
        setObj({ ...obj, [name]: value });
    }

    function doUpdatePic(event) {
        setObj({ ...obj, ["ppic"]: event.target.files[0] });
        setPrevimg(URL.createObjectURL(event.target.files[0]));
    }

    useEffect(() => {
        // Check if the user exists when the component mounts
        checkIfUserExists();
    }, []);

    async function checkIfUserExists() {
        const url = `${baseURL}/customer/fetchcustomerprof?email=${obj.email}`;
        try {
            let response = await axios.get(url);
            if (response.data.length > 0) {
                setIsExistingUser(true);
                const { email, name, contact, address, village, city, pin, info, picpath } = response.data[0];
                setObj({ ...obj, email, name, contact, address, village, city, pin, info });
                setPrevimg(`${baseURL}/` + picpath);
            } else {
                setIsExistingUser(false);
            }
        } catch (error) {
            console.error("Error checking user existence:", error);
        }
    }

    async function doSavewithAxios() {
        let fd = new FormData();
        for (let prop in obj) {
            fd.append(prop, obj[prop]);
        }
        const url = `${baseURL}/customer/saveprofile`;
        try {
            let respObj = await axios.post(url, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
            console.log(JSON.stringify(respObj.data));
            alert("Profile Created successfully");
            setIsExistingUser(true); // Update the state to reflect the new user existence
        } catch (error) {
            console.error("Error saving data:", error);
        }
    }

    async function doFetchwithAxios() {
        await checkIfUserExists(); // Reuse the function to fetch and set data
    }

    async function doUpdate() {
        let fd = new FormData();
        for (let prop in obj) {
            fd.append([prop], obj[prop]);
        }
        const url = `${baseURL}/customer/customerprofupdate`;
        try {
            let respObj = await axios.post(url, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
            console.log(JSON.stringify(respObj.data));
            alert("Profile Updated Successfully");
        } catch (error) {
            console.error("Error updating data:", error);
        }
    }

    function goBack() {
        navigate("/");
    }

    return (
        <>
            <NavvBarr />
            <Container className="mt-4">
                <h2 className="text-center mb-4">Create Profile</h2>
                <Form>
                    <center>
                        <img src={previmg} height="100px" width="100px" alt="" style={{ marginBottom: "20px" }} />
                    </center>
                    <center>
                        <Form.Label>Upload your pic</Form.Label>
                        <Form.Control type="file" name="ppic" onChange={doUpdatePic} style={{ marginBottom: "20px" }} />
                    </center>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email Id</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="emailid" value={obj.email} onChange={dochange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail" className="d-flex align-items-end">
                            <Button variant="success" onClick={doFetchwithAxios} disabled={!isExistingUser}>
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
                            <Form.Control name="address" value={obj.address} onChange={dochange} />
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
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control name="pin" value={obj.pin} onChange={dochange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>More Info</Form.Label>
                        <Form.Control as="textarea" rows={3} name="info" value={obj.info} onChange={dochange} />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Button variant="success" onClick={doSavewithAxios} disabled={isExistingUser}>
                                Submit
                            </Button>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Button variant="success" onClick={doUpdate} disabled={!isExistingUser}>
                                Update
                            </Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </>
    );
}

export default ProfileCustomer;
