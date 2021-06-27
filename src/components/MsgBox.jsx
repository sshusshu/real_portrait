import MsgInput from "./msg/MsgInput";
import MsgList from "./msg/MsgList";

export default function MsgBox(){
    return(
        <>
        <div className="msg-wrap">
            <MsgInput />
            <MsgList />
        </div>
        </>
    )
};