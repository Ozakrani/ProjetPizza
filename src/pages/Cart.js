import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Cart.css';


function Cart() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        console.log("API:  ",process.env.REACT_APP_API_URL);

        axios.get(process.env.REACT_APP_API_URL+"/api/pizzas")
            .then(response => {
                setPizzas(response.data);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des pizzas :", error);
            });
    }, []);

    return (
        <div className="cart-container">
            <h2>Nos Pizzas</h2>
            <div className="pizzas-wrapper">
                {pizzas.map((pizza, index) => (
                    <div key={pizza.id} className={`pizza-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <img
                            src={pizza.urlPhoto}
                            alt={pizza.nom}
                            className="pizza-image"
                        />
                        <div className="pizza-info">
                            <h3>{pizza.nom}</h3>
                            <p>{pizza.prix} €</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Cart;
