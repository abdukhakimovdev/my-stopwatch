import React from "react";
import "./Header.css";

const Header = ({ setPage }) => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <button onClick={() => setPage("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => setPage("about")}>About</button>
          </li>
          <li>
            <button onClick={() => setPage("stopwatch")}>Stopwatch</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
