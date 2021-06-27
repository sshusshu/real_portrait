export default function saveDrawing(saveCvs,svg,mw,mh) {
    
    let saveUrl; 
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.style.fill = 'none';
    svg.style.stroke = '#000';
    const svgData = svg.outerHTML;
    const preface = '<?xml version="1.0" standalone="no"?>\r\n';
    const svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
    let URL = window.URL || window.webkitURL || window;
    let blobURL = URL.createObjectURL(svgBlob);

        let img= new Image();
        console.log('img',img)
        img.src = blobURL;   

       return img.onload = function(){
            saveCvs.current = document.createElement('canvas');
           
            let context2 = saveCvs.current.getContext('2d');
            saveCvs.current.width = mw;
            saveCvs.current.height = mh;

            console.log('onload')
            //console.log(saveCvs,context2)

            context2.drawImage(img, 0, 0, mw, mh);
            saveUrl = saveCvs.current.toDataURL('image/jpg');
            console.log('saveurl',saveUrl)
            return saveUrl
            // setSaveUrl(saveCvs.current.toDataURL('image/jpg'))
        }
}
