    import React, { useState } from 'react';
    import axios from "axios";
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Button from 'react-bootstrap/Button';
    import Navbar from 'react-bootstrap/Navbar'
    import Col from 'react-bootstrap/Col';
    import Form from 'react-bootstrap/Form';
    import Row from 'react-bootstrap/Row';
    import {useNavigate, useParams} from "react-router-dom";
    // import { Link } from 'react-router-dom';
    // import {dosave} from "../services/Controller"
    import NavvBarr from "../BootStrap/NavvBarr";
    import baseURL from "../config/apiConfig"

    function ProfileGrower() {
        const jtoken = localStorage.getItem("jtoken");
        
        let {eid}=useParams();
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
        var navigate=useNavigate();
        function goBack()
        {
        navigate("/")
        }

        async function doSavewithAxios() {
            let fd = new FormData();
            for (let prop in obj) {
                fd.append(prop, obj[prop]);
            }
        
            const url = `${baseURL}/grower/profsave`;
        
            console.log('Token:', jtoken); // Debugging: Check if token is correct
            console.log('URL:', baseURL); // Debugging: Check if baseURL is correct
        
            try {
                let respObj = await axios.post(url, fd, { 
                    headers: { 
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${jtoken}`
                    }
                });
                console.log(JSON.stringify(respObj.data));
                alert("Profile Saved SuccessFully");
            } catch (error) {
                console.error("Error saving data:", error);
        
                if (error.response && error.response.status === 401) {
                    alert("Session expired. Please log in again.");
                    // window.location.href = "/";
                } else if (error.response) {
                    alert("Error: " + error.response.data.message); // Display specific error message from the backend
                } else {
                    alert("Network error or other issue occurred.");
                }
            }
        }
        
        

        async function doFetchwithAxios() {
            const url = `${baseURL}/grower/fetchprof?email=${obj.email}`;

            let response=await axios.get(url);
                //   alert(JSON.stringify(response.data));
                
                const {email,name,contact,address,village,city,Aadhaar,info,picpath,idpicpath}=response.data[0];
                setObj({...obj,email,name,contact,address,village,city,Aadhaar,info})
                setPrevimg(`${baseURL}/`+picpath);
                setPrevid(`${baseURL}/`+idpicpath);
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

        async function doUpdate(){
            let fd=new FormData();
            for(let prop in obj){
                fd.append([prop],obj[prop]);
            }
            const url = `${baseURL}/grower/profupdate`;
            let respObj= await axios.post(url,fd,{headers:{'Content-Type':'multipart/form-data'}});
            //    alert(JSON.stringify(respObj.data));
            alert("Profile Updated SuccessFully"); 
        }


        return (
            <>
                <NavvBarr></NavvBarr>

                <div style={{ width: "1100px", margin: "auto" ,border:"1px solid gray",marginTop:"20px",padding:"30px"}}>
                    <Form>
                        <div>
                            <center><h1><b>Create Profile</b></h1></center>
                        </div>
                    <br /><br />
                    <p>
                            <img src={previmg} height="100px" width="100px" alt="" style={{marginRight:"400px",marginLeft:"180px"}} />
                            &nbsp; &nbsp;
                            <img src={previd} height="100px" width="100px" alt="" />
                        </p>
            
                        <p style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                            Upload your pic <input type="file" name="ppic" onChange={doUpdatePic} />
                            Upload id proof pic <input type="file" name="idpic" onChange={doUpdateId} />
                        </p>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label style={{ float: "left" }}>Email Id</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" style={{ height: "50px" }} name="emailid" value={obj.email} onChange={dochange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail" style={{ marginTop: "30px" }}>
                                <Button variant="success" style={{ height: "50px" }} onClick={doFetchwithAxios}>
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
                                <Form.Control placeholder="1234 Main St" style={{ height: "50px" }} name="address" value={obj.address} onChange={dochange} />
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
                            <Form.Label style={{ float: "left" }}>Aadhaar Card Number</Form.Label>
                            <Form.Control placeholder="1234 Main St" style={{ height: "50px" }} name="Aadhaar" value={obj.Aadhaar} onChange={dochange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{ float: "left" }}>More Info</Form.Label>
                            <Form.Control as="textarea" rows={3} name="info" value={obj.info} onChange={dochange} />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail" style={{ marginTop: "30px" }}>
                                <Button variant="success" style={{ height: "50px" }} onClick={doSavewithAxios}>
                                    Submit
                                </Button>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail" style={{ marginTop: "30px" }}>
                                <Button variant="success" style={{ height: "50px" }} onClick={doUpdate}>
                                    Update
                                </Button>
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
            </>
        );
    }

    export default ProfileGrower;
