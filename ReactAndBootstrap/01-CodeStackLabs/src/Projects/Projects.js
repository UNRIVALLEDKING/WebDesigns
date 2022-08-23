import React from "react";
import "./Projects.css";
import projectsData from "./Projects.json";

export default function Projects() {
  return (
    <>
      <div id="projects" className="container mb-3 py-5">
        <h5
          data-aos="zoom-in-right"
          className="heading text-center text-white my-3"
        >
          Our Projects
        </h5>
        <p data-aos="zoom-in-right" className="top_Tech_para text-white">
          We leave no stone unturned while working so that we can deliver our
          clients the best. It makes us feel highly proud and encouraged when
          our clients appreciate our work.
        </p>

        <div className="row my-5">
          {projectsData.map((item, id) => (
            <div key={id} data-aos="flip-right" className="col-md-6 my-3">
              <div className="row">
                <div className="example cards">
                  <div
                    style={{
                      background: `url(${item.img})`,
                      backgroundPosition: "top left",
                      backgroundSize: "cover",
                    }}
                    className="wrapper"
                  >
                    <div
                      style={{ opacity: "0.25" }}
                      className="mask_overlay"
                    ></div>
                    <div className="data" style={{ zIndex: "30" }}>
                      <div className="content">
                        <span className="paragraphs" style={{ zIndex: "32" }}>
                          {item.type}
                        </span>
                        <h5 className="title heading" style={{ zIndex: "32" }}>
                          {item.title}
                        </h5>
                        <p
                          className="paragraphs text-start"
                          style={{ zIndex: "32" }}
                        >
                          {item.desc.substring(0, 120) + "..."}
                        </p>
                        <a
                          style={{ zIndex: "32" }}
                          href={item.url}
                          target="_blank"
                          className="caro_Btn"
                          rel="noreferrer"
                        >
                          Visit Site
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
