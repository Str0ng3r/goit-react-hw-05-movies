import {Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Header = () => {
    return (
        <main>
        <header style={{position:"fixed",top:0,left:0,backgroundColor:'#212121',width:'100%',display:'flex',alignItems:'center',justifyContent:'center',padding:'30px'}}>
<nav>
    <Link style={{marginRight:'10px',color:'#fffff'}} to='/'>Home</Link>
    <Link style={{marginLeft:'10px',color:'#fffff'}} to='/movies'>Movies</Link>
</nav>
        </header>
        <Outlet></Outlet>
       </main>
    )
}