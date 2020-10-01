import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <header className="App-header">
          <Home />
        </header>
        <header className="About-header">
          <About />
        </header>
        <header className="Portfolio-header">
          <Portfolio />
        </header>
        <header className="Footer-header">
          <Footer />
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
