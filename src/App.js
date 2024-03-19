import Home from "./pages/Home/Home";
import StickyNav from "./components/Navbars/stickyNav";
import JigyasaTeam from "./components/Team/Teams";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/team"
            element={
              <>
                <StickyNav />
                <JigyasaTeam />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
