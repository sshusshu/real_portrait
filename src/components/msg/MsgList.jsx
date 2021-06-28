import MsgItem from "./MsgItem"
import MsgInput from "./MsgInput"
import { useState } from "react"

const originalMsgs = Array(20).fill(0).map((_,i)=>({
    id: 20 - i,
    userName: 'sshu',
    time: 1234567890123 + (20 - i) * 1000 * 60,
    text: `${20 - i} mock text`,
}))

const MsgList = () =>{
    const [msgs,setMsgs] = useState(originalMsgs);

    const onCreate = txt =>{
        const newMsgs = {
            id:msgs.length+1,
            userName:'new',
            time: Date.now(),
            text : txt
        }
        setMsgs(msgs=>[newMsgs,...msgs])
    }

    const onUpdate = (txt,id) => {
        setMsgs(msgs=>{
            const newMsgs = [...msgs]
            const idx = msgs.findIndex(msg=>msg.id===id);
            newMsgs.splice(idx,1,{
                ...msgs[idx],
                text:txt
            }) 
            return newMsgs
        })

    }

    const onDelete = id => () =>{
        console.log('delete',id)
        setMsgs(msgs=>{
            const newMsgs = [...msgs]
            const idx = msgs.findIndex(msg=>msg.id===id);
            newMsgs.splice(idx,1);
            return newMsgs
        })
    }


    return(
        <>
            <MsgInput mutate={onCreate}/>
            <ul>
                {msgs.map(msg=>(
                    <MsgItem 
                    key={msg.id}
                    {...msg}
                    onUpdate={onUpdate}
                    onDelete={onDelete(msg.id)}
                    />
                ))}
            </ul>
        </>
    )
}
export default MsgList;