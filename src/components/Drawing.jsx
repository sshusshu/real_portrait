import BtnBox from "./BtnBox";
import PreLoader from './PreLoader';
import NotFound from './NotFound';

import drawingFace from "../js/library/drawFace";
import drawingCvs from "../js/library/drawCanvas";

import { useEffect, useRef, useState, memo } from "react";

const Drawing = memo(({faceapi,setShareData}) => { 
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const drawRef = useRef(null);
    const fileRef = useRef(null);
    const canvas = useRef();
    const canvas2 = useRef();
    

    let detecting,points,mh,mw;

    const [isLoading,setIsLoading] = useState(false);
    const [isNothing,setIsNothing] = useState(false);
    const [isDone,setIsDone] = useState(false);
    const [cvsW,setCvsW] = useState(0);
    const [cvsH,setCvsH] = useState(0);
    const [context,setContext] = useState('');
    const [drawBox,setDrawBox] = useState('');

    const [saveUrl,setSaveUrl] = useState('');

    useEffect(()=>{  
    console.log('//effect')
         canvas.current = canvasRef.current;  
         setContext(canvas.current.getContext('2d'))
         ctxRef.current = context
         setDrawBox(drawRef.current)
    },[context])


    async function landmarks(faceapi){
    console.log('//landmarks')
        detecting = await faceapi
            .detectSingleFace(canvas.current)
            .withFaceLandmarks()
        points = detecting.landmarks.positions;
    }

    async function resizedImg(faceapi,file){
        console.log('//resize')
        const image = await faceapi.bufferToImage(file.files[0]);
        const detect = await faceapi.detectSingleFace(image).withFaceLandmarks();
        const point = detect.landmarks.positions;
        const arrX = point.map(a=>a._x);
        const arrY = point.map(a=>a._y);
        const sx = Math.min(...arrX)-20;
        const sy = Math.min(...arrY)-20;
        const ex = Math.max(...arrX)+20;
        const ey = Math.max(...arrY)+20;
        mw = 350;
        mh = (mw*(ey-sy))/(ex-sx);
        setCvsW(mw);
        setCvsH(mh);
        context.drawImage(image,sx,sy,ex-sx,ey-sy,0,0,mw,mh);
}

    const onReset = () =>{
    console.log('//reset')
        setIsNothing(false);
        init()
    }

    const init = () =>{
    console.log('//init')
        setContext(ctxRef.current)
        drawBox.innerHTML = '';
    }   

    const onUpload = () =>{
    console.log('//upload')
    const file = fileRef.current

        async function drawStart(){     
            setIsLoading(true);
            try{
                await resizedImg(faceapi,file);
                await landmarks(faceapi);
                setIsDone(true)
            }catch(e){
                setIsLoading(false);
                setIsNothing(true);
                setIsDone(false);
                return;
            }
            setIsLoading(false);
            drawingCvs(points,context)
            drawingFace(drawBox,points,mw,mh);
            saveDrawing(drawBox.children[0])
            // downloadBtn.setAttribute('href',svgUrl)
        }
        drawStart();
    }

   
    function saveDrawing(svg) {
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.style.fill = 'none';
        svg.style.stroke = '#000';
        const svgData = svg.outerHTML;
        const preface = '<?xml version="1.0" standalone="no"?>\r\n';
        const svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
        let URL = window.URL || window.webkitURL || window;
        let blobURL = URL.createObjectURL(svgBlob);

            let img= new Image();
            img.onload = function(){
                canvas2.current = document.createElement('canvas');
                let context2 = canvas2.current.getContext('2d');
                canvas2.current.width = mw;
                canvas2.current.height = mh;
                context2.drawImage(img, 0, 0, mw, mh);
                setSaveUrl(canvas2.current.toDataURL('image/jpg'));
                setShareData(canvas2.current.toDataURL('image/jpg'))
            }
            img.src = blobURL;
    }

    return(
        <>
        <PreLoader isLoading={isLoading}/>
        <NotFound isNothing={isNothing} onReset={onReset}/>
        <section className="drawing-container">
            <canvas ref={canvasRef} width={cvsW} height={cvsH}></canvas>
            <div className="drawing-box">
                <div ref={drawRef} className="img-box"></div>
            </div>
        </section>
        <BtnBox onUpload={onUpload} isDone={isDone} saveUrl={saveUrl} fileRef={fileRef} />
        </>
    )
})
export default Drawing