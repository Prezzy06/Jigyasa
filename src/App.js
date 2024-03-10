import Home from "./pages/Home/Home"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
