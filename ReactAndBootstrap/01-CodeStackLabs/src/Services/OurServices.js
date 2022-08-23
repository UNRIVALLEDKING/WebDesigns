import React from "react";
import { phone } from "../Constants/Constants";
import "./OurServices.css";

export default function OurServices() {
  return (
    <>
      <hr
        id="ourServices"
        className="my-0 py-0"
        style={{ border: "1px solid white" }}
      />
      <div className="text-center text-white">
        <h5 data-aos="zoom-in-right" className="heading my-5">
          Our Services
        </h5>
        <div className="container">
          <div className="row align-items-center my-5">
            <div data-aos="zoom-in-up" className="col-md-6 order-1 order-md-1">
              <img
                className="img-fluid rounded"
                src="/Images/Web_Development.jpg"
                alt="Web Devlopment"
              />
            </div>
            <div data-aos="zoom-in-up" className="col-md-6 order-2 order-md-2">
              <h1 className="small_heading">Web Development</h1>
              <p className="paragraphs">
                Our website developers provide expert web application
                development and web design services to our clients. CodeStack
                Labs offers a variety of website design and development
                services, from creating mobile web development solutions and
                responsive website designs, to building custom e-commerce and
                intranet experiences using the latest and proven web
                technologies. With up to 85% of consumers visiting company's or
                service provider's website before making a purchase, more and
                more consumers make decisions based on their online experience:
                the appearance, usability and accessibility of your website is
                more important than ever, especially in an increasingly
                competitive market.
              </p>
              <a href={phone}>
                <button className="caro_Btn">Get your Website Now</button>
              </a>
            </div>
          </div>
          <div className="row align-items-center my-5">
            <div data-aos="zoom-in-up" className="col-md-6 order-2 order-md-1">
              <h1 className="small_heading">App Development</h1>
              <p style={{ fontSize: "1.2em" }} className="small_heading">
                OUR HIGH-END MOBILE APP DEVELOPMENT SERVICES
              </p>
              <p className="paragraphs">
                We offer a full cycle of application design, integration and
                management services. Whether it is a consumer oriented app or a
                transformative enterprise-class solution, the company leads the
                entire mobile app development process from ideation and concept
                to delivery, and to ongoing ongoing support.
              </p>
              <a href={phone}>
                <button className="caro_Btn">Get in Touch</button>
              </a>
            </div>
            <div data-aos="zoom-in-up" className="col-md-6 order-1 order-md-2">
              <img
                className="img-fluid rounded"
                src="/Images/App_Development.jpeg"
                alt="App Development"
              />
            </div>
          </div>
          <div className="row align-items-center my-5">
            <div data-aos="zoom-in-up" className="col-md-6 order-2 order-md-2">
              <h1 className="small_heading">Graphic Design & Analytics</h1>
              <p className="paragraphs">
                Our innovative design expresses your business ideas clearly and
                colorfully so that you can start attracting your target
                audience. Whether your business is growing or just started, we
                can help you to achieve consistent growth through our powerful
                design.
              </p>
              <p className="paragraphs">
                CodeStack Labs delivers great graphic design services that make
                you stand out from your business competitors. We provide you the
                best in terms of quality, creativity, and price.
              </p>
              <a href={phone}>
                <button className="caro_Btn">
                  Create your unique Identity in the Crowd now
                </button>
              </a>
            </div>
            <div data-aos="zoom-in-up" className="col-md-6 order-1 order-md-1">
              <img
                className="img-fluid rounded"
                src="/Images/Analytics.jpeg"
                alt="Graphics and Analytics"
              />
            </div>
          </div>

          <div className="row align-items-center my-5">
            <div data-aos="zoom-in-up" className="col-md-6 order-2 order-md-1">
              <h1 className="small_heading">Industrial Training</h1>
              <p style={{ fontSize: "1.2em" }} className="small_heading">
                GET JOB-READY FOR AN IN-DEMAND CAREER
              </p>
              <p className="paragraphs">
                Learn how to code or build your skills in programming online to
                gain a better understanding of how websites and apps are
                designed and developed. We offer various skill training like Web
                Development, App Development, Software Development, Digital
                Marketing & Many More.
              </p>
              <a href={phone}>
                <button className="caro_Btn">Start Your Journey Now</button>
              </a>
            </div>
            <div data-aos="zoom-in-up" className="col-md-6 order-1 order-md-2">
              <img
                className="img-fluid rounded"
                src="/Images/Programming.jpg"
                alt="Learn Programming"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
