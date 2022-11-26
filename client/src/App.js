import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
