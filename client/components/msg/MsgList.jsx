import MsgItem from "./MsgItem"
import MsgInput from "./MsgInput"
import { useEffect, useState } from "react"
import fetcher from '../../fetcher'
import {useRouter} from 'next/router'


const MsgList = () =>{
    const router = useRouter();
    const {query:{userId=''}} = useRouter();
    const [msgs,setMsgs] = useState([]);

    const onCreate = async (text,userId) =>{
        const newMsg = await fetcher('post','/messages',{text,userId})
        router.push(`/msg?userId=${userId}`)
        if(!newMsg) return
        setMsgs(msgs=>[newMsg,...msgs])
    }

    const onUpdate = async(text,_,id) => {
        const newMsg = await fetcher('put',`/messages/${id}`,{text,userId})
        if(!newMsg) return
        setMsgs(msgs=>{
            const newMsgs = [...msgs]
            const idx = msgs.findIndex(msg=>msg.id===id);
            newMsgs.splice(idx,1, newMsg) 
            return newMsgs
        })

    }

    const onDelete = async id => {
        console.log('delete',id)  
        const receivedId = await fetcher('delete',`/messages/${id}`,{params:{userId}});
        setMsgs(msgs=>{ 
            const newMsgs = [...msgs]
            const idx = msgs.findIndex(msg=>msg.id===receivedId+'');
            newMsgs.splice(idx,1);
            return newMsgs
        })
    }

    const getMsgs = async()=>{
        const msgs = await fetcher('get','/messages');
        setMsgs(msgs)
    }

    useEffect(()=>{
       getMsgs();
    },[])

    return(
        <>
            <MsgInput mutate={onCreate}/>
            <ul>
                {msgs.map(msg=>(
                    <MsgItem 
                    key={msg.id}
                    {...msg}
                    onUpdate={onUpdate}
                    onDelete={() => onDelete(msg.id)}
                    myId = {userId}
                    />
                ))}
            </ul>
        </>
    )
}
export default MsgList;