import "./index.scss";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import About from "./Pages/About/About";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:id" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="*" component={NotFoundPage} />
      </Routes>
    </>
  );
}

export default App;
