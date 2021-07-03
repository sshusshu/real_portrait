// import { Link } from "react-router-dom";

// import {useRouter} from 'next/router';
import Link from 'next/link';

export default function Header(){    
   //const router = useRouter();
    return(
        <>
        <header>
            <h1><a href="/">logo</a></h1>
            <nav>
                <ul>
                    <li><Link href="/">드로잉</Link></li>
                    <li><Link href="/msg">방명록</Link></li>
                    {/* <li><a onClick={()=> router.push('/')}>드로잉</a></li>
                    <li><a onClick={()=> router.push('/msg')}>방명록</a></li> */}
                </ul>
            </nav>
        </header>
        </>
    )
};