import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";

export const VehiclePage = () => {
  const { vehicle_id } = useParams();
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/vehicle/${vehicle_id}`)
      //   fetch(`https://swapi.dev/api/people/6`)
      .then((resp) => resp.json())
      .then((data) => setVehicle(data));
  }, []);

  return (
    <div className="mt-3 d-flex justify-content-center">
      <Card width="25rem">
        <h1 className="card-title text-center text-warning-emphasis">
          {" "}
          {vehicle.name}
        </h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item border-0">Model: {vehicle.model}</li>
          <li className="list-group-item border-0">
            Manufacturer: {vehicle.manufacturer}
          </li>
          <li className="list-group-item">Cost: {vehicle.cost_in_credits}</li>
          <span className="text-uppercase fs-4 text text-center text-info-emphasis mt-3">
            Extra Details
          </span>
          <li className="list-group-item border-0">
            Length: {vehicle.length}
            <br />
            Max Speed: {vehicle.max_atomosphering_speed}
            <br />
            Crew: {vehicle.crew} <br />
            Passengers: {vehicle.passengers} <br />
          </li>
        </ul>
      </Card>
    </div>
  );
};
