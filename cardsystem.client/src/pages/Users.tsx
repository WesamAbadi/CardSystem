import React, { useState, useEffect } from 'react';

interface User {
    id: number;
    lastName: string;
    firstName: string;
    userName: string;
    passwordHash: string;
    lastLoginTime: Date;
    createdDate: Date;
    lastPasswordChangeDate: Date;
    // Add more properties as needed
}

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[] | undefined>();
    const [formData, setFormData] = useState<User>({
        id: 0,
        lastName: '',
        firstName: '',
        userName: '',
        passwordHash: '',
        lastLoginTime: new Date(),
        createdDate: new Date(),
        lastPasswordChangeDate: new Date()
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('/Users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/Users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to create user');
            }
            fetchUsers(); // Refresh user list after creating a new user
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    const contents = users === undefined ? (
        <p>
            <em>Nothing</em>
        </p>
    ) : (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Username</th>
                    <th>Password Hash</th>
                    <th>Last Login Time</th>
                    <th>Created Date</th>
                    <th>Last Password Change Date</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.lastName}</td>
                        <td>{user.firstName}</td>
                        <td>{user.userName}</td>
                        <td>{user.passwordHash}</td>
                        <td>{user.lastLoginTime}</td>
                        <td>{user.createdDate}</td>
                        <td>{user.lastPasswordChangeDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div>
            <h1>Users</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Username:
                    <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password Hash:
                    <input
                        type="text"
                        name="passwordHash"
                        value={formData.passwordHash}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Create User</button>
            </form>
            {contents}
        </div>
    );
};

export default Users;
