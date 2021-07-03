
import { useState } from "react"
import MsgInput from "./MsgInput"

export default function MsgItem({id,userId,timestamp,text,onUpdate,onDelete,myId}){
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
                    <h3>{userId}<sub>{timestamp}</sub></h3>
                    {isEditing?
                        <MsgInput mutate={onUpdate} id={id} text={text} isUserId={false} doneEdit={doneEdit} myId={myId}/>:        
                        <p>{text}</p>
                    }       
                    {myId === userId && (
                        <div className="msg-btn">
                            <button onClick={onReadyEdit}>수정</button>
                            <button onClick={onDelete}>삭제</button>
                        </div>
                    )}      
                </div>  
            </li>
        </>
    )
};