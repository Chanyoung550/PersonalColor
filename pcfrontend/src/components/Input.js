import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

    const Input = () => {

        var video = document.querySelector("#videoElement");
    
    if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
        video.srcObject = stream;
        })
        .catch(function (err0r) {
        console.log("Something went wrong!");
        });
    }

    const [post, setPost] = useState({name:"", age: ""});
    const [gender, setGender] = useState('');
    const [files, setFiles] = useState({});


    const handleForm = (e) => {
        setPost({
            ...post,
            [e.target.name]:e.target.value
        });
        console.log(post);
    }

    const imgupload = (event) =>{
        event.preventDefault();
        const fd = new FormData();
        fd.append('img', files.imgFile);
        fd.append('name', post.name);
        fd.append('age', post.age);
        fd.append('gender', gender);
        console.log(fd);

        axios({
            method: "post",
            url: "/fileUpload.do",
            data: fd,
            headers: {'content-type': 'multipart/form-data'}
        })
        .then((res)=> {
            console.log(res);
        });
        
    }
    
    const imgUploadBtn = () => {
        
        const imgButton = document.getElementById("imgFile");
        imgButton.click();
    
    }

    const webCamBtn = () => {
        
        const imgButton = document.getElementById("webCamPic");
        imgButton.click();
    
    }

    const radioChk = (event) => {
        setGender(event.target.value);
    }
    
    const imgChange = (event) =>{
        console.log(event.target.value);
        const file = event.target.files[0];
        setFiles({imgFile: file});
        console.log(files.imgFile);
    }

    return (
        <div>
            <div>
                <input type = "text" placeholder='이름' onChange={handleForm} name = 'name'/>
            </div>
            <div>
                <input type = "text" placeholder='나이' onChange={handleForm} name = 'age'/>
            </div>
            <div onChange={(event)=>{radioChk(event)}}> 
                <input id="male" value="남자" type="radio" name='gender'/>남자
                <input id="female" value="여자" type="radio" name='gender'/>여자
            </div>
            <div>
                <div>*둘중 하나만 등록</div>
                <div>
                    <button onClick={webCamBtn}>사진촬영</button>
                    <input type="file" style={{display: "none"}} id="webCamPic" accept="image/*" />
                </div>
                <div>
                    <img src="about:blank" alt="" id="show-picture" />
                </div>
                <div>
                    <button onClick={imgUploadBtn}>사진등록</button>
                    <input type="file" style = {{display:"none"}} id = "imgFile" accept='image/*' onChange={(event)=>{imgChange(event)}}/>
                </div>
            </div>
            <div>
                <Link to = "/chkPhoto">
                    <button onClick={(event) => {imgupload(event)}} >등록하기</button>
                </Link>
            </div>
            <div>
                <video autoplay="true" id="videoElement">
        
                </video>
            </div>
        </div>
    );
};

export default Input;