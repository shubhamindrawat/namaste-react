// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
const heading2 = React.createElement(
  "h1",
  {},
  "I'm a H1 tag"
);
const child = React.createElement("div", {id: "child"}, [heading2, heading2]);
const parent = React.createElement("div", {id: "parent"}, child);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
