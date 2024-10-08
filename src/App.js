import './App.css'
import {BrowserRouter as Router,
Routes,
Route } from 'react-router-dom'
import Home from './pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
