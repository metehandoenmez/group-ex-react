import React, { useState, useEffect } from "react";
import "./App.css";
import {Routes, Route, Link} from "react-router-dom"

import NumberDisplay from './NumberDisplay';
import CardComponent from "./CardComponent";
import NotFound from "./NotFound";
import WelcomeComponent from "./WelcomeComponent";

const style = {
  border: "1px solid orange",
  padding: "24px",
  borderRadius: "16px"
}

function App() {
  return (
    <div>
      <div style={style}>
        <Routes>
            <Route path="/" element={<WelcomeComponent></WelcomeComponent>}>
              
            </Route>
            <Route path="/card" element={<CardComponent></CardComponent>}>
    
            </Route>
            <Route path="/number" element={<NumberDisplay></NumberDisplay>}>
              
            </Route>
            <Route path="*" element={<NotFound></NotFound>}>
              
            </Route>
        </Routes>
      </div>
      <br />
      <h3>Pages:</h3>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/card"}>Card Component</Link>
      <br />
      <Link to={"/number"}>Number Display</Link>
    </div>

  );
}

export default App;