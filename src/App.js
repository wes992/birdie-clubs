import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Nav";
import { Home } from "./Home";
import { ItemList } from "./Items";

import "./App.css";
import "./common/FontAwesome";
import { CartState } from "./Context/Context";

function App() {
  const {
    dbData: { balls = [], clubs: allClubs = [] },
  } = CartState();

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
