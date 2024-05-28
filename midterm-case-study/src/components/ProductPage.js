import React, { useState } from "react";
import ViewCart from "./ViewCart";
import Modal from "./Modal";
import axios from "axios";
import { useEffect } from "react";
import "../../src/Styles.css";
import { fetchProducts } from '../api';

function ProductPage() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const getProducts = async (url) => {
      try {
        const fetch = await axios.get(url);
        setProducts(fetch.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts("http://127.0.0.1:8000/api/products");
  }, []);

  useEffect(() => {
<<<<<<< Updated upstream
    const getProducts = async (url) => {
      try {
        const fetch = await axios.get(url);
        setProducts(fetch.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts("http://127.0.0.1:8000/api/products");
=======
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
>>>>>>> Stashed changes
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }

    setShowPopup(true); // Show the popup when an item is added to the cart
    setTimeout(() => setShowPopup(false), 2000); // Hide the popup after 2 seconds
  };

  const removeFromCart = (productId, decrement = false) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === productId) {
          if (decrement && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter(Boolean);
    setCart(updatedCart);
  };

  const checkout = () => {
    console.log(cart);
    setCart([]);
  };

  return (
    <div className="container">
      {!showCart && (
        <button onClick={() => setShowCart(true)}>View Cart</button>
      )}
      {showCart && (
        <Modal onClose={() => setShowCart(false)}>
          <ViewCart
            cart={cart}
            removeFromCart={removeFromCart}
            checkout={checkout}
          />
        </Modal>
      )}

      <br></br>
      <br></br>
      <h1>PRODUCTS</h1>
      <div className="products-container">
        {products?.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
<<<<<<< Updated upstream
            <p>{product.desc}</p>
=======
            <p>{product.desc}</p> {/* Ensure 'desc' matches your database field */}
>>>>>>> Stashed changes
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <Modal onClose={() => setShowPopup(false)}>
          <div className="popup">
            <h2>Item Added to Cart</h2>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProductPage;