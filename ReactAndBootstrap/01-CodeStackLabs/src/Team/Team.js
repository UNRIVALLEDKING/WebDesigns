import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import teamData from "./team.json";

export default function Team() {
  return (
    <>
      <div className="container">
        <div className="row">
          {teamData.map((item, id) => (
            <div key={id} data-aos="flip-right" className="col-md-3 my-3">
              <div className="row">
                <div className="example cards">
                  <div
                    style={{
                      background: `url(${item.img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    className="wrapper"
                  >
                    <div
                      style={{ opacity: "0.25" }}
                      className="mask_overlay"
                    ></div>
                    <div
                      className="data"
                      style={{ zIndex: "30", transform: "translateY(0)" }}
                    >
                      <div className="content">
                        <span className="paragraphs" style={{ zIndex: "32" }}>
                          {item.title}
                        </span>
                        <h5
                          className="title small_heading"
                          style={{ zIndex: "32", textAlign: "left" }}
                        >
                          {item.name}
                        </h5>

                        <a
                          style={{ zIndex: "32" }}
                          href={item.linkedin}
                          target="_blank"
                          className="icon font-weight-bold"
                          rel="noreferrer"
                        >
                          <AiFillLinkedin />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
