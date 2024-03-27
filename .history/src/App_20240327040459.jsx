import "./App.css";
import jsonData from "./logements.json";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <div>
        <h2>{jsonData.title}</h2>
        <p>{jsonData.description}</p>
      </div>
    </>
  );
}

export default App;
