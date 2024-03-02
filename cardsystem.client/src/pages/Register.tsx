import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState(""); // Add state for first name
    const [lastName, setLastName] = useState("");   // Add state for last name
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
        else if (name === "confirmPassword") setConfirmPassword(value);
        else if (name === "firstName") setFirstName(value);
        else if (name === "lastName") setLastName(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        if (!email || !password || !confirmPassword || !firstName || !lastName) {
            setError("Please fill in all fields.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
        } else if (password !== confirmPassword) {
            setError("Passwords do not match.");
        } else {
            setError("");
            fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    firstName: firstName, 
                    lastName: lastName 
                }),
            })
                .then((response) => {
                    if (response.ok)
                        setError("Successful register.");
                    else
                        setError("Error registering.");
                })
                .catch((error) => {
                    console.error(error);
                    setError("Error registering.");
                });
        }
    };


    const handleLoginClick = () => {
        navigate("/login");
    }

    return (
        <div className="containerbox">
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
                <div>
                    <button onClick={handleLoginClick}>Go to Login</button>
                </div>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Register;
