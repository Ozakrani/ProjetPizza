import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Cart() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/api/pizzas")
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
            <ul>
                {pizzas.map((pizza) => (
                    <li key={pizza.id}>
                        {pizza.nom} - {pizza.prix} € - {pizza.urlPhoto}

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
