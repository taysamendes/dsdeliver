import './style.css';
import { ReactComponent as Logo } from './delivery.svg'

function Navbar(){
    return (
        <nav className="main-navbar">
        <Logo />
        <a href="home" className="logo-text">DS Deliver</a>
        </nav>
    )
}

export default Navbar;