import "../about/about.scss";
import AboutBanner from "./banner/banner";
// import aboutArray from "./data_about.json"; // j'ai créé un fichier JSON avec les données des collapses
// import Collapse from "../collapse/collapse";

function About (){

    return (
        
			<div>
				<AboutBanner />
			{/* {aboutArray.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))} */}
			</div>
		  
    )

}

export default About