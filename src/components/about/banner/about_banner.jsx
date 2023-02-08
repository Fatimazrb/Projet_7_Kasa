import "./about_banner.scss";
import banner from "../../../assets/about.png";
import banner_small from "../../../assets/small_about.png";
import background from "../../../assets/background.svg";



function Banner (){

    return (
        <div  className="about">
            <img src={banner} alt = "banner"  className="about__banner"/>
            <img src={banner_small} alt = "banner"  className="about__banner__small"/>

            <img src={background} alt = "background"  className="about__background"/>
        </div>
    )
}

export default Banner;