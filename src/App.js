import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  var i = 0;

  function myLoop() {
    setTimeout(function () {
      // console.log("hello");
      let line;
      try {
        line = document.getElementById("redLine");
        line.style.width = `${i * 10}%`;
      } catch (e) {
        console.log("error", e);
      }
      i++;
      if (i < 10) {
        myLoop();
      }
    }, 100);
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    myLoop();
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(33, 37, 43)";
      document.body.style.color = "rgb(248,249,250)";
      showAlert("Dark Mode Enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "snow";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled!", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About" /> */}
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route
              exact
              path="/"element={<TextForm showAlert={showAlert}heading="Enter the text here:"mode={mode}/>}/></Routes> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text here:"
          mode={mode}
        />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
