import { useEffect } from "react"
export default function KakaoBtn(){

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true
        document.body.appendChild(script)
        console.log('button')
        return () => {
          document.body.removeChild(script)
        }
      }, [])

      const createKakaoBtn = () => {
        // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
        if (window.Kakao) {
          const kakao = window.Kakao;
          console.log('kakao')
          // 중복 initialization 방지
          if (!kakao.isInitialized()) {
            // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
            kakao.init('dc20f88c36ab578d5c8041679df9e9da')
          }
          kakao.Link.createDefaultButton({
            // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
              title: 'Sshu\'s drawing',
              description: '#더드로잉 #Sshu #라인드로잉',
              imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + '/logo.png'
              link: {
                mobileWebUrl: '/',
                webUrl: '/',
              },
            },
            social: {
              likeCount:  123,
              commentCount: 33,
              sharedCount: 78,
            },
            buttons: [
              {
                title: '웹으로 보기',
                link: {
               mobileWebUrl: '/',
                webUrl: '/',
                },
              },
              {
                title: '앱으로 보기',
                link: {
                    mobileWebUrl: '/',
                     webUrl: '/',
                },
              },
            ],
          })
        }
      }

    return(
        <>
            <button id="kakao-link-btn" onClick={createKakaoBtn}>
                카카오톡
                {/* <img src="/icons/kakao.png" alt="kakao-share-icon" />  */}
            </button>
        </>
    )
};