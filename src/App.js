import "./App.css";
import "./common/FontAwesome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Nav";
import { Home } from "./Home";
import { Releases } from "./Releases";
import { Clubs, ClubList } from "./Clubs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-releases" element={<Releases />} />
          <Route path="/clubs/details/:id" element={<Clubs />} />
          <Route path="/clubs" element={<ClubList />} />
          {/* <Route path="/releases" element={<Releases />} />
          <Route path="/releases" element={<Releases />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
