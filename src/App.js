import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Apple from './pages/Apple';
import './App.scss';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/apple" element={<Apple />} />
    </Routes>
  </Router>
);

export default App;
