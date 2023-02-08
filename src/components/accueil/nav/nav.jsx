
import { Link } from 'react-router-dom';
import "../nav/nav.scss";

function Nav () {

    return(
        <div>
            <nav className='nav'>
                <div className="nav_link">
                <Link to='/' className ='nav_link-home'>Accueil</Link>
                <Link to="/about" className='nav_link-about'>A propos</Link>
                </div>
            </nav>
        </div>
    )
};

export default Nav;