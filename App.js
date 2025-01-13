import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => <h1 classname="title">This is a Title</h1>;
const HeadingComponent = () => {
  return (<div className="container">
    <TitleComponent />
    <h1>Namaste React Function Component</h1>
  </div>)
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
