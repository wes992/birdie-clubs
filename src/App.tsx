import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Nav";
import { Home } from "./Home";
import { ItemList } from "./Items";

import "./App.css";
import "./common/FontAwesome";
import { COLLECTIONS, get } from "./firebase";
import { newReleases } from "./assets/newReleases";

function App() {
  const [allClubs, setAllClubs] = useState<any[]>(newReleases);
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await get(COLLECTIONS.CLUBS);

      setAllClubs(items);
    };

    fetchItems();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/new-releases"
            element={
              <ItemList
                items={allClubs.filter((club) => Boolean(club?.newRelease))}
                returnPath={"/new-releases"}
              />
            }
          />
          <Route
            path="/new-releases/:id"
            element={
              <ItemList
                items={allClubs.filter((club) => Boolean(club?.newRelease))}
                returnPath={"/new-releases"}
              />
            }
          />

          <Route
            path="/clubs"
            element={<ItemList items={allClubs} returnPath={"/clubs"} />}
          />
          <Route
            path="/clubs/:id"
            element={<ItemList items={allClubs} returnPath={"/clubs"} />}
          />
          <Route
            path="/balls"
            element={<ItemList items={balls} returnPath={"/balls"} />}
          />
          <Route
            path="/balls/:id"
            element={<ItemList items={balls} returnPath={"/balls"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
