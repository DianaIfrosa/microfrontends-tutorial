import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Banner from "about/Banner";
import GetMoreInfoButton from "about/GetMoreInfoButton";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Banner />
    <div className="text-center">
      <p className="text-gray-500">Let's learn React!</p>
    </div>
    <GetMoreInfoButton />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);