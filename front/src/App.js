import React, {useState} from "react";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
//import Registration from "./pages/Registration";
import PrivateRoutes from "./pages/components/PrivateRoutes";
import MainPage from "./pages/MainPage";

const AuthContext = React.createContext(null);
function App() {
    const [token, setToken] = useState(null);
    const handleLogin = async () => {
        const token = await fetch('/users/@me')
            .then(r => console.log(r.json()))
        setToken(token);
    };
    const handleLogout = () => {
        setToken(null);
    };

    const Navigation = ({ token, onLogout }) => {
        return (
            <nav>
                <Link to="/">MainPage</Link>
                <Link to="/login">Registration</Link>

                {token && (
                    <button type="button" onClick={onLogout}>
                        Sign Out
                    </button>
                )}
            </nav>
        );
    }

    return (
        <AuthContext.Provider value={token}>
            <Navigation token={token} onLogout={handleLogout}/>
            <BrowserRouter>
                <Routes>
                    <Route element={<PrivateRoutes/>}>
                        <Route element={<MainPage/>} path="/"></Route>
                    </Route>
                    <Route element={<Registration onLogin={handleLogin}/>} path="/login" />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

function Registration({ onLogin }) {
    const token = React.useContext(AuthContext);
    /*const params = useParams();
    useEffect(() => {
        fetch("http://localhost:3000/callback")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.info('Get token success');
                setItems(data);
            })
            .catch(function (error) {
                console.error('Error:', error);
                throw "Can't get token";
            });

    }, []);*/

    return (
        <>
            <div>Authenticated as {token}</div>
            <nav className="text-center">
                {/*<Link to={"http://localhost:8080/"}><img src={discord_img} alt="discord_oauth" /></Link>*/}
                <button type="button" onClick={onLogin}>
                    Sign In
                </button>
            </nav>
        </>
    );
}
export default App;