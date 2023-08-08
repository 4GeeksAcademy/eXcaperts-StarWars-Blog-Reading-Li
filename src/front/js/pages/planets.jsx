import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";

export const PlanetPage = () => {
  const { planet_id } = useParams();
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${planet_id}`)
      //   fetch(`https://swapi.dev/api/people/6`)
      .then((resp) => resp.json())
      .then((data) => setPlanet(data));
  }, []);

  return (
    <div className="mt-3 d-flex justify-content-center">
      <Card width="25rem">
        <h1 className="card-title text-center text-warning-emphasis">
          {" "}
          {planet.name}
        </h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item border-0">
            Diameter: {planet.diameter}
          </li>
          <li className="list-group-item border-0">
            Population: {planet.population}
          </li>
          <li className="list-group-item">Climate: {planet.climate}</li>
          <span className="text-uppercase fs-4 text text-center text-info-emphasis mt-3">
            Extra Details
          </span>
          <li className="list-group-item border-0">
            Rotation Period: {planet.roation_period}
            <br />
            Orbital Period: {planet.oribital_period}
            <br />
            Gravity: {planet.gravity} <br />
            Terrain: {planet.terrain} <br />
            Surface Water: {planet.surface_water} <br />
          </li>
        </ul>
      </Card>
    </div>
  );
};
