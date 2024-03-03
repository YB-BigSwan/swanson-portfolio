import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Router basename="/">
        <div className="page">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
