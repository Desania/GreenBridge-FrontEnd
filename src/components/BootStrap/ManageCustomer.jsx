import React from 'react';
// import NavvBarr from './NavvBarr';
import { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import axios from "axios";

import NavvBarr from './NavvBarr';
function ManageGrower() {
    const [customerProfile, setCustomerProfile] = useState([]); // Fixed state declaration

    useEffect(() => {
        let url = 'http://localhost:2025/admin/customerprofiles'; // Adjusted URL to fetch all profiles
        axios.get(url).then(response => {
          const respdata = response.data;
          if (respdata.status && respdata.customerProfiles) {
            console.log(respdata.customerProfiles)
            setCustomerProfile(respdata.customerProfiles); // Fixed set function
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
            <center><h1>Customer Profile Information</h1></center>
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
                            <th>Pin Code</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerProfile && customerProfile.map((customerProfiles, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{customerProfiles.email}</td>
                                <td>{customerProfiles.name}</td>
                                <td>{customerProfiles.contact}</td>
                                <td>{customerProfiles.address}</td>
                                <td>{customerProfiles.village}</td>
                                <td>{customerProfiles.city}</td>
                                <td>{customerProfiles.pin}</td>
                                <td>{customerProfiles.info}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default ManageGrower;
