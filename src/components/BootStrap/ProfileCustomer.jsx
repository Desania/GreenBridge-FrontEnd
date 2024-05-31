
import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NavvBarr from "../BootStrap/NavvBarr";

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
        const url = `http://localhost:2025/customer/fetchcustomerprof?email=${obj.email}`;
        try {
            let response = await axios.get(url);
            if (response.data.length > 0) {
                setIsExistingUser(true);
                const { email, name, contact, address, village, city, pin, info, picpath } = response.data[0];
                setObj({ ...obj, email, name, contact, address, village, city, pin, info });
                setPrevimg("http://localhost:2025/" + picpath);
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
        const url = "http://localhost:2025/customer/saveprofile";
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
        const url = `http://localhost:2025/customer/customerprofupdate`;
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
            Email Id : {eid}
            <div style={{ width: "1100px", margin: "auto", border: "1px solid gray", marginTop: "20px", padding: "30px" }}>
                <Form>
                    <div>
                        <center><h1><b>Create Profile</b></h1></center>
                    </div>
                    <br /><br />
                    <p>
                        <center><img src={previmg} height="100px" width="100px" alt="" style={{ marginRight: "0px", marginLeft: "0px" }} /></center>
                        &nbsp; &nbsp;
                    </p>
                    <center>Upload your pic <input type="file" name="ppic" onChange={doUpdatePic} /></center>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label style={{ float: "left" }}>Email Id</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" style={{ height: "50px" }} name="emailid" value={obj.email} onChange={dochange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail" style={{ marginTop: "30px" }}>
                            <Button variant="success" style={{ height: "50px" }} onClick={doFetchwithAxios} disabled={!isExistingUser}>
                                Fetch
                            </Button>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label style={{ float: "left" }}>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" name="name" value={obj.name} onChange={dochange} style={{ height: "50px" }} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label style={{ float: "left" }}>Contact</Form.Label>
                            <Form.Control style={{ height: "50px" }} name="contact" value={obj.contact} onChange={dochange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label style={{ float: "left" }}>Address</Form.Label>
                            <Form.Control style={{ height: "50px" }} name="address" value={obj.address} onChange={dochange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridAddress2">
                            <Form.Label style={{ float: "left" }}>Village</Form.Label>
                            <Form.Control style={{ height: "50px" }} name="village" value={obj.village} onChange={dochange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridAddress2">
                            <Form.Label style={{ float: "left" }}>City</Form.Label>
                            <Form.Control style={{ height: "50px" }} name="city" value={obj.city} onChange={dochange} />
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label style={{ float: "left" }}>Pin Code</Form.Label>
                        <Form.Control style={{ height: "50px" }} name="pin" value={obj.pin} onChange={dochange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{ float: "left" }}>More Info</Form.Label>
                        <Form.Control as="textarea" rows={3} name="info" value={obj.info} onChange={dochange} />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail" style={{ marginTop: "30px" }}>
                            <Button variant="success" style={{ height: "50px" }} onClick={doSavewithAxios} disabled={isExistingUser}>
                                Submit
                            </Button>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail" style={{ marginTop: "30px" }}>
                            <Button variant="success" style={{ height: "50px" }} onClick={doUpdate} disabled={!isExistingUser}>
                                Update
                            </Button>
                        </Form.Group>
                    </Row>
                </Form>
            </div>
        </>
    );
}

export default ProfileCustomer;
