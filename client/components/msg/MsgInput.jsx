import { useRef } from "react";

export default function MsgInput({mutate,id=undefined,text='',doneEdit}){
    const txtRef = useRef(null);
    const idRef = useRef(null);

    const onSubmit = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        const newUserId = idRef.current.value;
        const newText = txtRef.current.value;
        mutate(newText,newUserId,id)
        txtRef.current.value = '';
        if(doneEdit) doneEdit();
    }
    return(
        <>
        <form onSubmit={onSubmit}>
            <input type="text" ref={idRef} placeholder="닉네임" />
            <textarea ref={txtRef} defaultValue={text} placeholder="내용을 입력하세요." />
            <button type="submit">완료</button>
        </form>
        </>
    )
};