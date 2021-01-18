import React from "react";
import "./App.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import request from "./request";
import Row from "./Row";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Original"
        fetchURL={request.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Trending" fetchURL={request.fetchTrending} />
      <Row title="Top Rated" fetchURL={request.fetchTopRated} />
      <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={request.fetchHorrowMovies} />
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={request.fetchDocumentaries} />
    </div>
  );
};

export default App;
