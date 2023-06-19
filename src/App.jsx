import React, { useState, useEffect } from "react";
import "./App.css";
import {Routes, Route, Link} from "react-router-dom"

import NumberDisplay from './NumberDisplay';
import CardComponent from "./CardComponent";
import NotFound from "./NotFound";
import WelcomeComponent from "./WelcomeComponent";

const style = {
  border: "3px solid purple",
  padding: "24px",
  borderRadius: "16px"
}

function App() {
  return (
    <div style={{display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
    textAlign:"center"}}>
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
      <div style={{backgroundColor:"rgba(209, 209, 241,0.8)",width:"100vw",height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",borderTopRightRadius:"50%",borderTopLeftRadius:"50%", color:"purple"}}>
        <h3>Pages:</h3>
        <br />
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/card"}>Card Component</Link>
        <br />
        <Link to={"/number"}>Number Display</Link>
      </div>
    </div>

  );
}

export default App;