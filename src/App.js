import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { LandingPage, LoginSignup, Products } from './Routes';
function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />}></Route>
        <Route path="/auth" element={<LoginSignup />}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
      </Router>
  );
}

export default App;
