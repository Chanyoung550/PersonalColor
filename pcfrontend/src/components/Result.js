import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Result = (props) => {


    //구조분할 할당
    const {num} = props;
    const [pk, setPk] = useState(num);
    const [data, setData] = useState();

    useEffect(() => {
        console.log("Effect : "+pk)
        let sendPk = {
            userNum : pk
        }
        axios({
            method: "post",
            url: "/result.do",
            data: sendPk,
            headers: {'content-type': `application/json`}
        })
        .then((res)=> {
            setData(res.data);
        });
    }, [pk]);
    console.log(data);

    return (
        <div>
            <div style={{height:"400px", widht:"400px", border: "1px solid lightgray"}}>
                <img alt="" src=""/>{/* '/static/images/'+data.dirPath+'/'+data.imgPath */}
            </div>
            <div>
                {
                    data.res ==="fall" &&
                    <p style={{fontSize:"20px"}}>당신의 퍼스널컬러는 가을웜톤입니다.</p>
                }
                {
                    data.res ==='spring' &&
                    <p style={{fontSize:"20px"}}>당신의 퍼스널컬러는 봄웜톤입니다.</p>
                }
                {
                    data.res ==='summer' &&
                    <p style={{fontSize:"20px"}}>당신의 퍼스널컬러는 여름쿨톤입니다.</p>
                }
                {
                    data.res ==='winter' &&
                    <p style={{fontSize:"20px"}}>당신의 퍼스널컬러는 겨울쿨톤입니다.</p>
                }
            </div>
        </div>
    );
};

export default Result;