import React from "react";
import Hero from "./Hero";
import Selection from "./Selection";
import Popular from "./Popular";
import HotBid from "../../components/HotBid";
import Collections from "./Collections";
import Discover from "./Discover";
import Description from "./Description";

const Home = () => {
  return (
    <>
      <Hero />
      <Description />
      <Selection />
      <Collections />
      <HotBid classSection="section" />
      <Popular />
      <Discover />
    </>
  );
};

export default Home;
