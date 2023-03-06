import React, {useEffect, useState} from 'react';

const MainPage = () => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch("http://localhost:8080/users/@me",{
                method: 'GET',
                credentials: 'include',
            }
        )
            .then(r=>r.json())
            .then(data=>setData(data))
    }, []);
    return (
        <>
            {
                data ?
                <div className="profile_bg card bg-light mt-5 ms-5">
                    <div className="d-flex m-2">
                        <img src={data.avatar} className="rounded my-2"/>
                        <div className="mt-1 ms-3 fs-2">{data.username}</div>
                    </div>
                </div>
                : null
            }
            <div className="text-center">
                <button className="btn btn-light inner fs-1 border-0 rounded">Создать игру</button>
            </div>
        </>
    );
};

export default MainPage;