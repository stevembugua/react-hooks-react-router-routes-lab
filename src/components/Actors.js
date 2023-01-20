import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
  <h1>Actors Page</h1>
  {
    actors.map((actor,index) => {
      let { name, movies } = actor
      return (
        <div key={index}>
          <h3>Name: {name}</h3>
          <p>Movies:</p>
          <ul>
            {movies.map((movie,index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      )
    })
  }</div>;
}
export default Actors;