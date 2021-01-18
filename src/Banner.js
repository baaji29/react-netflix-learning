import React, { useEffect, useState } from "react";
import axios from "./axios";
import request from "./request";
import "./Banner.css";

const Banner = () => {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const movie = await axios.get(request.fetchNetflixOriginals);
      setFilm(
        movie.data.results[
          Math.floor(Math.random() * movie.data.results.length - 1)
        ]
      );
      return movie;
    }
    fetchData();
  }, []);
  console.log(film);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="banner">
      <header
        className="banner_header"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${film?.poster_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">
            {film?.title || film?.name || film?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My list</button>
          </div>
          <div className="banner_description">
            <h1 className="banner_overview">{truncate(film?.overview, 150)}</h1>
          </div>
        </div>
        <div className="banner_bottom"></div>
      </header>
    </div>
  );
};
export default Banner;
