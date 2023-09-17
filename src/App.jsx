import Alert from "./component/Alert";
import Navebar from "./component/Navebar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
// import About from "./About";
// import { Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#294244";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
    }
  };
  return (
    <>
      <Navebar
        title="App.io"
        mode={mode}
        toggleMode={toggleMode}
        about="About Us"
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          showAlert={showAlert}
          heading="enter your text here.."
          mode={mode}
          my-3
        />
        {/* <Routes>
          <Route exact path="/" element={} />
          <Route exact path="/about" element={<About />} />
        </Routes> */}
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
