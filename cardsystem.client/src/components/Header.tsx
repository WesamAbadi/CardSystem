import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/accounts">Accounts</Link></li>
                    <li><Link to="/cards">Cards</Link></li>
                    <li><Link to="/transactions">Transactions</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
