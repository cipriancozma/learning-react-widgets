import React from "react";
// import Accordion from "./components/Accordion";
import Search from './components/Search';

const App = () => {

  const items = [
    {
      title: "What is React?",
      content: "React is a frontend JS framework!"
    },
    {
      title: "Why use React?",
      content: "React is a favourite JS libray among engineers."
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components."
    }
  ]


  return <div className="ui styled accordion">
    {/* <Accordion items={items}/> */}
    <Search />
  </div>;
};

export default App;
