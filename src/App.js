import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/App.css';
import Menu from './composants/Menu';
import Cart from './pages/Cart';
import Home from './pages/Home';
import PizzaOrder from './composants/PizzaOrder';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza, ingredients) => {
        setCart([...cart, { ...pizza, ingredients }]);
    };

    return (
        <Router>
            <div className="App">
                <Menu />
                <main className="content-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart cart={cart} />} />
                        <Route path="/order" element={<PizzaOrder addToCart={addToCart} />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;