import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div id='logo'>
                <img src={logo}/>
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/lobby'>Play</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
