import React, { useState } from 'react';

function AddProduct({ setShowAddModal, addNewProduct }) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewProduct(newProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={newProduct.name} onChange={handleChange} required />
      <label>Price:</label>
      <input type="number" name="price" value={newProduct.price} onChange={handleChange} required />
      <label>Description:</label>
      <input type="text" name="description" value={newProduct.description} onChange={handleChange} required />
      <button type="submit">Add Product</button>
      <button type="button" onClick={() => setShowAddModal(false)}>Cancel</button>
    </form>
  );
}

export default AddProduct;