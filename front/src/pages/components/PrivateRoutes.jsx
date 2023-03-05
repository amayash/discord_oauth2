import React, {useEffect} from 'react';
import {Navigate, Outlet, useParams} from "react-router-dom";

const PrivateRoutes = () => {

    let auth = {'token': false}
    return (
        auth.code ? <Outlet/> : <Navigate to="/login" replace={true}/>
    );
};

export default PrivateRoutes;