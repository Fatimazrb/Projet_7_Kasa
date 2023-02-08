import "./banner.scss";
import banner from "../../../assets/banner.png";
import background from "../../../assets/background.svg";
function Banner (){
    return (

        <div  className="group">
            <h1 className="group_title">Chez vous,<br className="group_line"/> partout et ailleurs</h1>
            <img src={banner} alt = "banner"  className="group_banner"/>
            <img src={background} alt = "background"  className="group_background"/>
        </div>
    )
}

export default Banner;

