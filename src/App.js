import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ContextApi from "./state-management/ContextApi";
import './App.css';
import React, { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Home = lazy(() => import("./pages/Home"));
const RecoilCounter = lazy(() => import("./state-management/Recoil"));
const ReduxCounter = lazy(() => import("./state-management/Redux"));
const MobXCounter = lazy(() => import("./state-management/MobX"));
const Articles = lazy(() => import("./server-side-render"));
const Tests = lazy(() => import("./testing/testing"));
// import styled from "styled-components";

// const BigGreenHeading = styled.h1`
// 	color: green;
// 	font-size: 96px;
// `;

const Fallback = () => <h1>Something went wrong!</h1>;

function App() {

  const handleError = (error, errorInfo) => console.warn("Error: ", error, errorInfo);

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
              <li>
                <Link to="/tests">Tests</Link>
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
        <ErrorBoundary FallbackComponent={Fallback} onError={handleError}>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/state-management/context-api" element={<ContextApi />} />
              <Route path="/state-management/recoil" element={<RecoilCounter />} />
              <Route path="/state-management/redux" element={<ReduxCounter />} />
              <Route path="/state-management/mobx" element={<MobXCounter />} />
              <Route path="/server-side-rendering/articles" element={<Articles />} />
              <Route path="/tests" element={<Tests />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
