import { Route, Routes } from "react-router-dom";
import Hero from "../src/pages/Hero";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
}

export default App;
