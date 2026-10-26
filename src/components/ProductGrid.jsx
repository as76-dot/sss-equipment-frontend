// Ensure your import path matches your actual data file name! 
// (I am using 'equipmentData' based on our previous step)
import { stransBreakers } from '../data/equipment';
import '../styles/ProductGrid.css';

function ProductGrid() {
  return (
    <div className="catalog-page">
      
      {/* Premium Classic Header */}
      <div className="catalog-header">
        <h1 className="catalog-title">Premium Product Portfolio</h1>
        <div className="classic-divider"></div>
        
        {/* The Premium STRANS Quote */}
        <div className="premium-quote-container">
          <blockquote className="strans-quote">
            "Engineered for relentless power and uncompromising durability. STRANS rock breakers define the pinnacle of heavy machinery performance, delivering absolute precision in the most demanding terrains."
          </blockquote>
        </div>
      </div>

      {/* Centered 2-Column Grid */}
      <div className="catalog-grid-wrapper">
        <div className="catalog-grid">
          {stransBreakers.map((breaker) => (
            <div className="classic-card" key={breaker.id}>
              
              {/* Header of the Card */}
              <div className="card-header">
                <h2 className="model-designation">MODEL: {breaker.model}</h2>
                <span className="brand-label">STRANS</span>
              </div>

              {/* Content Layout */}
              <div className="card-body">
                
                {/* UPDATED: The Image Wrapper with Real Images */}
                <div className="card-image-wrapper">
                  <img src={breaker.image} alt={breaker.model} className="breaker-img" />
                </div>

                <div className="card-specs-wrapper">
                  <table className="classic-spec-table">
                    <tbody>
                      {/* Specs matched exactly to your flyer image */}
                      <tr>
                        <th>Total Weight (kg)</th>
                        <td>{breaker.specs.weight}</td>
                      </tr>
                      <tr>
                        <th>Hydraulic Pressure (bar)</th>
                        <td>{breaker.specs.pressure}</td>
                      </tr>
                      <tr>
                        <th>Oil Flow Range (L/min)</th>
                        <td>{breaker.specs.flow}</td>
                      </tr>
                      <tr>
                        <th>Dia of Hose (Inch)</th>
                        <td>{breaker.specs.hose}</td>
                      </tr>
                      <tr>
                        <th>Dia of Tool (mm)</th>
                        <td>{breaker.specs.toolDia}</td>
                      </tr>
                      <tr>
                        <th>Impact Frequency (BPM)</th>
                        <td>{breaker.specs.bpm}</td>
                      </tr>
                      <tr>
                        <th>Suitable Carrier (Ton)</th>
                        <td>{breaker.specs.carrier}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* REMOVED: The card-footer and inquiry button have been completely deleted! */}

            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default ProductGrid;