import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/paginas/login/Login';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './components/paginas/cadastroUsuario/CadastroUsuario';
import Home from './components/paginas/home/Home';
import SobreNos from './components/paginas/sobreNos/SobreNos';
import ContatoUsuario from './components/paginas/contato/Contato';

function App() {
    return (

        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/cadastrousuario' element={<CadastroUsuario/>} />
                <Route path='/SobreNos' element={<SobreNos/>} />
                <Route path='/contatos' element={<ContatoUsuario/>} />
            </Routes>
            <Footer />
        </Router>

    );
}

export default App;
