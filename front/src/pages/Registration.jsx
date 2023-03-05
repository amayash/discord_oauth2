import React, {useEffect} from "react";
import {Link, Navigate} from "react-router-dom";
import discord_img from "../images/discord_sign_up.png"
function Registration({ token, setToken }) {
    console.log(token)

    useEffect(() => {
        if (localStorage.getItem('token')=='null' || !localStorage.getItem('token')
            || localStorage.getItem('token')=='') {
            console.log('try get token')
            const query = new URLSearchParams(window.location.search);
            const temp = query.get('code');
            localStorage.setItem('token', temp);
            setToken(temp)
        } else {
            setToken(localStorage.getItem('token'))
        }
    }, []);

    return (
        token==null || token=='null' ?
            <>
                <nav className="text-center">
                    <Link to={"http://localhost:8080/"}>
                        <img src={discord_img} alt="discord_oauth" />
                    </Link>
                </nav>
            </>
            : <Navigate to="/" replace={true}/>
    );
}

export default Registration;