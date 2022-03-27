import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Start.css'



const Start = () => {
    return (
        <div className='StartContainer'>
            <h1>환영합니다</h1>
            <Link to = "/input">
                <button className='StartBtnMargin' >시작하기</button>
            </Link>
        </div>
    );
};

export default Start;