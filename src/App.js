import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Discussions from "./Discussions";
import PostFrom from "./PostForm";

function App() {
  return (
    <BrowserRouter>
      <main>
        <PostFrom />
        <Routes>
          <Route path='/' element={<Discussions />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
