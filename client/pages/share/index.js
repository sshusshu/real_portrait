import { useState } from "react";
import fetcher from "../../fetcher";


export default function ShareBox(){
  let [url,setUrl] = useState('');
  (async() => {
    const newDrw = await fetcher('get','/share')  ;
    setUrl(newDrw[0].dataUri)
  })()
  return(
      <>
      <div className="share-box">
        <img src={url} alt='drawing'></img>
      </div>
      {/* {console.log('sharebox',url)} */}
      </>
  )
};