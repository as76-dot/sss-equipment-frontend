import { useState } from 'react';

function AddProduct() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const newPart = {
      name: name,
      category: category,
      price: Number(price),
      inStock: true
    };

    try {
      const response = await fetch('http://localhost:5000/api/equipment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPart),
      });
      
      if (response.ok) {
        alert("Product added successfully! Refresh the page to see it.");
        setName('');
        setCategory('');
        setPrice('');
      }
    } catch (error) {
      console.error('Error adding equipment:', error);
    }
  };

  return (
    <section style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2>Admin Panel: Add New Equipment</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Product Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Category: </label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Price (Rs): </label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Save to Database
        </button>
      </form>
    </section>
  );
}

export default AddProduct;