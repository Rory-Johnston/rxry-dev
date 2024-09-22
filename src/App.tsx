import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import Projects from "./pages/projects/projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
