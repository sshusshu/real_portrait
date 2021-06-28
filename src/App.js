import './App.css';
import './scss/default/reset.css'
import './scss/style/index.css'
import Drawing from './components/Drawing';
import Header from './components/Header'
import MsgBox from './components/MsgBox';
import * as faceapi from 'face-api.js';

import React, { useEffect, useState } from 'react'
import ShareBox from './components/ShareBox';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

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
    
    
    const [shareData,setShareDate] = useState();
    useEffect(()=>{
    },[shareData])

   
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
         <Drawing faceapi={faceapi} setShareData={setShareDate}/>
        </Route>
        <Route path='/msg'>
         <MsgBox />
        </Route>
        <Route path='/share_img'>
         <ShareBox/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
