import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Home/Banner";
import BestDeliveredCategory from "../components/Home/BestDeliveredCategory";
import DeliveryBanner from "../components/Home/DeliveryBanner";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Cravey | Home</title>
      </Helmet>
      <Banner/>
      <BestDeliveredCategory/>
      <DeliveryBanner/>
    </div>
  );
};

export default Home;
