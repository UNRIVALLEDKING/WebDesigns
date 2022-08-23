import React from "react";
import TechCarousel from "../Components/Carousels/TechCarousel/TechCarousel";
import "./Technologies.css";

export default function Technologies() {
  return (
    <>
      <hr
        id="ourTools"
        style={{ border: "1px solid white" }}
        className="my-0"
      />

      <div className="text-white">
        <h5
          data-aos="zoom-in-right"
          className="my-5 py-3 text-white text-center heading"
        >
          Technologies and Frameworks
        </h5>
        <p data-aos="zoom-in-right" className="top_Tech_para my-5">
          {/* CodeStack Labs has a wide range of services aimed at meeting
          objectives, we seek to deliver integrated, practical, flexible and
          efficient solutions */}
          We at CodeStack Labs use latest and best Technologies and Frameworks
          to meet objectives, we seek to deliver integrated, practical,
          flexible, efficient and best solutions.
        </p>
      </div>
      <TechCarousel />
    </>
  );
}
