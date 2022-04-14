import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../css/Result.css';

const Result = (props) => {


    //구조분할 할당
    const {num} = props;
    const [pk, setPk] = useState(num);
    const [resData, setResData] = useState();
    const [data, setData] = useState();
    const [imgUrl, setImgUrl] = useState("");

    useEffect(()=>{
        axios
        .get("/test.do/"+pk)
        .then((res)=>{
            setResData(res.data.res);
            setData(res.data);
            let imgPath = "images/"+res.data.dirPath+"/"+res.data.imgPath;
            console.log(imgPath);
            setImgUrl(imgPath);
        })
    }, [])

    return (
        <div>
            <div className='BodyRadius'>
                <div className='BodyFlex'>
                    <div className='BodyFlexItems'>
                        <img style={{width:"100%"}} alt="" src={imgUrl}/>
                    </div>
                    <div className='BodyFlexItems'>
                    {
                        resData ==="fall" && 
                        <div>
                            <div style={{textAlign: 'center'}}>
                                <p className='TitleFontSize'>당신의 퍼스널컬러는 <strong>가을웜톤</strong>입니다.</p>
                            </div>
                            <div className='AttrFlex'> 
                                <div className='AttrFlexItemsColor' style={{background: 'rgb(250, 231, 165)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                            <div className='AttrFlex'>
                                <div className='AttrFlexItemsColor' style={{background: 'rgb(225, 195, 150)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                            <div className='AttrFlex'>
                                <div className='AttrFlexItemsColor' style={{background: 'rgb(231, 150, 25)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                            <div className='AttrFlex'>
                                <div className='AttrFlexItemsColor' style={{background: 'rgb(79, 59, 60)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                        </div>
                    }
                    {
                        resData ==='spring' &&
                        <div>
                            <div style={{textAlign: 'center'}}>
                                <p className='TitleFontSize'>당신의 퍼스널컬러는 <strong>봄웜톤</strong>입니다.</p>
                            </div>
                            <div className='AttrFlex'>
                                <div className='AttrFlexItemsColor'  style={{background: 'rgb(245, 232, 200)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                            <div className='AttrFlex'>
                                <div className='AttrFlexItemsColor'  style={{background: 'rgb(255, 241, 4)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                            <div className='AttrFlex'>
                                <div className='AttrFlexItemsColor'  style={{background: 'rgb(255, 195, 83)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                            <div className='AttrFlex'>
                                <div className='AttrFlexItemsColor'  style={{background: 'rgb(250, 172, 132)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                        </div>
                    }
                    {
                        resData ==='summer' &&
                        <div>
                            <div style={{textAlign: 'center'}}>
                                <p className='TitleFontSize'>당신의 퍼스널컬러는 <strong>여름쿨톤</strong>입니다.</p>
                            </div>
                            <div className='AttrFlex'>
                                <div className='AttrFlexItemsColor'  style={{background: 'rgb(204, 236, 235)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                            <div className='AttrFlex'>
                                <div className='AttrFlexItemsColor'  style={{background: 'rgb(0, 148, 207)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                            <div className='AttrFlex'>
                                <div className='AttrFlexItemsColor'  style={{background: 'rgb(201, 202, 227)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                            <div className='AttrFlex'>
                                <div className='AttrFlexItemsColor'  style={{background: 'rgb(154, 154, 204)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                        </div>
                    }
                    {
                        resData ==='winter' &&
                        <div>
                            <div style={{textAlign: 'center'}}>
                                <p className='TitleFontSize'>당신의 퍼스널컬러는 <strong>겨울쿨톤</strong>입니다.</p>
                            </div>
                            <div>
                                <div className='AttrFlexItemsColor' style={{background: 'rgb(255, 255, 255)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                            <div>
                                <div className='AttrFlexItemsColor' style={{background: 'rgb(218, 229, 235)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                            <div>
                                <div className='AttrFlexItemsColor' style={{background: 'rgb(135, 33, 117)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                            <div>
                                <div className='AttrFlexItemsColor' style={{background: 'rgb(16, 3, 82)'}}></div>
                                <div className='AttrFlexItemsFont'>test</div>
                            </div>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;