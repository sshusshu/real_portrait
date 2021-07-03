import { useRouter } from "next/router";
import { useRef} from "react";

export default function IdBox(){
    const router = useRouter();
    const userRef = useRef()
    
    const onSubmit = (e) =>{
        e.preventDefault();
        const userId = userRef.current.value;
        if(userId==='') return;
        router.push(`/?userId=${userId}`)
    }

    return(
        <>
        <form onSubmit = {onSubmit}>
            <input type="text" ref={userRef} placeholder="What's your name?"/>
            <button>submit</button>
        </form>   
        </>
    )
}