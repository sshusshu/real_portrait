
// export default function
export default function drawingCvs(points,ctx){
    for(let i =0;i<points.length;i++){
        ctx.fillText ( `${i}`,points[i]._x,points[i]._y)
        ctx.beginPath();
        ctx.arc(points[i]._x,points[i]._y,2,0,Math.PI*2,false)
        ctx.stroke();
        ctx.closePath();
    }
}

