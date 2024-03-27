import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import jsonData from "./logements.json";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Shop />} />
      </Routes>
      <h1>Hello</h1>
      <div>
        <h2>{jsonData.title}</h2>
        <p>{jsonData.description}</p>
      </div>
    </>
  );
}

export default App;
