import {Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styled from './styled.module.css'
export const Header = () => {
    return (
        <main>
        <header className={styled.header}>
<nav>
    <Link className={styled.headerLink} to='/'>Home</Link>
    <Link className={styled.headerLink} to='/movies'>Movies</Link>
</nav>
        </header>
        <Outlet></Outlet>
       </main>
    )
}