
import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import NavvBarr from './NavvBarr';
import baseURL from '../config/apiConfig';
import './ManageGrowerCSS.css'; // Import the CSS file

function ManageGrower() {
    const [growerProfiles, setGrowerProfiles] = useState([]);

    useEffect(() => {
        let url = `${baseURL}/admin/growerprofiles`;
        axios.get(url).then(response => {
            const respdata = response.data;
            if (respdata.status && respdata.growerProfile) {
                setGrowerProfiles(respdata.growerProfile);
            } else {
                console.log('No profiles found in response:', respdata);
            }
        })
        .catch((error) => {
            console.log('Error fetching profiles', error);
        });
    }, []);

    return (
        <>
            <NavvBarr />
            <center><h1 className="mt-4">Grower Profile Information</h1></center>
            <Container className="mt-4">
                <div className="table-responsive">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr style={{ textAlign: "center" }}>
                                <th>S.No</th>
                                <th>Email Id</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>Village</th>
                                <th>City</th>
                                <th>Aadhar</th>
                                <th>Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {growerProfiles && growerProfiles.map((growerProfile, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{growerProfile.email}</td>
                                    <td>{growerProfile.name}</td>
                                    <td>{growerProfile.contact}</td>
                                    <td>{growerProfile.address}</td>
                                    <td>{growerProfile.village}</td>
                                    <td>{growerProfile.city}</td>
                                    <td>{growerProfile.Aadhaar}</td>
                                    <td>{growerProfile.info}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    );
}

export default ManageGrower;
