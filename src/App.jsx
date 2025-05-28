import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Error from "./routes/Error"
import Cadastrar from "./routes/Cadastrar"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Sobre from "./routes/Sobre"
import Solucao from "./routes/Solucao"

function App() {

  return (
    <>
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/solucao" element={<Solucao />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App;