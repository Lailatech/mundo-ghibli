import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rodape from './components/Rodape';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Sobre from './pages/Sobre';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
