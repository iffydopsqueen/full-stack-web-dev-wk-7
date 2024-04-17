import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div>
        <h2>TV APPS</h2>
        <nav style={{ margin: 10 }}>
          <Link to="/netflix">
            <img className="nf" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt="Netflix"/>
          </Link>
          <Link to="/hbo_max">
            <img className="hb" src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" alt="HBO Max"/>
          </Link>
          <Link to="/hulu">
            <img className="hu" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hulu_2019.svg/800px-Hulu_2019.svg.png?20220704113837" alt="Hulu"/>
          </Link>
          <Link to="/prime_video">
            <img className="pr" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="Prime Video"/>
          </Link>
        </nav>

        <Routes>
          <Route path="/:id" element={<Child />} />
        </Routes>
      </div>
    </Router>
  );
}

function Child() {
  let { id } = useParams();

  return (
    <div>
      <h3>You Selected: <span>{id}</span></h3>
    </div>
  );
}