import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import axios from "axios";
import NavvBarr from './NavvBarr';
import baseURL from '../config/apiConfig';  

function ManageGrower() {
    const [growerProfiles, setGrowerProfiles] = useState([]); // Fixed state declaration

    useEffect(() => {
        let url = `${baseURL}/admin/growerprofiles`; // Adjusted URL to fetch all profiles
        axios.get(url).then(response => {
          const respdata = response.data;
          if (respdata.status && respdata.growerProfile) {
            console.log(respdata.growerProfile)
            setGrowerProfiles(respdata.growerProfile); // Fixed set function
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
            <NavvBarr></NavvBarr>
            <center><h1>Grower Profile Information</h1></center>
            <Container className="mt-4">
                <Table striped bordered hover>
                    <thead>
                        <tr style={{textAlign:"center"}}>
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
            </Container>
        </>
    );
}

export default ManageGrower;
