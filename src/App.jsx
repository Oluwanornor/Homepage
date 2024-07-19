import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Page/Homepage";
import NavBar1 from "./components/NavBar";


function App() {
  return (
    <>
      <Router>
        <NavBar1 />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
