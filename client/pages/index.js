import Drawing from '../components/Drawing';
import Header from '../components/Header';
import * as faceapi from 'face-api.js';

import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const loadModels = async()=>{
      const MODEL_URL = './models';
      Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      ])
    }
    loadModels();
    }, []);
    

   
  return (
    <div className="App">
      <Header />
         <Drawing faceapi={faceapi}/>
         {/* <MsgBox /> */}
         {/* <ShareBox/> */}
    </div>
  )

}
 

 

export default Home
