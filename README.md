# Line portrait 

### face API를 사용하여 인물사진 업로드 시 얼굴의 주요 포인트 좌표를 얻어 svg 라인 드로잉으로 표현

* face api 정보 활용
* 라인 드로잉 구현
* 다운로드 및 sns 공유 구현  
* 방명록 기능 구현

_Keyword : React JS / SVG / NEXT JS / EXPRESS / WEBPACK_
   
<img src="https://img.shields.io/badge/-html5-E34F26?style=flat&logo=html5&logoColor=00c8ff"> <img src="https://img.shields.io/badge/-Sass-cc6699?style=flat&logo=sass&logoColor=ffffff"> <img src="https://img.shields.io/badge/-JavaScript-eed718?style=flat&logo=javascript&logoColor=ffffff"> <img src="https://img.shields.io/badge/-React-000000?style=flat&logo=react&logoColor=00c8ff">  

> 라인 드로잉을 그려주는 어플을 만들어 보고 싶어 기획, 디자인, 개발
> 
> face API 자바스크립트 버전을 사용   
> 
> 리액트 학습을 위해 리액트로 제작
>
> 서버 통신 학습을 위해 EXPRESS 사용

---

## 🔳 코드구성  

### ✔️ 사진 업로드 시 FACE API를 통해 얼굴 좌표를 얻어 SVG로 그려줌 이 외에 다운로드, SNS 공유, 방명록 구현

####  드로잉:  
- Drawing 컴포넌트 내에 drawing box 내에 svg를 생성하는 방식

####  방명록:  
- MsgBox 컴포넌트 내에 MsgInput 과 MsgList 로 구성

####  다운로드, sns 공유:  
- BtnBox 컴포넌트 내에 다운로드, 공유 button으로 조작하는 방식  
    
### ✔️ 주요 이벤트

1. 사진 업로드 : 업로드 한 사진을 적당한 크기로 크롭 후 face API를 이용하여 좌표를 찾고 SVG로 드로잉 
2. 방명록 작성 : 방명록 읽기, 작성, 수정, 삭제를 통해 CRUD 구현 
3. 다운로드, 공유 : 드로잉을 다운로드 하고 sns에 공유


### ✔️ 이벤트 후 과정:

- 사진 업로드 후 드로잉
  - 업로드 한 사진을 적당한 크기로 크롭 후 face API를 이용하여 좌표를 찾고 SVG로 드로잉 
      1. onUpload (사진 업로드) : input file로 업로드 한 사진을 저장
      2. resizedImg (얼굴이 있으면 이미지 리사이징) : 얼굴 좌표 최소x,y 와 최대 x,y를 기준으로 크롭 후 캔버스에 그려줌(drawingCvs)
         setIsNothing (얼굴이 없으면 다시 업로드 문구)
      3. landmarks (얼굴 주요부위 좌표 찾기) : face API로 얼굴 좌표 검색
      4. customPoints (이마와 헤어라인 좌표 찾기) : 픽셀 칼라값의 차이 순으로 좌표 검색
      5. drawingFace (svg로 얼굴 그리기) : 검색한 좌표를 기준으로 SVG data 조작 후 업로드
      
    
- 방명록
  - 방명록 읽기, 작성, 수정, 삭제를 통해 CRUD 구현 
     - express를 이용한 간단한 JSON DB 구축
     - REST API로 데이터 통신
  
- 다운로드 및 SNS 공유
   - 다운로드 
      - saveDrawing (드로잉 다운로드) : 다운로드 버튼을 누르면 svgData를 Blob 형태로 가공 후 URL을 만들고 다운로드
   - SNS 공유
      - onShareCreate (드로잉을 담은 url 생성) 후 각 SNS별 공유 주소에 해당 URL 전달 


---


## 🔳 주요 이슈 사항

1. 업로드 한 사진에서 좌표 검색 시
  - 문제 사항
    - 업로드하는 사진의 크기, 그 안의 얼굴 크기가 모두 달라서 일정한 드로잉을 표현하기가 어려움
  - 문제 해결 방법
    - 이미지 크기 통일 필요 
    - 사진 안의 얼굴을 크롭하여 다시 캔버스에 동일한 크기로 그려준 후 진행 	 
      
2. 이마와 머리 좌표 검색 시
  - 문제 사항 
    - face api는 이마와 머리 좌표를 제공하지 않음
  - 문제 해결 방법
    - 이마좌표 찾기 집적 구현  
      캔버스 이미지 이차원 배열에서 픽셀별 검색  
      눈썹과 관자놀이 코등의 좌표 x, y값을 받아 위로 y좌표들만을 검색하여 불필요한 검색 최소화  
      아래 픽셀 칼라값과 가장 많은 차이가 나는 포인트를 좌표로 customPoints에 객체형태로 저장  

    - 헤어 좌표 찾기 직접 구현(이마좌표와 비슷한 방법으로 구현)  
      머신러닝 기법이 아니기 때문에 사진마다 편차가 존재하고 가끔 오류가 발생
      => 앞으로 차근히 고쳐나갈 계획

3. 얼굴 크기 통일 시 
  - 문제 사항
      - 크롭 소요 시간이 김 
      - 최소 xy, 최대 xy 구할 때, map과 math.min, math.max로 6번 반복문 사용
  - 문제 해결 방법
     - array[idx]로 바로 접근 방법으로 수정 
 
  
---

## 🔳 프로젝트를 통해 배운점

> - 리액트에 대한 이해
> - 서버 통신
> - 비동기 프로그래밍
> - 외부 API 사용법

---

## 🔳 서버 통신
JSON DB 구축  
Node JS 기반의 express 라이브러리를 사용  
간단한 REST API를 직접 구현

````js


const messagesRoute = [{
 // CREATE MESSAGE
    method: 'post',
    route: '/messages',
    handler: ({ body }, res) => {
      const msgs = getMsgs()
      const newMsg = {
        text: body.text,
        userId: body.userId,
        timestamp: Date.now(),
      }
      msgs.unshift(newMsg)
      setMsgs(msgs)
      res.send(newMsg)
    },
}]
````

````js
import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
)


//app[messagesRoute[0].method](messageRoute[0].route,messageRoute[0].handler)

const routes = [...messagesRoute, ...usersRoute, ...drawingsRoute]
routes.forEach(({ method, route, handler }) => {
   app[method](route, handler);
})


app.listen(8000, () => {
  console.log('server listening on 8000...')
})

````



## 🔳 비동기 프로그래밍
async, await, promise를 활용하여 비동기 프로그래밍 구현  
  
    
    
* face API에서 필요한 2개를 promise.all로 가져온 후 시작
````js
 const loadModels = async()=>{
   const MODEL_URL = './models';
   Promise.all([
     faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
     faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
   ])
 }
````
    
    
* face API에서 얼굴을 좌표를 찾은 후 points 정의
````js
 async function landmarks(faceapi){
     detecting = await faceapi
         .detectSingleFace(canvas.current)
         .withFaceLandmarks()
     points = detecting.landmarks.positions;
 }
````
  
  
* 이미지를 받고 하나의 얼굴에 좌표를 검색 후 리사이징
````js
 async function resizedImg(faceapi,file){
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

````

* 비동기 함수와 동기 함수를 차례대로 실행
````js
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
````



---

## Getting Started

1.  Clone the repo:

        git clone https://github.com/sshusshu/real_portrait.git

2.  Install dependencies:

        npm install
