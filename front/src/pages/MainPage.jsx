import React, {useEffect, useState} from 'react';

const MainPage = ({ getUser, data }) => {

    return (
        <div className="d-flex flex-column align-items-start">
            Хароуш
                <button onClick={getUser}>Кто я </button>
            {data}
        </div>
    );
};

export default MainPage;