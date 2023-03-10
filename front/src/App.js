import React, { useState} from "react";
import {BrowserRouter, Outlet, useRoutes} from 'react-router-dom';
import Registration from "./pages/Registration";
import MainPage from "./pages/MainPage";
import Header from "./pages/components/Header";
function Router(props) {
    return useRoutes(props.rootRoute);
}
function App() {
    const routes = [
        { index: true, element:
                <MainPage /> },
        { path: '*', element:
                <MainPage />},
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
