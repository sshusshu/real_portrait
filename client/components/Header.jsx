// import { Link } from "react-router-dom";

// import {useRouter} from 'next/router';
import Link from 'next/link';

export default function Header(){
   //const router = useRouter();
    return(
        <>
        <header>
            <h1><Link href="/"><img src="/img/logo2.svg"></img></Link></h1>
            <nav>
                <Link href="/msg">
                <img src="img/comment_bk.svg"/>
                </Link>
            </nav>
        </header>
        </>
    )
};
