import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export default function Routes() {
  return (
    <Router>
      <nav>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <Link to="/">
              <h2>Home</h2>
            </Link>
          </div>
          <div>
            <Link to="/about">
              <h2>About</h2>
            </Link>
          </div>
        </div>
      </nav>
      <Suspense fallback={<div>Chargement...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
}
