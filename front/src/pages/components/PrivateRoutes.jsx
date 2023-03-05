import React, {useEffect} from 'react';
import {Navigate, Outlet, useParams} from "react-router-dom";

const PrivateRoutes = ({ token }) => {
    return (
        token!=null || token=='' ? <Outlet/> : <Navigate to="/login" replace={true}/>
    );
};

export default PrivateRoutes;