import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/App.css';
import Menu from './composants/Menu';
import Cart from './pages/Cart';
import Home from './pages/Home';  // Import du fichier Home

function App() {
    return (
        <Router>
            <div className="App">
                <Menu />  {/* Menu en haut de la page */}

                <main className="content-container">
                    <Routes>
                        <Route path="/" element={<Home />} />  {/* Accueil avec le composant Home */}
                        <Route path="/cart" element={<Cart />} />  {/* Page du panier */}
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
