
import { useState } from "react"
import MsgInput from "./MsgInput"

export default function MsgItem({id,userName,time,text,onUpdate,onDelete}){
    const [isEditing,setIsEditing] = useState(false)
    const onReadyEdit = () => {
        setIsEditing(true)
    }
    const doneEdit = () =>{
        setIsEditing(false)
    }

    return(
        <>
            <li className="msg-item">
                <div className="msg-drawing"></div>
                <div className="msg-content">
                    <h3>{userName}<sub>{time}</sub></h3>
                    {isEditing?
                        <MsgInput mutate={onUpdate} id={id} text={text} doneEdit={doneEdit}/>:        
                        <p>{text}</p>
                    }                
                    <div className="msg-btn">
                        <button onClick={onReadyEdit}>수정</button>
                        <button onClick={onDelete}>삭제</button>
                    </div>
                </div>  
            </li>
        </>
    )
};