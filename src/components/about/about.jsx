import "./about.scss";
import AboutBanner from "./banner/about_banner";
import aboutData from "./data_about.js"; // j'ai créé un fichier avec les données des collapses
import Collapse from "../collapse/collapse";

function About (){
 // Switch to display content in the dropdown by title
 const content = (title) => {
    switch (title) {
      case "fiability":
        return aboutData.fiability;
      case "respect":
        return aboutData.respect;
      case "service":
        return aboutData.service;
      case "security":
        return aboutData.security;
      default:
        console.log("default");
        break;
    }
  };

  return (
    <main>
      <section  className="about__main">
        <AboutBanner/>
        <div className="about__dropdowns">
          <Collapse title="Fiabilité" content={content("fiability")} />
          <Collapse title="Respect" content={content("respect")} />
          <Collapse title="Service" content={content("service")} />
          <Collapse title="Sécurité" content={content("security")} />
        </div>
      </section>
    </main>
  );

}

export default About