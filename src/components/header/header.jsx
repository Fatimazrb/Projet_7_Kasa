import './header.scss';
import logo from '../../assets/logo.svg';

import { Link } from 'react-router-dom';


function Header(){
    return (
    <div id='header'>
                <img src={logo} className="App-logo" alt="logo" />
        <nav className='nav'>
            <Link to="/" className ='nav_link-home'>Accueil</Link>
            <Link  to="/About" className='nav_link-about'>A propos</Link>
        </nav>  
    </div>
    );
}

export default Header;