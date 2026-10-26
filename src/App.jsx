import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import ProductGrid from './components/ProductGrid';
import SparesGrid from './components/SparesGrid';
import ContactForm from './components/ContactForm'; 
import Footer from './components/Footer';          
import AddProduct from './components/AddProduct';
import AuthorizedDealer from './components/AuthorizedDealer';
import BrandsRibbon from './components/BrandsRibbon';
import ExcavatorDivision from './components/ExcavatorDivision';
import VsiRotorParts from './components/VsiRotorParts';
import ConsumablesSpares from './components/ConsumablesSpares';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Route 1: The Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <AuthorizedDealer />
              <BrandsRibbon />
              <ExcavatorDivision />
              <VsiRotorParts />
              <ConsumablesSpares />

            </>
          } 
        />
        
        {/* Route 2: The Equipment Catalog */}
        <Route path="/equipment" element={<ProductGrid />} />

        {/* Route 3: The Spares Catalog */}
        <Route path="/spares" element={<SparesGrid />} />
        
        {/* Route 4: The Contact / Service Page */}
        <Route path="/contact" element={<ContactForm />} />

        <Route path="/admin" element={<AddProduct />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;