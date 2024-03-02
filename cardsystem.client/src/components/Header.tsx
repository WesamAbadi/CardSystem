import { Link, useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

function Header(props: { children: React.ReactNode }) {
    const navigate = useNavigate();

    const handleSubmit = async (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: ""
            });

            if (response.ok) {
                navigate("/login");
            } else {
                // Handle other cases if needed
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/accounts">Accounts</Link></li>
                    <li><Link to="/cards">Cards</Link></li>
                    <li><Link to="/transactions">Transactions</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><a href="#" onClick={handleSubmit}>Logout</a></li>
                    <p>{props.children}</p>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
