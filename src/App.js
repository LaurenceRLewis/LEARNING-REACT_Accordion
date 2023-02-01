import React from "react";
import Accordion from "./Accordion";

const items = [
  {
    title: "Section 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo efficitur enim, a egestas orci faucibus a. In hac habitasse platea dictumst."
  },
  {
    title: "Section 2",
    content:
      "Donec id ex commodo, malesuada mi a, fringilla nulla. Aliquam erat volutpat. In hac habitasse platea dictumst. Sed ac fringilla nulla."
  },
  {
    title: "Section 3",
    content:
      "Ut at erat et erat faucibus congue. Sed ut enim a lacus luctus efficitur. Integer tincidunt efficitur metus, ac pharetra sem ullamcorper vel."
  }
];

const App = () => {
  return (
    <div className="app">
      <Accordion items={items} />
    </div>
  );
};

export default App;
