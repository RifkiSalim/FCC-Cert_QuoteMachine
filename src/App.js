import React from "react";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import BlobsBG from "./assets/bg-blobs.svg";

function App() {
  return (
    <div
      className="container-fluid"
      style={{
        height: "100vh",
        backgroundImage: `url(${BlobsBG}) `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="container d-flex w-100 h-100 align-items-center justify-content-center p-0">
        <div className="col-lg-10 col-12 p-2">
          <div
            className="card rounded-3 shadow"
            id="quote-box"
            style={{
              background: "rgba(218, 218, 218, 0.20)",
              backdropFilter: "blur(7.5px)",
              WebkitBackdropFilter: "blur(7.5px)",
            }}
          >
            <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
              <FaQuoteLeft size={56} />
              <figure className="text-center">
                <blockquote className="blockquote" id="text">
                  <h4 className="display-4 text-white">This is a quote</h4>
                </blockquote>
                <figcaption
                  className="blockquote-footer fw-light text-white text-opacity-75 fs-4"
                  id="author"
                >
                  Someone famous
                </figcaption>
              </figure>
              <button
                className="btn btn-primary fw-bold d-flex align-items-center"
                id="new-quote"
              >
                <FiRefreshCw className="me-2" />
                New Quote
              </button>
            </div>
            <div className="card-footer d-flex p-2 justify-content-center align-items-center">
              <a
                href="https://twitter.com/intent/tweet"
                className="btn btn-outline-secondary text-white d-flex align-items-center "
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
