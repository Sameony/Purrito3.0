import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Header } from './Components';
import { LandingPage, LoginSignup, Products, Invalid } from './Routes';
function App() {
  return (
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />}></Route>
        <Route path="/auth" element={<LoginSignup />}></Route>
        <Route></Route>
        <Route></Route>
        <Route path="*" element={<Invalid/>} />
      </Routes>
      </Router>
  );
}

export default App;
