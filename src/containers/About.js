import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="">
      <Header />
      <div className="container col-md-5">
        <h3>Hi!</h3>
        <p className="title text-justify mt-4 mb-4">Welcome</p>
        <h4 className="text-success"> From Healthy Cafe</h4>
      </div>
      <Footer company="Ponchai" email="pang@gmail.com" />
    </div>
  );
};

export default About;
