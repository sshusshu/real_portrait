import BtnBox from "./BtnBox";
import PreLoader from './PreLoader';
import NotFound from './NotFound';
import ShareBox from "../pages/share/index";

import drawingFace from "../public/js/drawFace";
import drawingCvs from "../public/js/drawCanvas";

import { useEffect, useRef, useState, memo } from "react";
import fetcher from "../fetcher";
import router, { useRouter } from "next/router";

const Drawing = memo(({faceapi}) => { 
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const drawRef = useRef(null);
    const fileRef = useRef(null);
    const canvas = useRef();
    const canvas2 = useRef();
    
    const [shareData,setShareData] = useState(null);

    let detecting,points,customPoints,mh,mw;
    let newImgArr = [];

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
        
        const imgArr = context.getImageData(0,0,mw,mh).data;
        // 머리 부분 포인트를 찾기 위해 이미지 배열을 2차원 배열로 변경 
        for(let i = 0; i<imgArr.length;i+=(4*mw)){
            newImgArr.push([...imgArr.slice(i,i+4*mw)])
        }

        customPoints = {
            point17 : forheadPoint(points[17]),
            point18 : forheadPoint(points[18]),
            point19 : forheadPoint(points[19]),
            point21 : forheadPoint(points[21]),
            point23 : forheadPoint(points[23]),  
            point25 : forheadPoint(points[25]),       
            point26 : forheadPoint(points[26]),       
            point27 : forheadPoint(points[27]),
        }
        
    }

    function forheadPoint (point){       
        return {
                _x:point._x,
                _y:getForheadY(point)
            }
    }
    
    function getForheadY(point){
        const pointX = Math.floor(point._x);
        const pointY = Math.floor(point._y);
        let maxColor = 0;
        let maxPoint = 0;
        let prePointColor;
        for(let i = 20; i<pointY-20;i++){
            const pointPixel = newImgArr[i].slice(pointX*4,pointX*4+4);
            const pointColor = pointPixel[0]+pointPixel[1]+pointPixel[2];
            const pointDiff = Math.abs(pointColor-prePointColor);

            if(maxColor<pointDiff && pointDiff>20 && !isNaN(pointDiff) ){
                maxColor = pointDiff;
                maxPoint = i
            }
            prePointColor = pointColor;
        }

        return maxPoint
    }



    async function resizedImg(faceapi,file){
        console.log('//resize')
        const image = await faceapi.bufferToImage(file.files[0]);
        const detect = await faceapi.detectSingleFace(image).withFaceLandmarks();
        const point = detect.landmarks.positions;
        const sx = point[0]._x-50;
        const sy = point[19]._y-200;
        const ex = point[16]._x+50;
        const ey = point[8]._y+20;
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
            drawingCvs(points,context);
            drawingFace(drawBox,points,mw,mh,customPoints);
            saveDrawing(drawBox.children[0]);
        }
        drawStart();
    }


    const onShareCreate = async(dataUri) =>{
        const newDrw = await fetcher('post','/share',{dataUri})
        if(!newDrw) return     
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
                setShareData(canvas2.current.toDataURL('image/jpg'));
                onShareCreate(canvas2.current.toDataURL('image/jpg'));
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