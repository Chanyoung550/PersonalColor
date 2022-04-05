import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

    const Input = () => {

    const [post, setPost] = useState({name:"", age: ""});
    const [gender, setGender] = useState('');
    const [files, setFiles] = useState({});

    console.log("이름 : "+post.name);
    console.log("나이 : "+post.age);
    console.log("성별 : "+gender);
    console.log("파일 : "+files);

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
        else if (files.imgFile === {}){
            alert("파일을 등록해주세요.")
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
                console.log(res);
            });
        }
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
        const file = event.target.files[0];
        setFiles({imgFile: file});
        console.log(files);
        document.getElementById('pic').disabled = true;
    }

    const [playing, setPlaying] = React.useState(undefined);

  const videoRef = React.useRef(null);

  const getWebcam = (callback) => {
    try {
      const constraints = {
        'video': true,
        'audio': false
      }
      navigator.mediaDevices.getUserMedia(constraints)
        .then(callback);
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }
  
  const Styles = {
    Video: { width: "100%", height: "100%", background: 'rgba(245, 240, 215, 0.5)' },
    None: { display: 'none' },
  }

  React.useEffect(() => {
    getWebcam((stream => {
      setPlaying(true);
      videoRef.current.srcObject = stream;
    }));
  }, []);

  const startOrStop = () => {
    if (playing) {
      const s = videoRef.current.srcObject;
      s.getTracks().forEach((track) => {
        track.stop();
      });
    } else {
      getWebcam((stream => {
        setPlaying(true);
        videoRef.current.srcObject = stream;
      }));
    }
    setPlaying(!playing);
  }



    return (
        <div>
            <div>
                <input type = "text" placeholder='이름' onChange={handleForm} name = 'name'/>
            </div>
            <div>
                <input type = "number" placeholder='나이' onChange={handleForm} name = 'age'/>
            </div>
            <div onChange={(event)=>{radioChk(event)}}> 
                <input id="male" value="남자" type="radio" name='gender'/>남자
                <input id="female" value="여자" type="radio" name='gender'/>여자
            </div>
            <div>
                {/*<div>*둘중 하나만 등록</div>
                <div>
                    <button onClick={webCamBtn} id = "pic">사진촬영</button>
                    <input type="file" style={{display: "none"}} id="webCamPic" accept="image/*" />
                </div>
                <div style={{ width: '100vw', height: '100vh', padding: '3em' }}>
                    <video ref={videoRef} autoPlay style={Styles.Video}/>
                    <button color="warning" onClick={() => startOrStop()}>{playing ? 'Stop' : 'Start'} </button>
                </div >*/}
                <div >
                    <button onClick={imgUploadBtn} id = "pho">사진등록</button>
                    <input type="file" style = {{display:"none"}} id = "imgFile" accept='image/*' onChange={(event)=>{imgChange(event)}}/>
                </div>
            </div>
            <div>
                <Link to = "/chkPhoto">
                    <button onClick={(event) => {imgupload(event)}} >등록하기</button>
                </Link>
            </div>
        </div>
    );
};

export default Input;