import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
