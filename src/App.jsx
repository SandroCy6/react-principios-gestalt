import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
//import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bdg-contenedor-maestro">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
