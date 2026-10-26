import '../styles/VsiRotorParts.css';
import rotorImage from '../assets/VSI.png';

// 1. Imported exactly from your new vsi-parts folder
import part1 from '../assets/vsi-parts/Part1.png';
import part2 from '../assets/vsi-parts/Part2.png';
import part3 from '../assets/vsi-parts/Part3.png';
import part4 from '../assets/vsi-parts/Part4.png';
import part5 from '../assets/vsi-parts/Part5.png';
import part6 from '../assets/vsi-parts/Part6.png';
import part7 from '../assets/vsi-parts/Part7.png';
import part8 from '../assets/vsi-parts/Part8.png';
import part9 from '../assets/vsi-parts/Part9.png';

function VsiRotorParts() {
  const rotorSpares = [
    "Tip", "D-Cone", "Feed Tube", "Feed Ring", 
    "Mother Plate", "Secondary Tip", "Cavity Plate"
  ];

  // 2. Put them in an array
  const hardwareParts = [part1, part2, part3, part4, part5, part6, part7, part8, part9];

  return (
    <section className="vsi-section">
      <div className="vsi-header">
        <h2 className="vsi-title">VSI Rotor Parts Sales & Service</h2>
        <p className="vsi-subtitle">Precision-engineered replacement parts for maximum crushing efficiency.</p>
      </div>

      <div className="vsi-container">
        
        {/* LEFT COLUMN: The 3D Rotor Cross-Section */}
        <div className="vsi-image-column">
          <img src={rotorImage} alt="VSI Rotor Cross-Section" className="vsi-image" />
        </div>

        {/* RIGHT COLUMN: The Parts List & Image Grid */}
        <div className="vsi-content-column">
          <div className="parts-list-box">
            <h3 className="parts-box-title">High-Wear Rotor Components</h3>
            <div className="parts-grid">
              {rotorSpares.map((part, index) => (
                <div className="part-tag" key={index}>
                  {part}
                </div>
              ))}
            </div>
          </div>

          {/* NEW: The 9-Image Grid Gallery */}
          <div className="vsi-accessories-gallery">
            {/* <h3 className="parts-box-title">Hardware Plates</h3> */}
            <div className="parts-image-grid">
              {hardwareParts.map((imgSrc, index) => (
                <img 
                  key={index} 
                  src={imgSrc} 
                  alt={`Hardware Part ${index + 1}`} 
                  className="part-img" 
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default VsiRotorParts;