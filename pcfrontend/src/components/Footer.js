import React from 'react';
import '../css/Footer.css'

const Footer = () => {
    return (
        <div className='FooterColor'>
            <div className='DivFlex'>
                <div className='FlexItem'>
                    <p className='FooterFontColor'>React(FrontEnd)<br/>Java(BackEnd)</p>
                    <p className='FooterFontColor'>정찬영</p>
                </div>
                <div className='FlexItem'>
                    <p className='FooterFontColor'>python 인공지능</p>
                    <p className='FooterFontColor'> 양혁</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;