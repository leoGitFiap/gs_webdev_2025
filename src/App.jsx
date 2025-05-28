import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Error from "./routes/Error";
import Cadastrar from "./routes/Cadastrar";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Sobre from "./routes/Sobre";
import Solucao from "./routes/Solucao";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main>
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/solucao" element={<Solucao />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;