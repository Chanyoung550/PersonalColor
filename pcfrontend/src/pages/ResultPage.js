import React, { useState } from 'react';
import Result from '../components/Result';

const ResultPage = (props) => {
    const num = props.location.state.data1;
    return (
        <div>
            <Result num = {num}/>
        </div>
    );
};

export default ResultPage;