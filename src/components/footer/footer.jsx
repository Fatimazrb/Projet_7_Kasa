import '../footer/footer.scss';
import logo from "../../assets/LOGOfooter.png";

function Footer () {

    return (
        <footer className="footer">
                <img src={logo} alt="logo agence Kasa"  className="footer_img"/>
                <p className="footer_description">© 2020 Kasa. All rights reserved</p>
        </footer>
    )

}

export default Footer;
