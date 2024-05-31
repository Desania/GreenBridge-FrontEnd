import React from 'react';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';
import NavvBarr from "../BootStrap/NavvBarr";

function UserManager() {
  const { eid } = useParams();
  const navigate = useNavigate();
  const [userProfiles, setUsersProfiles] = useState([]);

 
  useEffect(() => {
    let url = 'http://localhost:2025/admin/userProfiles'; // Adjusted URL to fetch all profiles
    axios.get(url).then(response => {
      const respdata = response.data;
      if (respdata.status && respdata.profile) {
    
        setUsersProfiles(respdata.profile);
      } else {
        alert
        console.log('No profiles found in response:', respdata);
      }
    })
    .catch((error) => {
      console.log('Error fetching profiles', error);
    });
  }, []);

  const updateUserStatus = (email, newStatus) => {
    axios.post('http://localhost:2025/admin/updateStatus', { email, status: newStatus })
      .then(response => {
        if (response.data.status) {
          if(newStatus==="1")
            alert("User Have been UnBlocked");
          else
          alert("User Have been Blocked, Tap the unBlock Button to Unblock");
         
          setUsersProfiles(userProfiles.map(profile =>
            
            profile.email === email ? { ...profile, status: newStatus } : profile
            
          ));
        } else {
          console.log('Error updating status:', response.data.msg);
        }
      })
      .catch(error => {
        console.log('Error updating status', error);
      });
  };

  function goBack() {
    navigate('/');
  }
  
  
  return (
    <>
     <NavvBarr></NavvBarr>

      <h2 className="text-center mb-4">View All Users</h2>
      <Container className="mt-4">
        <Table striped bordered hover>
          <thead>
            <tr style={{textAlign:"center"}}>
              <th>S.No</th>
              <th>Email Id</th>
              <th>Password</th>
              <th>User Type</th>
              <th>Status</th>
              <th colSpan={2}> <center>Actions</center> </th>
            </tr>
          </thead>
          <tbody>
            {userProfiles && userProfiles.map((profile, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{profile.email}</td>
                <td>{profile.pwd}</td>
                <td>{profile.utype}</td>
                <td>{profile.status}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => updateUserStatus(profile.email, '0')}
                    disabled={profile.status === '0'}
                  >
                    Block
                  </Button>
                </td>
                <td> <Button
                    variant="success"
                    onClick={() => updateUserStatus(profile.email, '1')}
                    disabled={profile.status === '1'}
                  >
                    Unblock
                  </Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      
    </>
  );
}

export default UserManager;

