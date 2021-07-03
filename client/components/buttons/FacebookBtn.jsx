
export default function FacebookBtn({url}){


    const createFbBtn = () => {
        // window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent('https://naver.com/'))
        window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url))
        console.log('url',url)
       // window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}}`)
    }

    return(
        <>
         <button onClick={createFbBtn}>
             페이스북
             {/* <img src={facebook} alt="facebook"/> */}
         </button>
        </>
    )
};