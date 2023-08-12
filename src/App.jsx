import React from "react";
import About from './partials/about';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';



export default function App() {
  console.log(import.meta.env.DATABASE_URL);
  return (
    <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
         </Routes>
    </div>
  );
}
