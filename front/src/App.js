import React, { useState} from "react";
import {BrowserRouter, Outlet, useRoutes} from 'react-router-dom';
import Registration from "./pages/Registration";
import MainPage from "./pages/MainPage";
import Header from "./pages/components/Header";
import { getCookie } from 'xsrf-cookie';
import {withCookies} from "react-cookie";
function Router(props) {
    return useRoutes(props.rootRoute);
}
function App() {
    const [data, setData] = useState([]);
    // csrfToken=  cookies.get('XSRF-TOKEN');
    const csrfToken = getCookie('X-XSRF-TOKEN');
    function getUser() {
        console.log(csrfToken)
        fetch("http://localhost:8080/users/@me",     {
            method: 'GET',
            credentials: 'include',
            }

        )
            .then(r=>r.json())
            .then(d=>setData(d))
    }
    const routes = [
        { index: true, element:
                <MainPage data={data} getUser={getUser}/> },
        { path: '*', element:
                <MainPage data={data} getUser={getUser}/>},
        { path: '/login', element: <Registration />, label: 'Регистрация' },
        { path: 'http://localhost:8080/logout', label: 'Выход' }
    ];
    const links = routes.filter(route => route.hasOwnProperty('label'));
    const rootRoute = [
        { path: '/', element: render(links), children: routes }
    ];
    function render(links) {
        return (
            <>
                <Header links={links} />
                <Outlet />
            </>
        );
    }

    return (
        <BrowserRouter>
            <Router rootRoute={ rootRoute } />
        </BrowserRouter>
    );
}
export default App;