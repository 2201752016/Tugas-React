import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../services/api';
import Pagination from '../components/Pagination';
import './Home.css';

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
    <div className="home-page">
      <h1>Welcome to Company Check-In</h1>
      <p>Manage your company's check-ins efficiently and effectively.</p>
      <div className="user-list">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id} className="user-card" onClick={() => handleUserClick(user.id)}>
                <p><strong>{user.first_name}</strong></p>
                <p>{user.email}</p>
                <img src={user.avatar} alt={`${user.first_name}'s avatar`} />
              </div>
            );
          })}
      </div>
      <Pagination page={page} setPage={setPage} maxPage={2}/>
    </div>
  );
};

export default HomePage;


