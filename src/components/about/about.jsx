import "../about/about.scss";
import AboutBanner from "./banner/banner";
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
      case "sécurity":
        return aboutData.security;
      default:
        console.log("default");
        break;
    }
  };

  return (
    <main>
      <section>
        <AboutBanner/>
        <div className="about">
          <Collapse className="about__dropdowns" title="Fiabilité" content={content("fiability")} />
          <Collapse className="about__dropdowns" title="Respect" content={content("respect")} />
          <Collapse className="about__dropdowns" title="Service" content={content("service")} />
          <Collapse className="about__dropdowns" title="Sécurité" content={content("security")} />
        </div>
      </section>
    </main>
  );

}

export default About