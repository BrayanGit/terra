import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Partners from './components/Partners';
import Contacto from './components/Contacto';
import Horario from './components/Horario';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Nosotros />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/horario" element={<Horario />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;

