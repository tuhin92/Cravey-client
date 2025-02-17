import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const HelmetWrapper = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title; // Manually update the title instantly
  }, [location, title]); // Runs on route change

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default HelmetWrapper;
