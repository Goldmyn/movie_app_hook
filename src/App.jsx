import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path=":_id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
