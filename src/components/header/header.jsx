
import './header.scss';
import logo from '../../assets/logo.svg';
import Nav from '../accueil/nav/nav';

function Header(){
    return (
        <header id='header'>
                    <img src={logo} className="App-logo" alt="logo" />
                    <Nav />
        </header>
    );
}

export default Header;