import React from "react";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import AllPost from "./AllPost";
import OnePost from "./OnePost";

function App(){
  return  (
    <BrowserRouter>
 
       <Routes>
         <Route element={<AllPost/>} path="/" />
         <Route element={<OnePost/>} path="/:slug"/>
        
        </Routes>
       </BrowserRouter>
  )
 
}

export default App;