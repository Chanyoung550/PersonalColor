import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//const [ test, setTest] = useState('');




const Input = () => {

    const [upPhoto, setUpPhoto] = ('');

    const upload = () =>{

    }
    
    const onChageEvent = () => {
    
        const imgButton = document.getElementById("imgFile");
        imgButton.click();
    
    }
    
    const imgChange = () =>{
    
    
    
    }

    return (
        <div>
            <div>
                <input type = "text" placeholder='이름'/>
            </div>
            <div>
                <input type = "text" placeholder='나이'/>
            </div>
            <div>
                <input id="male" value="남자" type="radio" />남자
                <input id="female" value="여자" type="radio" />여자
            </div>
            <div>
                <div>*둘중 하나만 등록</div>
                <div>
                    <button>사진촬영</button>
                </div>
                <div>
                    <button onClick={onChageEvent}>사진등록</button>
                    <input type="file" style = {{display:"none"}} id = "imgFile" accept='image/*' onChange={imgChange}/>
                </div>
            </div>
            <div>
                <Link to = "/chkPhoto">
                    <button onClick={upload} >등록하기</button>
                </Link>
            </div>
        </div>
    );
};

export default Input;