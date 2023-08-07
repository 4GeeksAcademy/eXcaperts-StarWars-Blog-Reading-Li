import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";

export const CharacterPage = () => {
  const { character_id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${character_id}`)
      //   fetch(`https://swapi.dev/api/people/6`)
      .then((resp) => resp.json())
      .then((data) => setCharacter(data));
  }, []);

  return (
    <div className="mt-3 d-flex justify-content-center">
      <Card width="25rem">
        <h1 className="card-title text-center text-warning-emphasis">
          {" "}
          {character.name}
        </h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item border-0">
            Gender: {character.gender}
          </li>
          <li className="list-group-item border-0">
            Hair Color: {character.hair_color}
          </li>
          <li className="list-group-item">Eye Color: {character.eye_color}</li>
          <span className="text-uppercase fs-4 text text-center text-info-emphasis mt-3">
            Extra Details
          </span>
          <li className="list-group-item border-0">
            Birth Year: {character.birth_year}
            <br />
            Skin Color: {character.skin_color}
            <br />
            Height: {character.height} <br />
            Mass: {character.mass} <br />
          </li>
        </ul>
      </Card>
    </div>
  );
};
