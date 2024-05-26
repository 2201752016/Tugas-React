// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../services/api';
import Pagination from '../components/Pagination';
import Layout from '../components/Layout';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetchUsers(page);
      setUsers(response.data.data);
    };
    getUsers();
  }, [page]);

  const handleUserClick = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <Layout>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => handleUserClick(user.id)}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
      <Pagination page={page} setPage={setPage} />
    </Layout>
  );
};

export default HomePage;

