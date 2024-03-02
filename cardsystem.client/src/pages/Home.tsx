import Users from "./Users.tsx";
import Header from '../components/Header.tsx';
import AuthorizeView, { AuthorizedUser } from "../components/AuthorizeView.tsx";
function Home() {
    return (
        <AuthorizeView>
            <div>
                 <Header><AuthorizedUser value="email" /></Header>
                <Users />
            </div>
        </AuthorizeView>

    );
}

export default Home;