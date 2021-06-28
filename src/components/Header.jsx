import { Link } from "react-router-dom";


export default function Header(){
    return(
        <>
        <header>
            <h1><a href="/">logo</a></h1>
            <nav>
                <ul>
                    <li><Link to="/">드로잉</Link></li>
                    <li><Link to="/msg">방명록</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
};