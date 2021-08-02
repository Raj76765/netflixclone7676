import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        tittle="Netflix Originral"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row tittle="Trending" fetchUrl={request.fetchTrending} />
      <Row tittle="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row tittle="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row tittle="Comedy movies" fetchUrl={request.fetchComedyMovies} />
      <Row tittle="Horror movies" fetchUrl={request.fetchHorrorMovies} />
      <Row tittle="Romantic movies" fetchUrl={request.fetchRomanceMovies} />
      <Row tittle="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
