export default async function resizedImg(faceapi,file){

    const image = await faceapi.bufferToImage(file.files[0]);
    console.log('resizing',image)
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
    canvas.width = mw;
    canvas.height = mh;
    canvas.style.visibility = 'hidden'
    context.drawImage(image,sx,sy,ex-sx,ey-sy,0,0,mw,mh);
}