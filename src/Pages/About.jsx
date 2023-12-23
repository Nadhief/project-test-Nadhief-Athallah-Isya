import React from "react";
import Layoutpage from "../Layout/Layoutpage";
import Banner from "../component/Banner";

const About = () => {
  return (
    <Layoutpage>
      <div className="pt-20">
        <div className="pb-6">
          <Banner
          Title="About"></Banner>
        </div>
      </div>
    </Layoutpage>
  );
};

export default About;
