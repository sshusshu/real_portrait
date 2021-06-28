import { useRef } from "react";

export default function MsgInput({mutate,id,text,doneEdit}){
    const txtRef = useRef(null);

    const onSubmit = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        const newText = txtRef.current.value;
        mutate(newText,id)
        txtRef.current.value = '';
        if(doneEdit) doneEdit();
    }
    return(
        <>
        <form onSubmit={onSubmit}>
            <textarea ref={txtRef} defaultValue={text} placeholder="내용을 입력하세요." />
            <button type="submit">완료</button>
        </form>
        </>
    )
};