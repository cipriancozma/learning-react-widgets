import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

  const options = [
    {
      label: "Red",
      value: "red"
    },
    {
      label: "Green",
      value: "green"
    },
    {
      label: "Blue",
      value: "blue"
    }
  ]

  const [selected, setSelected] = useState(options[0]);

  return <div className="ui styled accordion">
    {/* <Accordion items={items}/> */}
    {/* <Search /> */}
    <Dropdown options={options} selected={selected} onSelectedChange={setSelected}/>
  </div>;
};

export default App;
