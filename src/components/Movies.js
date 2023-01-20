import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {
      movies.map((movie,index) => {
        let { title, time ,genres } = movie
        return (
          <div key={index}>
            <h3>Name: {title}</h3>
            <p>Time: {time}</p>
            <ul>
              {genres.map((genre,index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        )
      })
    }</div>;
}

export default Movies;