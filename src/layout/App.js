import React from "react";
import Page from "../components/Page";
import Menu from "./Menu";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        <main>
          <Page />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
