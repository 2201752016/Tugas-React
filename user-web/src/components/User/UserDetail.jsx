import React, { useEffect, useState } from 'react';
import { fetchUser } from '../../services/api';

const UserDetail = ({ match }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const response = await fetchUser(match.params.id);
            setUser(response.data.data);
        };
        getUser();
    }, [match.params.id]);

    return (
        <div className="user-detail">
            {user ? (
                <div>
                    <h1>{user.first_name} {user.last_name}</h1>
                    <p>Email: {user.email}</p>
                    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserDetail;
