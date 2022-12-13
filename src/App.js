import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Discussions from "./Discussions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Discussions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
