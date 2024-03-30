/* eslint-disable react/no-unescaped-entities */

import "./App.css";


import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

function App() {
  return (
    <div style={{display:'flex',padding:15,overflow:'hidden'}}>
      <Aside/>
      <div className="main-content" style={{position:'relative'}}>
       <Navbar/>
        <section style={{
          scrollBehavior: "smooth",
          
        }}><Outlet/></section>
      </div>
    </div>
  );
}

export default App;