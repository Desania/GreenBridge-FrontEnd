
    import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import baseURL from '../config/apiConfig';
import NavvBarr from './NavvBarr';
import './ManageCustomerCSS.css'; // Import the CSS file

function ManageCustomer() {
  const [customerProfile, setCustomerProfile] = useState([]);

  useEffect(() => {
    let url = `${baseURL}/admin/customerprofiles`;
    axios.get(url).then(response => {
      const respdata = response.data;
      if (respdata.status && respdata.customerProfiles) {
        setCustomerProfile(respdata.customerProfiles);
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
      <center><h1 className="mt-4">Customer Profile Information</h1></center>
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
                <th>Pin Code</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {customerProfile && customerProfile.map((profile, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{profile.email}</td>
                  <td>{profile.name}</td>
                  <td>{profile.contact}</td>
                  <td>{profile.address}</td>
                  <td>{profile.village}</td>
                  <td>{profile.city}</td>
                  <td>{profile.pin}</td>
                  <td>{profile.info}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}

export default ManageCustomer;

