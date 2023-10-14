import React, { useState, useEffect } from 'react';
import axios from 'axios';
const UserTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        console.log('Data from API:', response.data);
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>
      <h1>Dummy data</h1>
      <table border='1' cellspacing='0' bordercolor='white'>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img src={user.image} alt={`Image of ${user.firstName}`} />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;