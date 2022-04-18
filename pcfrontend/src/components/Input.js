import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../css/Input.css'

    const Input = () => {


        const [post, setPost] = useState({name:"", age: ""});
        const [gender, setGender] = useState('');
        const [files, setFiles] = useState({});
        const [imgFile, setImgFile] = useState(null);
        const [num, setNum] = useState(0);

        const handleForm = (e) => {
            setPost({
                ...post,
                [e.target.name]:e.target.value
            });
        }

        const imgupload = (event) =>{
            event.preventDefault();
            if(post.name === ''){
                alert("이름을 입력해주세요.");
            }
            else if(post.age === ''){
                alert("나이를 입력해주세요.")
            }
            else if(gender === ''){
                alert("성별을 선택해주세요.")
            }
            else if (imgFile === null){
                alert("사진을 등록해주세요.")
            }
            else{
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
                    if(res.data !== -1){
                        setNum(num+res.data);
                        document.getElementById("resultBtn").click();
                    }
                    else{
                        alert("분석을 실패했습니다.");
                    }
                });
            }
        }
        
        const imgUploadBtn = () => {
            
            const imgButton = document.getElementById("imgFile");
            imgButton.click();
        
        }


        const radioChk = (event) => {
            setGender(event.target.value);
        }
        
        const imgChange = (event) =>{
            const file = event.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setImgFile(imageUrl);
            setFiles({imgFile: file});
            console.log(files);
        }

    return (
        <div className='ContentPadding'>
            <div className='DivPadding'>
                <input className='TextSize' type = "text" placeholder='이름' onChange={handleForm} name = 'name'/>
            </div>
            <div className='DivPadding'>
                <input className='TextSize' type = "number" placeholder='나이' onChange={handleForm} name = 'age'/>
            </div>
            <div onChange={(event)=>{radioChk(event)}}> 
                <input id="male" value="남자" type="radio" name='gender'/>남자
                <input id="female" value="여자" type="radio" name='gender'/>여자
            </div>
            <div className='DivPadding'>
                {imgFile && 
                    <div className='ImgMargin'>
                        <img className='ImgSize' src = {imgFile} alt=''/>
                    </div>
                }
                <div>
                    <button className='BtnSize' onClick={imgUploadBtn} id = "pho">사진등록</button>
                    <input type="file" style = {{display:"none"}} id = "imgFile" accept='image/*' onChange={(event)=>{imgChange(event)}}/>
                </div>
            </div>
            <div className='DivPadding'>
                <Link to = {{
                    pathname: '/result',
                    state: {
                        data1: num
                    },
                }} id = "resultBtn">
                    <button className='BtnSize'  onClick={(event) => {imgupload(event)}} >퍼스널컬러확인하기</button>
                </Link>
            </div>
        </div>
    );
};

export default Input;