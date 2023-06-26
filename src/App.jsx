import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Display from "./pages/Display";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:email" element={<Display />} />
    </Routes>
  );
}

export default App;
