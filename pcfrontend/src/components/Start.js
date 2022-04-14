import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Start.css';
// import Chart from "chart.js";

// const data = {
//   labels: [1, 2, 3, 4, 5, 6, 7],
//   datasets: [{
//     axis: 'y',
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     fill: false,
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//       'rgba(255, 159, 64, 0.2)',
//       'rgba(255, 205, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(201, 203, 207, 0.2)'
//     ],
//     borderColor: [
//       'rgb(255, 99, 132)',
//       'rgb(255, 159, 64)',
//       'rgb(255, 205, 86)',
//       'rgb(75, 192, 192)',
//       'rgb(54, 162, 235)',
//       'rgb(153, 102, 255)',
//       'rgb(201, 203, 207)'
//     ],
//     borderWidth: 1
//   }]
// };

const Start = () => {
    // const config = {
    //     type: 'line',
    //     data: data,
    //     options: {}
    //   };
    //   const myChart = new Chart(
    //     document.getElementById('myChart'),
    //     config
    //   );
    
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
            <div>
                <canvas id="myChart"></canvas>
            </div>
            <h1>환영합니다</h1>
                <button className='StartBtnMargin' onClick={chkOs}>시작하기</button>
                <Link to = "/mobileInput" id = "startLink"></Link>
                <Link to = "/input" id = "startLink2"></Link>
        </div>
    );
};

export default Start;