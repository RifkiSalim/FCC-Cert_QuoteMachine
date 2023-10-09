import React from "react";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

function App() {
  return (
    <div
      className="container-fluid"
      style={{
        height: "100vh",
        background:
          "radial-gradient(circle at top left,transparent 9%, #4f46e4 10% ,#4f46e4 15% , transparent 16%) , radial-gradient(circle at bottom left,transparent 9%, #4f46e4 10% ,#4f46e4 15% , transparent 16%), radial-gradient(circle at top right ,transparent 9%, #4f46e4 10% ,#4f46e4 15% , transparent 16%) , radial-gradient(circle at bottom right,transparent 9%, #4f46e4 10% ,#4f46e4 15% , transparent 16%),radial-gradient(circle, transparent 25%, #ffffff  26%),linear-gradient(0deg, transparent 44%, #4f46e4 45%, #4f46e4 55%, transparent 56%), linear-gradient(90deg, transparent 44%, #4f46e4 45%, #4f46e4 55%, transparent 56%)",
        backgroundSize: "6em 6em",
        backgroundColor: "#ffffff",
        opacity: 1,
      }}
    >
      <div className="container d-flex w-100 h-100 align-items-center justify-content-center p-0">
        <div className="col-lg-10 col-12 p-2">
          <div className="card" id="quote-box">
            <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
              <FaQuoteLeft size={56} />
              <figure className="text-center">
                <blockquote className="blockquote" id="text">
                  <h4 className="display-4">Deez nuts</h4>
                </blockquote>
                <figcaption
                  className="blockquote-footer fw-light fs-5"
                  id="author"
                >
                  Someone famous
                </figcaption>
              </figure>
              <button
                className="btn btn-success d-flex align-items-center"
                id="new-quote"
              >
                <FiRefreshCw className="me-2" />
                New Quote
              </button>
            </div>
            <div className="card-footer d-flex p-2 justify-content-center align-items-center">
              <a
                href="https://twitter.com/intent/tweet"
                className="btn btn-primary d-flex align-items-center "
                id="tweet-quote"
              >
                <FaTwitter size={28} className="me-2" />
                <span>Share on Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
