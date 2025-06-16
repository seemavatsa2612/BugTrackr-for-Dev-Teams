// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Authentication/Signup.jsx';
import Login from './Authentication/Login.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
