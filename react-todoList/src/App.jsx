import { Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import './assets/styles/App.scss';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';

function App() {
  return (
    <div className="wrap">
      <Reset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
