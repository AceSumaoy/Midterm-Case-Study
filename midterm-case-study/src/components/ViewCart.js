import React, { useState } from 'react';
import "../../src/Styles.css";

function ViewCart({ cart, removeFromCart, checkout }) {
  const calculateTotalPrice = (price, quantity) => {
    return parseFloat(price) * quantity;
  };

  const getTotalPriceForCart = () => {
    return cart.reduce((total, item) => {
      return total + calculateTotalPrice(item.price, item.quantity);
    }, 0);
  };

  const getTotalItemsInCart = () => {
    return cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

  const handleRemove = (itemId) => {
    const existingItem = cart.find(item => item.id === itemId);
    if (existingItem.quantity > 1) {
      removeFromCart(itemId, 1);
    } else {
      removeFromCart(itemId, 0);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: ""
  });
  const [amountGiven, setAmountGiven] = useState("");
  const [change, setChange] = useState(0);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCheckout = () => {

    checkout(); 
    toggleModal();
    setShippingDetails({
      fullName: "",
      address: "",
      city: ""
    });
    setAmountGiven("");
    setChange(0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAmountGiven = (e) => {
    const { value } = e.target;
    setAmountGiven(value);

    const totalPrice = getTotalPriceForCart();
    const changeValue = parseFloat(value) - totalPrice;
    setChange(changeValue > 0 ? changeValue : 0);
  };

  return (
    <div className="cart-container"> {/* Added cart-container class */}
      <h2>Shopping Cart</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ddd' }}>Item</th>
            <th style={{ borderBottom: '1px solid #ddd' }}>Price</th>
            <th style={{ borderBottom: '1px solid #ddd' }}>Quantity</th>
            <th style={{ borderBottom: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>₱{item.price}.00</td>
              <td>{item.quantity}</td>
              <td>
                <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleRemove(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <p><strong>Total Price:</strong> ₱{getTotalPriceForCart()}</p>
      <button onClick={toggleModal}>Checkout</button>

      {/* Modal for Checkout */}
      {showModal && (
        <div className="modals">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Checkout</h2>
            <form>
              <label htmlFor="fullName">Full Name:</label>
              <input type="text" id="fullName" name="fullName" value={shippingDetails.fullName} onChange={handleChange} />

              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" value={shippingDetails.address} onChange={handleChange} />

              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" value={shippingDetails.city} onChange={handleChange} />

              <label htmlFor="amountGiven">Amount Given:</label>
              <input type="number" id="amountGiven" name="amountGiven" value={amountGiven} onChange={handleAmountGiven} />

              <label htmlFor="change">Change:</label>
              <input type="text" id="change" name="change" value={change.toFixed(2)} readOnly />

            </form>
            <button onClick={handleCheckout}>Complete Purchase</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewCart;
