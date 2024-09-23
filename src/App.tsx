import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import ProjectsOverview from "./pages/overview/overview";
import BrickDetective from "./pages/detail/brick_detective";
import ForzeFootball from "./pages/detail/forze_football";
import Smashblade from "./pages/detail/smashblade";
import Boilerplate from "./pages/detail/boilerplate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<ProjectsOverview />} />
        <Route path="/projects/brick-detective" element={<BrickDetective />} />
        <Route path="/projects/forze-football" element={<ForzeFootball />} />
        <Route path="/projects/smashblade" element={<Smashblade />} />
        <Route path="/projects/boilerplate" element={<Boilerplate />} />
      </Routes>
    </Router>
  );
}

export default App;
