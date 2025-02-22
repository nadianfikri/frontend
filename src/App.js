import "./App.css";
import Header from "./components/Header";
import { NavBar } from "./components/NavBar";
import Hero from "./components/Hero";

function MyButton() {
  return <button className="button">Click me</button>;
}

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "blue", backgroundColor: "black" }}>
        welcome to my app
      </h1>
      <div className="header-container">
        <Header />
      </div>
      <div className="nav-container">
        <NavBar />
      </div>
      <div className="hero-container">
        <Hero />
      </div>
      <MyButton />
    </div>
  );
}

export default App;