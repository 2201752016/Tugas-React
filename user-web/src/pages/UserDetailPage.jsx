import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../services/api';
import Layout from '../components/Layout';

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetchUser(id);
      setUser(response.data.data);
    };
    getUser();
  }, [id]);

  return (
    <Layout>
      {user ? (
        <div>
          <h1>User Detail</h1>
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email}</p>
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
};

export default UserDetailPage;


