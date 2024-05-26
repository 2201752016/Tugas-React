import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/api';
import Pagination from '../Pagination';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetchUsers(page);
            setUsers(response.data.data);
        };
        getUsers();
    }, [page]);

    return (
        <div className="user-list">
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.first_name} {user.last_name}</li>
                ))}
            </ul>
            <Pagination page={page} setPage={setPage} />
        </div>
    );
};

export default UserList;
