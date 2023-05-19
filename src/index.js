import React from "react"; // Importing React library
import ReactDOM from "react-dom"; // Importing ReactDOM library
import App from "./App"; // Importing the App component
import "./styles.css"; // Importing the CSS styles for the application

ReactDOM.render(
  <React.StrictMode>
    {/* Wrapping the App component with React.StrictMode */}
    <App /> {/* Rendering the App component */}
  </React.StrictMode>,
  document.getElementById("root") // Mounting the application on the element with id "root"
);
