import React, {useEffect} from 'react';
import discord_img from '../images/discord_sign_up.png'
import {Link, useParams} from "react-router-dom";

function Registration({...props, onLogin }) {
    const params = useParams();
    useEffect(() => {
        // fetch("http://localhost:3000/callback")
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (data) {
        //         console.info('Get token success');
        //         setItems(data);
        //     })
        //     .catch(function (error) {
        //         console.error('Error:', error);
        //         throw "Can't get token";
        //     });

    }, []);

    return (
        <nav className="text-center">
            <Link to={"http://localhost:8080/"}><img src={discord_img} alt="discord_oauth" /></Link>
            <button type="button" onClick={onLogin}>
                Sign In
            </button>
        </nav>
    );
}

export default Registration;