import React from "react";
import HelmetWrapper from "../../components/HelmetWrapper";
import Banner from "../../components/Home/Banner";
import BestDeliveredCategory from "../../components/Home/BestDeliveredCategory";
import DeliveryBanner from "../../components/Home/DeliveryBanner";
import Serve from "../../components/Home/Serve";
import DiscountBanner from "../../components/Home/DiscountBanner";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <HelmetWrapper title="Cravey | Home" />
      <Banner />
      <BestDeliveredCategory />
      <DeliveryBanner />
      <Serve />
      <DiscountBanner />
    </div>
  );
};

export default Home;
