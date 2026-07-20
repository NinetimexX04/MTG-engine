import logo from '../assets/logo.svg'

function Header() {
    return (
        <header>
            <div id='logo'>
                <img src={logo}/>
            </div>
            <nav>
                <ul>
                    <li><a src='#Home'></a></li>

                </ul>
            </nav>
        </header>
    );
}

export default Header;
