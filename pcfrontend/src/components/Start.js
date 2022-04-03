import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Start.css'



const Start = () => {
    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    const chkOs = () => {
        if (isMobile()) {
            document.getElementById('startLink').click();
        } 
        else {
            document.getElementById('startLink2').click();
        }
    }
    return (
        <div className='StartContainer'>
            <h1>환영합니다</h1>
                <button className='StartBtnMargin' onClick={chkOs}>시작하기</button>
                <Link to = "/mobileInput" id = "startLink"></Link>
                <Link to = "/input" id = "startLink2"></Link>
        </div>
    );
};

export default Start;