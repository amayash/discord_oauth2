import React from "react";
import {Link} from "react-router-dom";
import discord_img from "../images/discord_sign_up.png"
function Registration() {

    return (
        <>
            <nav className="text-center">
                <Link to={"http://localhost:8080/"}>
                    <img src={discord_img} alt="discord_oauth" />
                </Link>
            </nav>
        </>
    );
}

export default Registration;