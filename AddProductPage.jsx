import { useState } from "react";
import "./AddProductPage.css";

function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Product:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <h1>Add New Product</h1>
      <label>
        Product Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={formData.image} onChange={handleChange} required />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={formData.category} onChange={handleChange} required />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductPage;
