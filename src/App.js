import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ContextApi from "./state-management/ContextApi";
import './App.css';
import React from "react";
import Home from "./pages/Home";
import RecoilCounter from "./state-management/Recoil";
import ReduxCounter from "./state-management/Redux";
import MobXCounter from "./state-management/MobX";
import Articles from "./server-side-render";
// import styled from "styled-components";

// const BigGreenHeading = styled.h1`
// 	color: green;
// 	font-size: 96px;
// `;

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a>State Management</a>
            <ul className="sub-menu">
              <li>
                <Link to="/state-management/context-api">ContextApi</Link>
              </li>
              <li>
                <Link to="/state-management/recoil">Recoil</Link>
              </li>
              <li>
                <Link to="/state-management/redux">Redux/Toolkit</Link>
              </li>
              <li>
                <Link to="/state-management/mobx">MobX</Link>
              </li>
            </ul>
          </li>
          <li>
            <a>Server Side Rendering</a>
            <ul className="sub-menu">
              <li>
                <Link to="/server-side-rendering/articles">Articles</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <main className="layout">
        <Routes>
          <Route path="/state-management/context-api" element={<ContextApi />} />
          <Route path="/state-management/recoil" element={<RecoilCounter />} />
          <Route path="/state-management/redux" element={<ReduxCounter />} />
          <Route path="/state-management/mobx" element={<MobXCounter />} />
          <Route path="/server-side-rendering/articles" element={<Articles />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
