import React, { useState } from 'react';

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const AdminPage: React.FC = () => {
    const [newUser, setNewUser] = useState<User>({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleAddUser = async () => {
        try {
            const response = await fetch('/Users/CreateUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
            if (response.ok) {
                console.log('User added successfully');
                setNewUser({ firstName: '', lastName: '', email: '', password: '' }); // Clear input fields
            } else {
                console.error('Failed to add user');
            }
        } catch (error) {
            console.error('Failed to add user', error);
        }
    };

    return (
        <div>
            <h2>Add User</h2>
            <input type="text" placeholder="First Name" value={newUser.firstName} onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })} />
            <input type="text" placeholder="Last Name" value={newUser.lastName} onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })} />
            <input type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
            <input type="password" placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
            <button onClick={handleAddUser}>Add User</button>
        </div>
    );
};

export default AdminPage;
