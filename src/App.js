import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Nav";
import { Home } from "./Home";
import { ItemList } from "./Items";
import { database } from "./firebase";

import "./App.css";
import "./common/FontAwesome";

function App() {
  const clubsRef = database.ref("clubs");
  const ballsRef = database.ref("balls");

  const [allClubs, setAllClubs] = useState([]);
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    clubsRef.on("value", (snapshot) => {
      setAllClubs((allClubs) => [...allClubs, ...snapshot.val()]);
    });

    ballsRef.on("value", (snapshot) => {
      setBalls(snapshot.val());
    });
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
                items={allClubs.filter((clubs) => !!clubs.newRelease)}
                returnPath={"/new-releases"}
              />
            }
          />
          <Route
            path="/new-releases/:id"
            element={
              <ItemList
                items={allClubs.filter((clubs) => !!clubs.newRelease)}
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
