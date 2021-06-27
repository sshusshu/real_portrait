import './App.css';
import './scss/default/reset.css'
import './scss/style/index.css'
import Drawing from './components/Drawing';
import Header from './components/Header'
import MsgBox from './components/MsgBox';
import * as faceapi from 'face-api.js';

import React, { useState,useEffect } from 'react'

function App() {
  useEffect(() => {
    const loadModels = async()=>{
      const MODEL_URL = process.env.PUBLIC_URL + './models';
      Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      ]).then((res)=>{
      })
    }
    loadModels();
    }, []);
    
    
    
  return (
    <div className="App">
      <Header />
      <Drawing faceapi={faceapi}/>
      <MsgBox />
    </div>
  );
}

export default App;
