import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import BlobsBG from "./assets/bg-blobs.svg";
import axios from "axios";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState({
    body: "",
    author: "",
  });
  const getQuote = () => {
    setIsLoading(true);
    axios
      .get("https://api.quotable.io/quotes/random")
      .then(function (response) {
        const { data } = response;
        setQuote({
          body: data[0].content,
          author: data[0].author,
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div
      className="container-fluid"
      style={{
        height: "100dvh",
        backgroundImage: `url(${BlobsBG}) `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="container d-flex flex-column w-100 h-100 align-items-center justify-content-center p-0">
        <div className="col-lg-10 col-12 p-2 align-items-center">
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
              <figure
                className="text-center"
                style={{
                  opacity: isLoading ? 0 : 1, // Apply opacity based on isLoading state
                  transition: "opacity 0.75s", // Add a transition effect
                }}
              >
                <blockquote className="blockquote" id="text">
                  <h4 className="display-4 text-white">{quote.body}</h4>
                </blockquote>
                <figcaption
                  className="blockquote-footer fw-light text-white text-opacity-75 fs-4"
                  id="author"
                >
                  {quote.author}
                </figcaption>
              </figure>
              <button
                className="btn btn-primary fw-bold d-flex align-items-center"
                id="new-quote"
                disabled={isLoading}
                onClick={() => getQuote()}
              >
                <FiRefreshCw className="me-2" />
                New Quote
              </button>
            </div>
            <div className="card-footer d-flex p-2 justify-content-center align-items-center">
              <a
                rel="noreferrer"
                target="_blank"
                href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
                  `"${quote.body}" \n- ${quote.author}`
                )}`}
                className="btn btn-outline-secondary text-white d-flex align-items-center "
                id="tweet-quote"
              >
                <FaTwitter size={28} className="me-2" />
                <span>Share on Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <span className="text-center text-white text-opacity-75">
          Design and Code by{" "}
          <a
            href="https://rifkisalim.com"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            Rifki Salim
          </a>
          .
        </span>
      </div>
    </div>
  );
}

export default App;
