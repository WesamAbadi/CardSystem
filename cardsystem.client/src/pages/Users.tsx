import React, { useState, useEffect } from 'react';

interface User {
    id: number;
    lastName: string;
    firstName: string;
    username: string;
    // Add more properties as needed
}

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[] | undefined>();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('/Users');
            console.log("res: ", response);
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            console.log("data: ", data);
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };


    const contents = users === undefined ? (
        <p>
            <em>
               nothing
            </em>
        </p>
    ) : (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Username</th>
                    {/* Add more table headers as needed */}
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.lastName}</td>
                        <td>{user.firstName}</td>
                        <td>{user.username}</td>
                        {/* Add more table cells as needed */}
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div>
            <h1>Users</h1>
            {contents}
        </div>
    );
};

export default Users;
