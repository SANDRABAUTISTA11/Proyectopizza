import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Owner from './pages/Owner';
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Owner" element={<Owner/>} />
      </Routes>
    </>
  );
}

