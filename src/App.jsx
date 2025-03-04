import React, { useState } from "react";
import StopWatch from "./components/StopWatch";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";


function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="container">
      <Header setPage={setPage} />
      {page === "home" && <Home />}
      {page === "stopwatch" && <StopWatch />}
      {page === "about" && <About />}
    </div>
  );
}

export default App;
