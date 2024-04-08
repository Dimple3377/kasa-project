import "./index.scss";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home/Home";
import Logements from "./Pages/Logements/Logements";
import About from "./Pages/About/About";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logements/:id" element={<Logements />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
