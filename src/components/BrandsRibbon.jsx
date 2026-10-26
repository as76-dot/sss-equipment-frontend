import '../styles/BrandsRibbon.css';

function BrandsRibbon() {
  // Array of all the brands from your flyer
  const brands = [
    "STRANS", "PRALCKA", "METSO", "HAILSTONES", "DEEPA", "PROPEL", 
    "SANDVIK", "PUZZOLANA", "GEECO", "PROMAN", "ITR", "TOKU"
  ];

  return (
    <section className="brands-section">
      <div className="brands-container">
        <div className="brands-track">
          {/* We map the brands twice to create a seamless infinite loop */}
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">{brand}</div>
          ))}
          {brands.map((brand, index) => (
            <div key={`duplicate-${index}`} className="brand-item">{brand}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsRibbon;