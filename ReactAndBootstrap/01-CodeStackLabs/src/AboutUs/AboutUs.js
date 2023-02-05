import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { mail, phone } from "../Constants/Constants";
import "./AboutUs.css";

export default function AboutUs({ setModal }) {
  return (
    <>
      <hr id="AboutUs" style={{ border: "1px solid white" }} className="my-0" />
      <div className="text-center text-white">
        <h5 data-aos="zoom-in-right" className="heading my-5">
          About Us
        </h5>
      </div>
      <div className="container text-white">
        <div className="row align-items-center">
          <div data-aos="flip-left" className="col-sm-4">
            <img
              src="Images/UNRIVALLEDKING.jpeg"
              alt="UNRIVALLEDKING"
              className="img-fluid rounded"
            />
          </div>
          <div data-aos="zoom-in-right" className="col-sm-8 px-3">
            <h5 className="small_heading">UNRIVALLEDKING</h5>
            <p className="paragraph text-center">Founder</p>
            <p className="paragraph text-center">
              CodeStack Labs is a Custom Software Development, Web Applications
              Services, IT Staffing, and Technology Consulting Company.
              Optimized IT solutions supercharge your productivity and growth,
              and our IT services make it easy to take full advantage. CodeStack
              Labs provides turn-key digital marketing services, which means we
              offer everything your business needs to execute its marketing
              strategy. Explore our services now to get started!
            </p>
          </div>
        </div>

        <div className=" my-5 p-3 p-sm-5 row align-items-center">
          <div data-aos="flip-left" className="col-md-6">
            <iframe
              className="rounded"
              title="CodeStack Labs"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1738329845534!2d85.15602005092259!3d25.599139283630866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59ee933efca5%3A0x7a5fa9c649130db5!2sAiMiT%20College!5e0!3m2!1sen!2sin!4v1660037765519!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div data-aos="zoom-in-right" className="col-md-6">
            <a className="nav_text navbar-brand text-white" href="/">
              <h1>
                {"<"} CodeStack Labs {"/>"}
              </h1>
            </a>
            <p className="text-start paragraphs">
              O/42 Doctors Colony Main Road No, Near, Rajendra Nagar Over
              Bridge, opp. PNB Building, Kankarbagh, Patna, Bihar 800020
            </p>
            <a
              className="text-start caro_Btn paragraphs"
              style={{ border: "none", padding: "0", letterSpacing: "0.2px" }}
              href={phone}
            >
              <BiPhoneCall /> Get in Touch : {phone.slice(4)}
            </a>
            <br />
            <a
              className="text-start caro_Btn paragraphs"
              style={{ border: "none", padding: "0", letterSpacing: "0.2px" }}
              href={mail}
            >
              <AiOutlineMail /> Mail Us : {mail.slice(7)}
            </a>
            <br />
            <button
              onClick={() => setModal((toggle) => !toggle)}
              id="myBtn"
              style={{ border: "none", padding: "0", letterSpacing: "0.2px" }}
              className="text-start caro_Btn paragraphs"
            >
              Terms of Services
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
