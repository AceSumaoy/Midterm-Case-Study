import React, { useState, useEffect } from 'react';

function EditProduct({ editingProduct, setEditingProduct, onUpdate }) {
  const [updatedProduct, setUpdatedProduct] = useState(editingProduct);

  useEffect(() => {
    setUpdatedProduct(editingProduct);
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={updatedProduct.name} onChange={handleChange} required />
      <label>Price:</label>
      <input type="number" name="price" value={updatedProduct.price} onChange={handleChange} required />
      <label>Description:</label>
      <input type="text" name="description" value={updatedProduct.description} onChange={handleChange} required />
      <button type="submit">Update Product</button>
      <button type="button" onClick={() => setEditingProduct(null)}>Cancel</button>
    </form>
  );
}

export default EditProduct;