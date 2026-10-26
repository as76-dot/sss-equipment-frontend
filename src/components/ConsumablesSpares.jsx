import '../styles/ConsumablesSpares.css';

// Import your organized images directly from the new folder
import greaseImg from '../assets/consumable-spares/VsiGrease.png';
import filterImg from '../assets/consumable-spares/ExcavatorFilter.png';
import pinBushImg from '../assets/consumable-spares/PinBushSets.png';

function ConsumablesSpares() {
  const products = [
    {
      id: 1,
      title: "Shell Gadus VSI Grease",
      category: "Lubrication",
      description: "Premium heavy-duty industrial grease designed for extreme temperatures and high-load applications.",
      image: greaseImg,
      imgClass: "img-grease" // Specific control for Grease
    },
    {
      id: 2,
      title: "Excavator Filter Sets",
      category: "Engine & Hydraulics",
      description: "High-efficiency oil, fuel, and air filters engineered to protect your critical machinery components.",
      image: filterImg,
      imgClass: "img-filter" // Specific control for Filters
    },
    {
      id: 3,
      title: "Pin & Bush Sets",
      category: "Linkage Hardware",
      description: "Hardened steel pins and precision bushings for durable bucket arm and linkage repair.",
      image: pinBushImg,
      imgClass: "img-pinbush" // Specific control for Pins
    }
  ];

  return (
    <section className="consumables-section">
      <div className="consumables-header">
        <h2 className="consumables-title">Essential Consumables & Spares</h2>
        <p className="consumables-subtitle">Fast-moving, authentic maintenance supplies to keep your fleet running 24/7.</p>
      </div>

      <div className="consumables-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            
            {/* The Transparent Image Box */}
            <div className="product-image-box">
              <img src={item.image} alt={item.title} className={`consumable-img ${item.imgClass}`} />
            </div>
            
            {/* The Content (Buttons Removed) */}
            <div className="product-info">
              <span className="product-category">{item.category}</span>
              <h3 className="product-name">{item.title}</h3>
              <p className="product-desc">{item.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default ConsumablesSpares;