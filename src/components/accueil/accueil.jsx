import '../accueil/accueil.scss';
import Header from '../header/header';
import Banner from './banner/banner';
import Card from "./card/card";
import Footer from "../footer/footer";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Banner/>
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default App;
