import "./banner.scss";
import banner from "../../../assets/banner.png";
import background from "../../../assets/background.svg";



function Banner (){

    return (
        <div  className="group_banner">
            <h1 className="title">Chez vous, partout et ailleurs</h1>
            <img src={banner} alt = "banner"  className="banner"/>
            <img src={background} alt = "background"  className="background"/>

        </div>
    )
}

export default Banner;