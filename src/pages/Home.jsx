import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Home/Banner";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Cravey | Home</title>
      </Helmet>
      <Banner/>
    </div>
  );
};

export default Home;
