import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import './App.css';
import { LoginPage } from "./LoginPage/LoginPage";
import { Dashboard } from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
