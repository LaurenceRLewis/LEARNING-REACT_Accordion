import React from "react";
import Accordion from "./Accordion";

const items = [
  {
    title: "What is REACT?",
    content:
      "React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Facebook and the community of individual developers and companies."
  },
  {
    title: "Why use REACT",
    content:
      "React makes it easier to build and maintain large applications with dynamic user interfaces. Its declarative approach allows for easier testing and debugging, and its virtual DOM allows for efficient updates and rendering of components."
  },
  {
    title: "Who uses REACT?",
    content:
      "React is used by many popular companies such as Facebook, Instagram, Airbnb, Netflix, and more. It's also widely adopted by individual developers and small to large-scale development teams."
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
