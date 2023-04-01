import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    console.log("The text was updated.");
    if (text === "" && text2 !== "") {
      setText2(event.target.value);
    } else {
      setText2(event.target.value);
      setText(event.target.value);
    }
  };
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  //Calculations
  // let wordLength = text.match(/(\w+)/g).length;
  let wordLength = text.split(/\s+/).filter((element) => {
    return element.length !== 0;
  }).length;
  // if (
  //   text.charAt(text.length - 1) === "" ||
  //   text.charAt(text.length - 1) === " "
  // ) {
  //   wordLength = text.split(" ").length - 1;
  // } else {
  //   wordLength = text.split(" ").length;
  // }
  const handleAlert = (txt) => {
    if (txt === "" || txt === " ") {
      props.showAlert("Text is empty!", "warning");
    }
  };
  // Cases
  const handleUpClick = () => {
    console.log("Uppercase was called.");
    handleAlert(text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Lowercase was called.");
    handleAlert(text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCtClick = () => {
    console.log("Clear Text was called.");
    handleAlert(text);
    let newText = "";
    setText(newText);
    setText2(newText);
  };
  const handleElcClick = () => {
    console.log("First letter uppercase was called.");
    handleAlert(text);
    let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );
    setText(newText);
  };
  const handleEllClick = () => {
    console.log("First letter lowercase was called.");
    handleAlert(text);
    let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toLowerCase()
    );
    setText(newText);
  };
  const handleCopy = () => {
    if (text2 === "" || text2 === " ") {
      props.showAlert("Text is empty!", "warning");
    } else {
      props.showAlert("Copied to clipboard.", "success");
    }
    var text = document.getElementById("textBox2");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    handleAlert(text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div className="textBox">
        <div className="textBox1">
          <h3>{props.heading}</h3>
          <textarea
            className={`form-control textBox-${
              props.mode === "light" ? "light" : "dark"
            }`}
            id="textBox1"
            rows="8"
            placeholder="Write text here."
            value={text2}
            onChange={handleOnChange}
          />

          <div className="cases my-3">
            <button className="btn btn-info" onClick={handleUpClick}>
              To Uppercase
            </button>
            <button className="btn btn-info" onClick={handleLoClick}>
              To Lowercase
            </button>
            <button className="btn btn-info" onClick={handleCtClick}>
              Clear Text
            </button>
            <button className="btn btn-info" onClick={handleElcClick}>
              First Letter Capital
            </button>
            <button className="btn btn-info" onClick={handleEllClick}>
              First Letter Lower
            </button>
            <button className="btn btn-info" onClick={handleExtraSpaces}>
              Remove Extra Spaces
            </button>
          </div>
        </div>
        <div className="textBox2">
          <h3>Text summary: </h3>
          <textarea
            className={`form-control textBox-${
              props.mode === "light" ? "light" : "dark"
            }`}
            id="textBox2"
            rows="8"
            placeholder="The text results display here."
            value={text}
            onChange={handleOnChange}
          />

          <div className="cases my-3">
            <button className="btn btn-info mb-2" onClick={handleCopy}>
              Copy Text
            </button>
            <p>
              There are {wordLength} words and {text.length} characters in your
              text. (With spaces)
            </p>
            <p>
              The average time reading the text will take {0.008 * wordLength}{" "}
              minutes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
