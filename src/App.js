import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ContextApi from "./state-management/ContextApi";
import './App.css';
import Home from "./pages/Home";

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
              <Link to="/state-management/context-api">State Management</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <main className="layout">
          <Routes>
            <Route path="/state-management/context-api" element={<ContextApi />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
