export default function NotFound({isNothing,onReset}){
    return(
        <>
        <section className={isNothing?"alert":"alert hide"}>
            <div className="text-container">
                <p>얼굴을 못찾겠어요!</p>
                <button className="btn-other" onClick={onReset}>다른 사진 찾기</button>
            </div>
        </section>
        </>
    )
}