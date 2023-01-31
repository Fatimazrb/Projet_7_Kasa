import "./banner.scss";
import banner from "../../../assets/about.png";
import background from "../../../assets/background.svg";



function Banner (){

    return (
        <div  className="group_banner">
            <img src={banner} alt = "banner"  className="banner"/>
            <img src={background} alt = "background"  className="background"/>
        </div>
    )
}

export default Banner;