import KakaoBtn from "./buttons/KakaoBtn"
import NaverBtn from "./buttons/NaverBtn"
import FacebookBtn from "./buttons/FacebookBtn"
import Link from 'next/link';

export default function BtnBox({onUpload,isDone,saveUrl,fileRef}){

    return(
        <>
        <div className="btn-wrap">
            <div className= {isDone?"upload-btn hide":"upload-btn"}>
                <input className="upload-name" value="사진 업로드" disabled="disabled" />
                <label htmlFor="ex_file" className="primary" >
                    {/*<img src="img/download.svg"/>*/}
                    <span className="ico-mask arrow-up">
                        <i className="ico-1"></i>
                        <i className="ico-2"></i>
                    </span>
                </label>
                <input type="file" id="ex_file" className="upload-hidden" onChange={onUpload} ref={fileRef}/>
            </div>
            <div className= {isDone?"download-btn":"download-btn hide"}>
                <div className="down-comment">
                    <button className="download">
                        <a href={saveUrl?saveUrl:''} download="sshu's drawing.jpg">
                            Download
                            <span className="ico-mask arrow-down">
                        <i className="ico-1"></i>
                        <i className="ico-2"></i>
                    </span>
                        </a>
                    </button>
                    <button className="comment">
                        <Link href="/msg">
                        <span>
                        Review
                        <img src="img/comment2.svg"/>
                        </span>
                        </Link>
                    </button>
                </div>
                <div className="sns-share">
                    공유
                    <KakaoBtn />
                    <NaverBtn />
                    <FacebookBtn url={saveUrl}/>
                </div>
            </div>
        </div>
        </>
    )
};
