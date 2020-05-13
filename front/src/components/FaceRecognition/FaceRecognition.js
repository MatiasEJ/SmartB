import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {
          box.map((boxs)=>{
            return <div key={boxs.topRow} className='bounding-box' style={{top: boxs.topRow, right: boxs.rightCol, bottom: boxs.bottomRow, left: boxs.leftCol}}></div>
          })
       }
       
      </div>
    </div>
  );
}

export default FaceRecognition;