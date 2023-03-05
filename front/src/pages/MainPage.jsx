import React, {useEffect, useState} from 'react';

const MainPage = ({ removeToken, getUser, data }) => {

    // const csrfToken = document
    //     .cookie
    //     .replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/,
    //         '$1');
    // console.log(csrfToken)

    return (
        <div className="d-flex flex-column align-items-start">
            Хароуш
            <button onClick={getUser}>Кто я</button>
            <button onClick={removeToken}> Выход</button>
            {data}
        </div>
    );
};

export default MainPage;