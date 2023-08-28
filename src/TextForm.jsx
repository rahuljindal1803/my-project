import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClick = () => {
    const newText = Text.toUpperCase();

    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleLoClick = () => {
    const newText = Text.toLowerCase();

    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#294244" }}
      >
        <h1>{props.heading}</h1>
        <div
          className="container "
          style={{
            backgroundColor: props.mode === "dark" ? "#294244" : "white",
          }}
        >
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={Text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#294244" : "white",
              color: props.mode === "dark" ? "white" : "#294244",
            }}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary my-2 mx-2"
          onClick={handleClick}
        >
          convert to upperCase{" "}
        </button>
        <button
          type="button"
          className="btn btn-primary my-2 mx-2"
          onClick={handleLoClick}
        >
          convert to LowerCase{" "}
        </button>
        <div
          className="container "
          style={{
            backgroundColor: props.mode === "dark" ? "#294244" : "white",
          }}
        >
          <h2>Your Text Summary</h2>
          <p>
            {
              Text.split(/\s+/).filter(function (num) {
                return num !== "";
              }).length
            }
            words and {Text.length}characters
          </p>
          <p>
            {0.008 *
              Text.split(" ").filter(function (num) {
                return num !== "";
              }).length}
            Minutes read
          </p>
          <h2>Preview</h2>
          <p>{Text}</p>
        </div>
      </div>
    </>
  );
}
