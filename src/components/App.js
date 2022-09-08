import React from "react";
import Posts from "./Posts";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Data from "./data.json"
import FixedPost from "./FixedPost";

export default function App() {
    
  
  const contenter = Data.data.map(item => <Route path={item.src} element={
    <FixedPost 
    name={item.name}
    lastname={item.lastname}
    score={item.score}
    status={item.status}
    email={item.Email}
    />
  
  }/>)
    
    
    
    const dataArrayName = Data.data.map(item => <li>{item.name}</li>)
    const dataArrayLast = Data.data.map(item => <li>{item.lastname}</li>)
    const dataArrayScore = Data.data.map(item => <li>{item.score}</li>)
    const linker = Data.data.map(item => <Link to={item.src}><button>Check</button></Link>)
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <Posts 
          name={dataArrayName}
          lastname={dataArrayLast}
          score={dataArrayScore}
          link={linker}
          />} />
          {contenter}
        </Routes>
      </BrowserRouter>
    </div>
  );
}


