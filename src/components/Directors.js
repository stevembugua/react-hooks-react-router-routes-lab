import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
  <h1>Directors Page</h1>
  {
    directors.map((director,index) => {
      let { name, movies } = director
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

export default Directors;