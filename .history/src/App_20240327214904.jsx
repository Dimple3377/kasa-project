import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import jsonData from "./logements.js";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
      <h1>Hello</h1>
      <div>
        <h2>{jsonData.title}</h2>
        <p>{jsonData.description}</p>
      </div>
    </>
  );
}

export default App;
