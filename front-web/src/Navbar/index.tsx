import './style.css';
import { ReactComponent as Logo } from './delivery.svg'
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <nav className="main-navbar">
        <Logo />
        <Link to="/" href="home" className="logo-text">DS Deliver</Link>
        </nav>
    )
}

export default Navbar;