import React from "react";
import Banner from "./Banner";
import "./homeScreen.css";
import Nav from "./Nav";

export default function HomeScreen() {
  return (
    <>
      <div className="homeScreen">
        <Nav />

        <Banner />
        {/* <Banner/> */}

        {/* <Row/> */}
      </div>
    </>
  );
}
