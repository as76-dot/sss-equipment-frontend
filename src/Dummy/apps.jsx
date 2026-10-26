import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App



import { useState, useEffect } from 'react';

function App() {
  const [equipment, setEquipment] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/equipment')
      .then((response) => response.json())
      .then((data) => setEquipment(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleAddEquipment = async (e) => {
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
      
      const savedPart = await response.json();
      
      setEquipment([...equipment, savedPart]); 
      
      setName('');
      setCategory('');
      setPrice('');
    } catch (error) {
      console.error('Error adding equipment:', error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>SSS Equipment Inventory</h1>

      {/* The Add Equipment Form */}
      <form onSubmit={handleAddEquipment} style={{ marginBottom: '30px', padding: '15px', border: '2px dashed #007bff' }}>
        <h3>Add New Part</h3>
        <input 
          type="text" 
          placeholder="Part Name (e.g., RAM 8GB)" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ marginRight: '10px' }}
          required 
        />
        <input 
          type="text" 
          placeholder="Category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          style={{ marginRight: '10px' }}
          required 
        />
        <input 
          type="number" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          style={{ marginRight: '10px' }}
          required 
        />
        <button type="submit" style={{ padding: '5px 15px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
          Add to Stock
        </button>
      </form>

      {/* The Equipment List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {equipment.map((item) => (
          <div key={item._id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h3>{item.name}</h3>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Price:</strong> Rs. {item.price}</p>
            <p><strong>Status:</strong> {item.inStock ? 'In Stock 🟢' : 'Out of Stock 🔴'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import ProductGrid from './components/ProductGrid'
// import SparesGrid from './components/SparesGrid'
// import ContactForm from './components/ContactForm'
// import Footer from './components/Footer'

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <ProductGrid />
//       <SparesGrid />
//       <ContactForm />
//       <Footer />
//     </div>
//   )
// }

// export default App