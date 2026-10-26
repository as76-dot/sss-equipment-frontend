import { stransBreakers } from '../data/equipmentData'; // FIXED: Imported the correct array name
import '../styles/Equipment.css';

function Equipment() {
  return (
    <section className="equipment-page">
      
      <div className="equipment-header">
        <h1 className="equipment-title">Our Premium Lineup</h1>
        <p className="equipment-subtitle">Browse our authorized inventory of heavy-duty hydraulic rock breakers.</p>
      </div>

      <div className="equipment-grid">
        {stransBreakers.map((item) => (
          <div key={item.id} className="equipment-card">
            
            {/* NEW: Replaced placeholder with the actual Image Box */}
            <div className="card-image-box">
              <img src={item.image} alt={item.model} className="equipment-img" />
            </div>

            {/* Card Content */}
            <div className="card-content">
              <span className="brand-badge">{item.brand}</span>
              <h2 className="model-name">{item.model}</h2>
              
              {/* Quick Specs List */}
              <ul className="quick-specs">
                <li><strong>Weight:</strong> {item.specs.weight}</li>
                <li><strong>Carrier:</strong> {item.specs.carrier}</li>
                <li><strong>Tool Dia:</strong> {item.specs.toolDia}</li>
              </ul>

              {/* FIXED: Changed text to Request Quotation */}
              <button className="metallic-btn-small">Request Quotation</button>
            </div>
            
          </div>
        ))}
      </div>

    </section>
  );
}

export default Equipment;