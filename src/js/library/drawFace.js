
export default function drawingFace(box,points,mw,mh){
    const leftEye = {
        r:{
            x:points[39]._x + 7,
            y:points[40]._y
        },
        l:{
            x:points[36]._x-5,
            y:points[37]._y + ((points[41]._y+5 - points[37]._y)/2)
        },
        center: {
            x:points[37]._x+((points[38]._x - points[37]._x)/2),
            y:points[40]._y+5
        },
        radius : ((points[38]._x - points[37]._x)/2)
    }
    const rightEye = {
        r:{
            x:points[45]._x+5,
            y:points[44]._y + ((points[46]._y+5 - points[44]._y)/2)
        },
        l:{
            x:points[42]._x - 3,
            y:points[47]._y
        },
        center: {
            x:points[43]._x+((points[44]._x - points[43]._x)/2),
            y:points[47]._y+5
        },
        radius : ((points[44]._x - points[43]._x)/2)
    }
    const nose = {
        l :{
            x:points[31]._x - ((points[31]._x-points[39]._x)/2),
            y:points[31]._y
        },
        r :{
            x:points[35]._x + ((points[31]._x-points[39]._x)/2),
            y:points[35]._y
        },
        radius :(points[33]._y-points[30]._y)/2
    }
    const chin = points[8]._y + 5
    const lastPoint = {
        x: points[26]._x,
        y: points[26]._y-100
    }
    box.style.top = `${mh}px`
    box.innerHTML =
        `<svg width="${mw}" height="${mh}" viewBox="0 0 ${mw} ${mh}">    
    <path id="line"
          d="M ${points[17]._x}, ${points[17]._y-100}
             C ${points[17]._x-20},${points[17]._y-95} 
               ${points[17]._x-20},${points[17]._y+5}
               ${points[17]._x}, ${points[17]._y}
               
             L ${points[18]._x-5},${points[18]._y}
             C ${points[18]._x+10},${points[18]._y-10}
               ${leftEye.r.x},${points[21]._y}
               ${leftEye.r.x},${points[21]._y}
               
             C ${leftEye.r.x+5},${points[21]._y}
               ${leftEye.r.x+5},${points[21]._y+15}
               ${leftEye.r.x},${points[21]._y+15}
               
             C ${leftEye.r.x},${points[21]._y+10}
               ${points[18]._x},${points[18]._y+10}
               ${points[18]._x},${points[18]._y+15}
             
             L ${points[17]._x+5},${points[17]._y+15}
             C ${points[17]._x-5},${points[17]._y+20}
               ${leftEye.l.x-15},${leftEye.l.y-10}
               ${leftEye.l.x-10},${leftEye.l.y-5}
               
             C ${leftEye.l.x+5},${leftEye.l.y-15}
               ${points[38]._x-10},${points[38]._y-10}
               ${points[38]._x},${points[38]._y-5}
            
             C ${points[38]._x+5},${points[38]._y-5}
               ${leftEye.r.x},${leftEye.r.y-10}
               ${leftEye.r.x},${leftEye.r.y-5}
            
             L ${leftEye.r.x},${leftEye.r.y}
             
             C ${leftEye.r.x},${leftEye.r.y-5}
               ${points[38]._x+5},${points[38]._y}
               ${points[38]._x},${points[38]._y}
               
             C ${points[38]._x},${points[38]._y-3}
               ${points[37]._x},${points[37]._y-3}
               ${points[37]._x},${points[37]._y}
             
             C ${points[37]._x-5},${points[37]._y+leftEye.radius}
               ${leftEye.center.x - leftEye.radius},${leftEye.center.y} 
               ${leftEye.center.x},${leftEye.center.y} 
               
             C ${leftEye.center.x+leftEye.radius},${leftEye.center.y}
               ${points[38]._x+5},${points[38]._y+leftEye.radius}
               ${points[38]._x},${points[38]._y}
               
             C ${points[38]._x},${points[38]._y-3}
               ${points[37]._x},${points[37]._y-3}
               ${points[37]._x},${points[37]._y}
               
             C ${leftEye.center.x-10},${points[38]._y}
               ${leftEye.l.x+5},${leftEye.l.y-10}
               ${leftEye.l.x},${leftEye.l.y}

             C ${leftEye.l.x},${leftEye.l.y+10} 
               ${leftEye.center.x-10},${leftEye.center.y}
               ${leftEye.center.x},${leftEye.center.y}
               
             C ${leftEye.center.x+5},${leftEye.center.y}
               ${leftEye.r.x-5},${leftEye.r.y}
               ${points[39]._x},${points[39]._y+5}
               
             C ${points[39]._x},${points[39]._y+3}
               ${leftEye.r.x},${leftEye.r.y-3}  
               ${leftEye.r.x},${leftEye.r.y}

             C ${leftEye.r.x},${leftEye.r.y+10}
               ${points[19]._x},${leftEye.r.y+20}
               ${points[19]._x},${leftEye.r.y+20}
               
             C ${points[17]._x-10},${leftEye.r.y+20}
               ${points[37]._x},${points[30]._y}
               ${points[37]._x},${points[30]._y}
          
             C ${points[37]._x+20},${points[30]._y+20}
               ${points[32]._x+20},${points[27]._y}
               ${points[32]._x+10},${points[27]._y-10}
               
             C ${points[32]._x},${points[27]._y-30}
               ${nose.l.x+20},${nose.l.y-20}
               ${nose.l.x},${nose.l.y-20}

             C ${nose.l.x-5},${nose.l.y-20}
               ${nose.l.x-5},${nose.l.y}
               ${nose.l.x},${nose.l.y}
       
             C ${nose.l.x},${nose.l.y}
               ${points[33]._x-10},${points[33]._y+5}
               ${points[31]._x},${points[31]._y}
               
             C ${points[31]._x},${points[31]._y-5}
               ${points[32]._x+5},${points[32]._y-5}
               ${points[32]._x+5},${points[32]._y}
                       
             Q ${points[33]._x},${points[33]._y+3}
               ${points[34]._x-5},${points[34]._y}
            
             C ${points[34]._x-5},${points[34]._y-5}
               ${points[35]._x},${points[35]._y-5}
               ${points[35]._x},${points[35]._y}
               
             C ${points[33]._x+10},${points[33]._y+5}
               ${nose.r.x},${nose.r.y}
               ${nose.r.x},${nose.r.y}
               
             C ${nose.r.x+5},${nose.r.y}
               ${nose.r.x+5},${nose.r.y-20}
               ${nose.r.x},${nose.r.y-20}

             C ${nose.r.x-15},${nose.r.y-30}
               ${points[33]._x+10},${points[33]._y-20}
               ${points[33]._x},${points[33]._y}
               
             L ${points[33]._x},${points[33]._y-nose.radius}
             
             C ${points[33]._x-nose.radius*1.5},${points[33]._y-nose.radius}
               ${points[30]._x-nose.radius*1.5},${points[30]._y-nose.radius}
               ${points[30]._x},${points[30]._y-nose.radius}

             C ${points[30]._x+nose.radius*1.5},${points[30]._y-nose.radius}
               ${points[33]._x+nose.radius*1.5},${points[33]._y-nose.radius}
               ${points[33]._x},${points[33]._y-nose.radius}

             L ${points[33]._x},${points[33]._y}
             
             C ${points[33]._x+10},${points[33]._y}
               ${points[62]._x},${points[48]._y}
               ${points[48]._x},${points[48]._y}
             
             C ${points[48]._x},${points[48]._y-5}
               ${points[50]._x},${points[50]._y-5} 
               ${points[50]._x},${points[50]._y} 

             L ${points[51]._x},${points[51]._y}  
               ${points[52]._x},${points[52]._y} 

             C ${points[52]._x},${points[52]._y-5}
               ${points[54]._x},${points[54]._y-5}
               ${points[54]._x},${points[54]._y}

             C ${points[54]._x-5},${points[54]._y+5}
               ${points[62]._x+5},${points[62]._y+5} 
               ${points[62]._x},${points[62]._y}

             C ${points[62]._x-5},${points[62]._y+5}
               ${points[48]._x+5},${points[48]._y+5}
               ${points[48]._x},${points[48]._y}
            
             C ${points[48]._x},${points[48]._y+5}
               ${points[67]._x-5},${points[67]._y}
               ${points[67]._x},${points[67]._y}
             C ${points[67]._x},${points[67]._y+2}
               ${points[65]._x},${points[65]._y+2}
               ${points[65]._x},${points[65]._y}
             C ${points[65]._x+5},${points[65]._y}
               ${points[54]._x},${points[54]._y+5}
               ${points[54]._x},${points[54]._y}
            
             C ${points[54]._x-5},${points[54]._y+5}
               ${points[57]._x+20},${points[57]._y+5}
               ${points[57]._x},${points[57]._y}

             C ${points[57]._x-3},${points[57]._y+3}
               ${points[58]._x},${points[58]._y}
               ${points[58]._x},${points[58]._y}

             C ${points[58]._x+45},${points[58]._y-5}
               ${points[8]._x+30}, ${chin}
               ${points[8]._x}, ${chin}

             C ${points[8]._x}, ${chin+10}
               ${points[5]._x+5},${points[5]._y+10}
               ${points[5]._x},${points[5]._y}
             
             L ${points[4]._x}, ${points[4]._y+10}

             C ${points[4]._x},${points[4]._y+10}
               ${points[2]._x},${points[2]._y+20}
               ${points[2]._x},${points[2]._y+10}

             C ${points[2]._x-40},${points[2]._y}
               ${points[0]._x-40},${points[0]._y-30}
               ${points[0]._x},${points[0]._y}

             C ${points[0]._x+10},${points[0]._y}
               ${points[1]._x+10},${points[1]._y}
               ${points[1]._x},${points[1]._y}

             C ${points[1]._x-20},${points[1]._y+30}
               ${points[1]._x-20},${points[1]._y-30}
               ${points[1]._x},${points[1]._y}
             
             C ${points[1]._x+10},${points[1]._y}
               ${points[2]._x+10},${points[2]._y+10}
               ${points[2]._x},${points[2]._y+10}
       
             L ${points[4]._x},${points[4]._y}
               ${points[5]._x},${points[5]._y}
               ${points[6]._x},${points[6]._y}
               ${points[7]._x},${points[7]._y+5}
            
             C ${points[7]._x+10},${points[7]._y+15}
               ${points[8]._x-10},${points[8]._y+20}
               ${points[8]._x},${points[8]._y+10}
              
              
             C ${points[8]._x+10},${points[8]._y+20}
               ${points[9]._x-10},${points[9]._y+15}
               ${points[9]._x},${points[9]._y+5}
               
             L ${points[10]._x},${points[10]._y}
               ${points[11]._x},${points[11]._y}
               ${points[12]._x},${points[12]._y}
               ${points[13]._x},${points[13]._y}
               ${points[14]._x},${points[14]._y}
               ${points[15]._x},${points[15]._y}
               ${points[24]._x},${rightEye.r.y+20}
             
             C ${points[24]._x},${rightEye.r.y+20}
               ${rightEye.l.x},${rightEye.l.y+10}
               ${rightEye.l.x},${rightEye.l.y}
               
             C ${rightEye.l.x},${rightEye.l.y-3}
               ${points[42]._x},${points[42]._y+3}
               ${points[42]._x},${points[42]._y}
               
             C ${points[42]._x},${points[42]._y+10}
               ${rightEye.center.x-10},${rightEye.center.y}
               ${rightEye.center.x},${rightEye.center.y}
                 
             C ${rightEye.center.x+10},${rightEye.center.y}
               ${rightEye.r.x},${rightEye.r.y+5}
               ${rightEye.r.x},${rightEye.r.y}
               
             C ${rightEye.r.x},${rightEye.r.y-5}
               ${points[44]._x+10},${points[44]._y}
               ${points[44]._x},${points[44]._y}
               
             C ${points[44]._x},${points[44]._y-3}
               ${points[43]._x},${points[43]._y-3}
               ${points[43]._x},${points[43]._y}
               
             C ${points[43]._x-5},${points[43]._y+rightEye.radius}
               ${rightEye.center.x-rightEye.radius},${rightEye.center.y}
               ${rightEye.center.x},${rightEye.center.y}
               
             C ${rightEye.center.x + rightEye.radius},${rightEye.center.y} 
               ${points[44]._x+5},${points[44]._y+rightEye.radius}
               ${points[44]._x},${points[44]._y}
             
             C ${points[44]._x},${points[44]._y-3}
               ${points[43]._x},${points[43]._y-3}
               ${points[43]._x},${points[43]._y}
               
             C ${points[43]._x-5},${points[43]._y}
               ${rightEye.l.x},${rightEye.l.y-5}
               ${rightEye.l.x},${rightEye.l.y}
                    
             L ${rightEye.l.x},${rightEye.l.y-5}  
                
             C ${rightEye.l.x},${rightEye.l.y-10}  
               ${points[43]._x-5},${points[43]._y-5} 
               ${points[43]._x},${points[43]._y-5} 
             
             C ${points[43]._x+10},${points[43]._y-10} 
               ${rightEye.r.x},${rightEye.r.y-15}
               ${rightEye.r.x+10},${rightEye.r.y-5}    
             
             C ${rightEye.r.x+15},${rightEye.r.y-10}
               ${points[26]._x+10},${points[26]._y+20}
               ${points[26]._x},${points[26]._y+15}
                
             L ${points[25]._x},${points[25]._y+15}
             C ${points[25]._x},${points[25]._y+10}
               ${rightEye.l.x},${points[22]._y+10}
               ${rightEye.l.x},${points[22]._y+15}
               
              C ${rightEye.l.x-5},${points[22]._y+15}
                ${rightEye.l.x-5},${points[22]._y}
                ${rightEye.l.x},${points[22]._y}
                
              C ${rightEye.l.x},${points[22]._y}
                ${points[25]._x-10},${points[25]._y-10}
                ${points[25]._x+5},${points[25]._y}
                
              L ${points[26]._x+5},${points[26]._y} 
              
              C ${points[26]._x+25},${points[26]._y-10} 
               ${points[26]._x+20}, ${points[26]._y-90}
               ${points[26]._x}, ${points[26]._y-100}
           " 
            />
    </svg>`
}

