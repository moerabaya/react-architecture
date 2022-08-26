import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ContextApi from "./state-management/ContextApi";
import './App.css';
import Home from "./pages/Home";
import RecoilCounter from "./state-management/Recoil";

function App() {
  return (
    <Router>
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
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
