// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Authentication/Login.jsx';
import Signup from './Authentication/Signup.jsx';
import Password from './Authentication/Password.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Auth/" element={<Login />} />
        <Route path="/Auth/Signup" element={<Signup />} />
        <Route path="/Auth/Forget" element={<Password />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
