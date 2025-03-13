import React, { useState , useEffect } from 'react';
import axios from 'axios';
import '../assets/css/PizzaOrder.css';

function PizzaOrder({ addToCart }) {
    const [pizzas, setPizzas] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState({});
    const [ingredients, setIngredients] = useState([]);


    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+"/api/pizzas")
            .then(response => {
                setPizzas(response.data);
            })
            .catch(error => {
                console.error("Error fetching pizzas:", error);
            });
    }, []);
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/api/ingredients")
            .then(response => {
                setIngredients(response.data);
            })
            .catch(error => {
                console.error("Error fetching ingredients:", error);
            });
    }, []);

    const handleIngredientChange = (pizzaId, ingredient) => {
        setSelectedIngredients({
            ...selectedIngredients,
            [pizzaId]: ingredient
        });
    };

    const handleAddToCart = (pizza) => {
        addToCart(pizza, selectedIngredients[pizza.id] || []);
    };

    return (
        <div className="pizza-order-container">
            <h2>Order Your Pizza</h2>
            <div className="pizzas-wrapper">
                {pizzas.map(pizza => (
                    <div key={pizza.id} className="pizza-item">
                        <img src={pizza.urlPhoto} alt={pizza.nom} className="pizza-image" />
                        <div className="pizza-info">
                            <h3>{pizza.nom}</h3>
                            <p>{pizza.prix} €</p>
                            <div className="ingredients">
                                {/* Affichage dynamique des ingrédients */}
                                {ingredients.map((ingredient) => (
                                    <label key={ingredient.id}>
                                        <input
                                            type="checkbox"
                                            value={ingredient.nom}
                                            onChange={() => handleIngredientChange(pizza.id, ingredient.nom)}
                                        />
                                        {ingredient.nom}
                                    </label>
                                ))}
                            </div>

                            <button onClick={() => handleAddToCart(pizza)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PizzaOrder;