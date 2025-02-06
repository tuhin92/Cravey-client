import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Home/Banner";
import BestDeliveredCategory from "../components/Home/BestDeliveredCategory";
import DeliveryBanner from "../components/Home/DeliveryBanner";
import Serve from "../components/Home/Serve";
import DiscountBanner from "../components/Home/DiscountBanner";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <Helmet>
        <title>Cravey | Home</title>
      </Helmet>
      <Banner/>
      <BestDeliveredCategory/>
      <DeliveryBanner/>
      <Serve/>
      <DiscountBanner/>
    </div>
  );
};

export default Home;
