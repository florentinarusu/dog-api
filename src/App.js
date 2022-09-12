import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyImages from "./components/MyImages";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import "bootstrap/dist/css/bootstrap.css";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/my-images" element={<MyImages />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
