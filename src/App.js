import React from "react";
import Navbar from "./components/pages/Navbar";
import Desk from "./components/pages/Desk";
import Dining from "./components/pages/Dining";
import "./App.css";
import Lounge from "./components/pages/Lounge";
import Outdoor from "./components/pages/Outdoor";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from "./components/pages/grid";

function App() {
  return (
    <Router>
      <div>
        <div ClassName="container">
          <div className="card-mt-4">
            <div className="card-body shadow">
             

              <Navbar />
              <Switch>
                <Route exact path="/Desk" component={Desk} />

                <Route path="/Dining" component={Dining} />

                <Route path="/Lounge" component={Lounge} />
                <Route path="/Outdoor" component={Outdoor} />
              </Switch>
              <div>
                </div>
              <div>
                <Grid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
