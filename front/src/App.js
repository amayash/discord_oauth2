import React, {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Registration from "./pages/Registration";
import PrivateRoutes from "./pages/components/PrivateRoutes";
import MainPage from "./pages/MainPage";
function App() {
    const [token, setToken] = useState(null);
    const [data, setData] = useState([]);

    function getUser() {
        fetch("http://localhost:8080/users/@me")
            .then(r=>r.json())
            .then(d=>setData(d))
    }
    function removeToken() {
        localStorage.removeItem('token')
        setToken(null)
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes token={token}/>}>
                    <Route element={<MainPage
                        removeToken={removeToken}
                        data={data}
                        getUser={getUser}/>} path="*">
                    </Route>
                </Route>
                <Route element={<Registration token={token} setToken={setToken}/>} path="/login" />
            </Routes>
        </BrowserRouter>
    );
}
export default App;