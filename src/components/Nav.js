import { Link } from "react-router-dom"
import "./Nav.css"

let Nav=()=>{
    return(
        <nav className="navbar">
            <h1><i class="fa-solid fa-record-vinyl"></i>Dashboard</h1>
            <div className="navbarsub">
            <Link style={{"color":"white"}} to="/"><i class="fa-solid fa-diamond"></i>Dashboard<span><i class="fa-solid fa-greater-than"></i></span></Link>
            <Link style={{"color":"white"}} to="/products"><i class="fa-brands fa-product-hunt"></i>Products<span><i class="fa-solid fa-greater-than"></i></span></Link>
            <Link style={{"color":"white"}} to="/customers"><i class="fa-solid fa-user"></i>Customers<span><i class="fa-solid fa-greater-than"></i></span></Link>
            <Link style={{"color":"white"}} to="/income"><i class="fa-solid fa-money-bill"></i>Income<span><i class="fa-solid fa-greater-than"></i></span></Link>
            <Link style={{"color":"white"}} to="/promote"><i class="fa-solid fa-percent"></i>Promote<span><i class="fa-solid fa-greater-than"></i></span></Link>
            <Link style={{"color":"white"}} to="/help"><i class="fa-solid fa-circle-question"></i>Help<span><i class="fa-solid fa-greater-than"></i></span></Link>
            </div>
        </nav>
    )
}
export default Nav