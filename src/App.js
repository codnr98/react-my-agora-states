import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Discussions from "./Discussions";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Discussions />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
