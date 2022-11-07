import React from "react";
import requests from "../axios/Request";
import Banner from "./Banner";
import "./homeScreen.css";
import Nav from "./Nav";
import Row from "./Row";

export default function HomeScreen() {
  return (
    <>
      <div className="homeScreen">
        <Nav />

        <Banner />

        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />

        <Row title="Trending Now" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Commedy Movies" fetchUrl={requests.fetchCommedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />

        {/* <Row/> */}
      </div>
    </>
  );
}
