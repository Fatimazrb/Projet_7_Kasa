import "../about/about.scss";
import Header from "../header/header";
import Banner from "./banner/banner";
import Footer from "../footer/footer";

function About (){

    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <Banner />
            </main>
                <Footer />
        </div>
        
    )

}

export default About