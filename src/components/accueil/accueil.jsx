import './accueil.scss';
import Banner from './banner/banner';
import Card from "./card/card";
import { Link } from "react-router-dom";
import house from '../data.json';

function Accueil () {

  return (
    <section>
      <div>
        < Banner />
      </div>
        <div className="home__house">
          {house.map((data) => {
            return (
              <article key={data.id}>
                <Link to={`/house/${data.id}`}>
                <Card image={data.cover} title={data.title} />
                </Link>
              </article>
            );
          })}
        </div>
    </section>
	);
   
}

export default Accueil;

