import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [currentFavoriteList, setFavoriteListItem] = React.useState([]);
  const [characters, setCharacters] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const url = "https://swapi.dev/api/people";
    const fetchData = async () => {
      const resp = await fetch(url);
      const data = await resp.json();
      setCharacters(data.results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const url = "https://swapi.dev/api/vehicles";
    const fetchData = async () => {
      const resp = await fetch(url);
      const data = await resp.json();
      setVehicles(data.results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const url = "https://swapi.dev/api/planets";
    const fetchData = async () => {
      const resp = await fetch(url);
      const data = await resp.json();
      setPlanets(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="mt-3 container-fluid">
      <h2 className="text-danger">Characters</h2>
      <div className="d-flex row flex-nowrap overflow-auto m-3">
        {characters.map((character, idx) => (
          <Card key={idx} buttonText={"pssthrough"}>
            <h5 className="card-title"> {character.name}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item border-0">
                Gender: {character.gender}
              </li>
              <li className="list-group-item border-0">
                Hair Color: {character.hair_color}
              </li>
              <li className="list-group-item border-0">
                Eye Color: {character.eye_color}
              </li>
            </ul>
            <div className="row d-flex justify-content-between p-2">
              {/* <a href="#" className="col col-auto btn btn-primary">
                Learn more!
              </a> */}
              <Link className="col col-auto" to={`/characters/${idx + 1}`}>
                <button className="btn btn-primary">Learn more!</button>
              </Link>
              <button
                href="#"
                className="col col-auto btn btn-outline-warning "
                onClick={() => {
                  actions.changeFavorite(character.name, idx + 1, "characters");
                  console.table(store.favorites);
                }}
              >
                <i class="fa-solid fa-heart"></i>
              </button>
            </div>
          </Card>
        ))}
      </div>
      <h2 className="text-danger">Vehicles</h2>
      <div className="d-flex row flex-nowrap overflow-auto m-3">
        {vehicles.map((vehicle, idx) => (
          <Card key={idx} buttonText={"pssthrough"}>
            <h5 className="card-title"> {vehicle.name}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item border-0">
                Model: {vehicle.model}
              </li>
              <li className="list-group-item border-0">
                Hair Color: {vehicle.hair_color}
              </li>
              <li className="list-group-item border-0">
                Eye Color: {vehicle.eye_color}
              </li>
            </ul>
            <div className="row d-flex justify-content-between p-2">
              {/* <a href="#" className="col col-auto btn btn-primary">
                Learn more!
              </a> */}
              <Link className="col col-auto" to={`/vehicles/${idx + 1}`}>
                <button className="btn btn-primary">Learn more!</button>
              </Link>
              <button
                href="#"
                className="col col-auto btn btn-outline-warning "
                onClick={() => {
                  actions.changeFavorite(vehicle.name, idx + 1, "vehicles");
                  console.table(store.favorites);
                }}
              >
                <i class="fa-solid fa-heart"></i>
              </button>
            </div>
          </Card>
        ))}
      </div>
      <h2 className="text-danger">Planets</h2>
      <div className="d-flex row flex-nowrap overflow-auto m-3">
        {planets.map((planet, idx) => (
          <Card key={idx} buttonText={"pssthrough"}>
            <h5 className="card-title"> {planet.name}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item border-0">
                Diameter: {planet.diameter}
              </li>
              <li className="list-group-item border-0">
                Popluation: {planet.population}
              </li>
              <li className="list-group-item border-0">
                Climate: {planet.climate}
              </li>
            </ul>
            <div className="row d-flex justify-content-between p-2">
              {/* <a href="#" className="col col-auto btn btn-primary">
                Learn more!
              </a> */}
              <Link className="col col-auto" to={`/planets/${idx + 1}`}>
                <button className="btn btn-primary">Learn more!</button>
              </Link>
              <button
                href="#"
                className="col col-auto btn btn-outline-warning "
                onClick={() => {
                  actions.changeFavorite(planet.name, idx + 1, "planets");
                  console.table(store.favorites);
                }}
              >
                <i class="fa-solid fa-heart"></i>
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
