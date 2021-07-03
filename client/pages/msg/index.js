import MsgList from "../../components/msg/MsgList";
import Header from "../../components/Header";

export default function MsgBox(){

    return(
        <>
        <Header />
        <div className="msg-wrap">
            <MsgList />
        </div>
        </>
    )
};


