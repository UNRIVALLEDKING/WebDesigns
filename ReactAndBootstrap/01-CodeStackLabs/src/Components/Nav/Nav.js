import React, { useEffect, useState } from "react";
import {
  AiFillFacebook,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { mail, phone } from "../../Constants/Constants";
import "./Nav.css";

export default function Nav() {
  const [scroll, setScroll] = useState(false);
  const [stripScroll, setStripScroll] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setStripScroll(window.scrollY > 50);
    });
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  // console.log("scroll", scroll);
  // console.log("Stripscroll", stripScroll);
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          zIndex: "99",
          width: "100%",
          backgroundColor: `${scroll ? "rgba(0,0,0,0.6)" : "transparent"}`,
          backdropFilter: `${scroll ? "blur(5px)" : "none"}`,
          transition: "ease .8s",
        }}
      >
        <div
          className="container-fluid strip"
          style={{
            display: `${stripScroll ? "none" : "block"}`,
            transition: "ease .8s",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="d-flex justify-content-between">
                  <div className="pt-2 pb-2">
                    <a
                      className="px-1 font-weight-light icon"
                      href="https://www.facebook.com/codestacklabs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillFacebook />
                    </a>
                    <a
                      className="px-1 font-weight-light icon"
                      href="https://www.linkedin.com/in/codestack-labs-121a251a9/"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      className="px-1 font-weight-bold icon"
                      href="https://www.instagram.com/codestack.labs/"
                    >
                      <AiFillInstagram />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 text-right d-none d-lg-block">
                <div className="d-flex justify-content-end pt-2 pb-2 align-items-baseline">
                  <a
                    className="font-weight-light align-items-baseline icon nav_text"
                    href={mail}
                  >
                    <AiOutlineMail />
                    <span
                      className="ps-2"
                      style={{ fontSize: "16px", fontWeight: "200" }}
                    >
                      mail us
                    </span>
                  </a>
                  <a
                    className="font-weight-light align-items-baseline nav_text icon mx-2"
                    href={phone}
                  >
                    <BiPhoneCall />
                    <span
                      className="ps-2"
                      style={{ fontSize: "16px", fontWeight: "200" }}
                    >
                      Call us
                    </span>
                  </a>

                  <a
                    style={{ fontSize: "16px", fontWeight: "200" }}
                    className="d-inline-block mx-2 px-3 py-2 align-items-baseline rounded-pill nav_text caro_Btn"
                    href="/"
                  >
                    Offers
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ border: "1px solid white" }} className="my-0" />
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="nav_text navbar-brand text-white" href="/">
              <img
                className="img-fluid"
                style={{ width: "70px" }}
                src="Images/CodeStackLabs.png"
                alt=""
              />
              CodeStack Labs
            </a>

            <div className="menu">
              <div
                onClick={() => setToggle(!toggle)}
                className={
                  toggle
                    ? "navbar-toggler hamberger-menu open pe-4"
                    : "navbar-toggler hamberger-menu close"
                }
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              ></div>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 ps-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav_text nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav_text nav-link" href="#ourServices">
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav_text nav-link" href="#projects">
                    Our Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav_text nav-link" href="#AboutUs">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
