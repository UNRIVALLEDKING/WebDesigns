import React from "react";
import {
  AiFillFacebook,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { mail, phone } from "../../Constants/Constants";

export default function Footer({ setModal }) {
  return (
    <div>
      <div className="container-fluid strip">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
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
              <div>
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
                </div>
              </div>
            </div>

            <div className="col">
              <p className="paragraphs text-white">
                &#169; 2022 CodeStackLabs All Rights Reserved. |{" "}
                <button
                  onClick={() => setModal((toggle) => !toggle)}
                  id="myBtn"
                  style={{
                    border: "none",
                    padding: "0",
                    letterSpacing: "0.2px",
                  }}
                  className="text-start caro_Btn paragraphs"
                >
                  Terms of Services
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
