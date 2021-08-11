import "./styles.css";
import { useState } from "react";
import happy from "./happy.svg";
import unhappy from "./low.svg";
import birthday1 from "./birthday1.svg";
import birthday2 from "./birthday2.svg";

var sumOfDigits = 0;

var date = "";
var luckyNum = 0;

const happyImgDiv = (
  <img alt="happyImage" src={happy} width="100%" height="200px" />
);
const unhappyImgDiv = (
  <img alt="unhappyImage" src={unhappy} width="100%" height="200px" />
);

export default function App() {
  const [outputMessage, setOutputMessage] = useState(["", ""]);

  function buttonHandler(event) {
    event.preventDefault();
    const dateToArray = date.split("-");
    dateToArray.map((str) => {
      for (var i = 0; i < str.length; i++) {
        sumOfDigits += Number(str[i]);
      }
    });
    if (sumOfDigits % luckyNum === 0) {
      setOutputMessage(["Hurray!!You are a lucky person!", happyImgDiv]);
    } else {
      setOutputMessage([
        "Oops!!Your birthday is not a lucky number!",
        unhappyImgDiv,
      ]);
    }
  }

  return (
    <div className="App">
    <img alt="birthdayImage" src={birthday1} width="100%" height="200px" />
      <section className="intro-section">
        <h1>Is your birthday lucky?</h1>
        <a href="#calculate-section">Scroll down or click here 🎁 to check it out!</a>
      </section>
      <img alt="birthdayImage" src={birthday2} width="100%" height="200px" />
      <section id="calculate-section">
        <h2>Enter Your Birthdate and lucky number to continue...</h2>
        <div className="output">
          Privacy Alert! We do not store your personal information.
        </div>
        <form onSubmit={buttonHandler}>
          <label htmlFor="date-input">Select your date of birth:</label>
          <br />
          <input
            type="date"
            className="date-input"
            onChange={(event) => {
              date = event.target.value;
            }}
          />
          <br />
          <label htmlFor="lucky-number">Enter your lucky number:</label>
          <br />
          <input
            type="number"
            className="lucky-number"
            onChange={(event) => {
              luckyNum = event.target.value;
            }}
          />
          <br />
          <button
            className="check-button btn btn-dark"
            type="button"
            type="submit"
          >
            Check
          </button>
        </form>
        <div className="output">{outputMessage}</div>
      </section>

      <footer>
        <h3>Find me on</h3>
        <i class="fab fa-github"></i>
        <a
          className="social-media-link"
          href="https://github.com/srishti-maurya"
        >
          Github
        </a>
        <i class="fab fa-linkedin"></i>
        <a
          className="social-media-link"
          href="https://www.linkedin.com/in/mauryasrishti22/"
        >
          Linkedin
        </a>
        <i class="fab fa-twitter"></i>
        <a
          className="social-media-link"
          href="https://twitter.com/SrishtiMaurya1?s=09"
        >
          Twitter
        </a>
      </footer>
    </div>
  );
}
