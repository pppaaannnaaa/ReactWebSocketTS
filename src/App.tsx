import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import IOTsensors from "./components/IOTsensors";
function App() {
  const [showAll, setShowAll] = useState(true)
  const headerSwitch = (e: React.FormEvent<EventTarget>): void => {
    let target = e.target as HTMLInputElement;
    console.log(target.checked);
    setShowAll(target.checked);
}
  return (
    <>
      <Header headerSwitch={headerSwitch} showAll={showAll}/>
      <IOTsensors showAll={showAll}/>
      <footer />
    </>
  );
}

export default App;
