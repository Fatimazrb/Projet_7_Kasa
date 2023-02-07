import './house.scss';
import { useParams } from "react-router-dom";
import houses from "../data.json";

import Rating from "./rating/rating";
import Host from "./host/host";
import Slider from "./slider/slider";
import Tags from "./tags/tags";
import Collapse from "../collapse/collapse";

function House (){

    const { houseId } = useParams();
    const house = houses.find((house) => house.id === houseId);
    const { title, location, rating, host, equipments, description, pictures } =
    house;
    return (
        <main>
            <Slider slides={pictures} />
      <div className="singlehouse">
        <div className="singlehouse__informations">
          <h1 className="singlehouse__title">{title}</h1>
          <p className="singlehouse__location">{location}</p>
          <div className="singlehouse__tags">
            {house.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="singlehouse__rating-and-host">
          <Rating rating={rating} />
          <Host host={host} />
        </div>
      </div>
      <div className="singlehouse__dropdowns">
        <Collapse title="Description" content={description} />
        <Collapse title="Equipements" content={equipments} />
      </div>
        </main>
    )
}

export default House;