import "./index.scss";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About/About";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </Layout>
      <h1>Hello</h1>
      <div></div>
    </>
  );
}

export default App;
