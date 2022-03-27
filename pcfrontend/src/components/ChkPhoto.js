import React from 'react';
import { Link } from 'react-router-dom';



const ChkPhoto = () => {
    return (
        <div>  
            <div style = {{height: "400px", width: "400px", border:"1px solid lightgray"}}>image</div>
            <div>
                <Link to="/Result">
                    <button>분석하기</button>
                </Link>
            </div>
        </div>
    );
};

export default ChkPhoto;