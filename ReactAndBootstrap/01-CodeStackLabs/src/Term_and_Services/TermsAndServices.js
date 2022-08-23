import React from "react";
import { BsArrow90DegRight } from "react-icons/bs";

export default function TermsAndServices({ setModal }) {
  return (
    <>
      <div className="container text-white">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="heading my-5">Terms of Services</h2>
            <p className="paragraphs text-start">
              CodeStack Labs provides services to its clients which are
              consistent to the terms and conditions mentioned here. In no case
              shall these terms and conditions be violated by either of the
              concerned parties. This emphasizes and clears all aspects which
              are required to attain a mutual understanding before entering a
              contract.
            </p>
          </div>
          <div className="col-sm-6">
            <img
              className="img-fluid"
              src="./Images/Terms-of-Services.png"
              alt="Terms of Services"
            />
          </div>
          <div className="my-3">
            <h5 className="small_heading">
              {"<"} Scope {"/>"}
            </h5>
            <p className="paragraphs text-start">
              <BsArrow90DegRight className="m-3" /> This covers the term and
              conditions which apply to all the services provided by CodeStack
              Labs. through its website www.codestacklabs.com or any other
              business or source owned by CodeStackLabs.
            </p>
          </div>
          <div className="my-3">
            <h5 className="small_heading">
              {"<"} Ownership and Content {"/>"}
            </h5>
            <p className="paragraphs text-start">
              <BsArrow90DegRight className="m-3" /> The client grants
              CodeStackLabs. all rights to manipulate, test and redesign the
              parts of a website or mobile application which have been marked to
              be worked upon by the client. In no case shall CodeStackLabs be
              held responsible in project where partial manipulation to a design
              has to be made.
            </p>
            <p className="paragraphs text-start">
              <BsArrow90DegRight className="m-3" /> The client keeps all rights
              associated with the content of an existing design which has to be
              amended by us. The existing content will never will be used by
              CodeStackLabs through any means.
            </p>
            <p className="paragraphs text-start">
              <BsArrow90DegRight className="m-3" /> CodeStackLabs retains all
              rights not clearly allowed to you in this terms and condition
              agreement.
            </p>
            <p className="paragraphs text-start">
              <BsArrow90DegRight className="m-3" /> Upon the completion and
              final payment of a project, all the rights related to the design
              and content will be transferred to the respective client.
            </p>
          </div>
          <div className="my-3">
            <h5 className="small_heading">
              {"<"} Service and Maintenance {"/>"}
            </h5>
            <p className="paragraphs text-start">
              <BsArrow90DegRight className="m-3" /> The company holds the right
              to host your newly created design on our servers for development
              and testing purposes.
            </p>
            <p className="paragraphs text-start">
              <BsArrow90DegRight className="m-3" /> If the clients wants to hire
              a maintenance service for the created entity, it can only be
              attain by hiring our maintenance services. We will provide support
              for our finished design till 15 days after the project has been
              delivered.
            </p>
          </div>
          <div className="my-3">
            <h5 className="small_heading">
              {"<"} Termination {"/>"}
            </h5>
            <p className="paragraphs text-start">
              <BsArrow90DegRight className="m-3" /> This terms and conditions
              policy will come in to effect as soon as a candidate contacts us.
              This agreement will automatically be eliminated upon the
              completion of the project. On the contrary, this agreement can be
              eliminated by any of the party through mutual discussion.
            </p>
            <p className="paragraphs text-start">
              <BsArrow90DegRight className="m-3" /> The agreement will be
              considered valid if any remaining payments are to be made in favor
              of CodeStackLabs
            </p>
          </div>
          <div className="my-3">
            <h5 className="small_heading">
              {"<"} Legal Restrictions {"/>"}
            </h5>
            <p className="paragraphs text-start">
              <BsArrow90DegRight className="m-3" /> All the disputed will be
              subject to Bihar Jurisdiction of the Indian judicial system.
            </p>
          </div>
          <div className="my-3">
            <h5 className="small_heading">
              {"<"} Liability And Warranty {"/>"}
            </h5>
            <p className="paragraphs text-start">
              <BsArrow90DegRight className="m-3" /> CodeStackLabs does not
              provide any warranty for the glitch of tools and software's used
              for developing a design or application. Such tools are subject to
              their respective owners and in no case should CodeStackLabs be
              blamed for such issues.
            </p>
          </div>
          <div className="my-3">
            <h5 className="small_heading">
              {"<"} Copyrights {"/>"}
            </h5>
            <p className="paragraphs text-start">
              <BsArrow90DegRight className="m-3" /> Rights to all designs
              created by CodeStackLabs will be move to the client upon prompt
              and full payment. It is the client's responsibility to obtain
              copyrights relevant to the design received by them.
            </p>
            <div className="text-center">
              <button
                onClick={() => setModal((toggle) => !toggle)}
                className="text-center caro_Btn paragraphs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
