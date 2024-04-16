import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  //Insert router, links here
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/netflix">
                <img className="nf" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt="Netflix"/>
              </Link>
            </li>
            <li>
              <Link to="/hbo-max">
                <img className="hb" src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" alt="HBO Max"/>
              </Link>
            </li>
            <li>
              <Link to="/hulu">
                <img className="hu" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" alt="Hulu"/>
              </Link>
            </li>
            <li>
              <Link to="/prime-video">
                <img className="pr" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="Prime Video"/>
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}

function Child() {

  // Below this comment, there's one major key script missing
  let { id } = useParams();

  return (
    <div>
      <h3>You Selected: <span>{id}</span></h3>
    </div>
  );
}