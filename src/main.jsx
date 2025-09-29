
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReviewProvider } from "./context/ReviewContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReviewProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReviewProvider>
);
