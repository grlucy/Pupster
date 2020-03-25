import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={About} />
      <Route path="/discover" component={Discover} />
      <Route path="/search" component={Search} />
    </Router>
  );
}

export default App;
