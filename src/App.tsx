import React from "react";
import "./App.css";
import DnDProvider from "./components/DndProvider";
import { data } from "./components/__fixtures__/data";

function App() {
  return (
    <div className="App">
      <DnDProvider initialState={data}>
        <div>Coach 1</div>
        <div>Coach 2</div>
      </DnDProvider>
    </div>
  );
}

export default App;
