
export default function FacebookBtn({url}){

    const createFbBtn = () => {
        //  window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent('https://naver.com/'))
         window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent('https://sshusshu.github.io/pre-portfolio/'))
    }

    return(
        <>
         <button id="facebook-link-btn" onClick={createFbBtn}>
              <img src="/img/facebook2.svg" alt="facebook"/>
         </button>
        </>
    )
};
