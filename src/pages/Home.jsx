import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Home/Banner";
import BestDeliveredCategory from "../components/Home/BestDeliveredCategory";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Cravey | Home</title>
      </Helmet>
      <Banner/>
      <BestDeliveredCategory/>
    </div>
  );
};

export default Home;
