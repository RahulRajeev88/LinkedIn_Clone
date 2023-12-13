import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<>{<Header />} {<Home />}</>} />
      
      </Routes>
     </Router>

    </div>
  );
}

export default App;
