import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Registration from "./pages/Registration";
import PrivateRoutes from "./pages/components/PrivateRoutes";
import MainPage from "./pages/MainPage";

function App() {
    const [token, setToken] = React.useState(null);
    const handleLogin = async () => {
        const token = await fetch('/users/@me')
            .then(r => r.json());

        setToken(token);
    };
    const handleLogout = () => {
        setToken(null);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes/>}>
                    <Route element={<MainPage/>} path="/"></Route>
                </Route>
                <Route element={<Registration token={token} onLogout={handleLogout} onLogin={handleLogin}/>} path="/login" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;