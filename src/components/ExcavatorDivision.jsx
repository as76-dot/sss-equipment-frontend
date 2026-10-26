import '../styles/ExcavatorDivision.css';
import excavatorImage from '../assets/Excavator-parts.png';
import toothAdapterImage from '../assets/Tooth-Adapter.png';
import toothImage from '../assets/Tooth.png';
import pistonImage from '../assets/Piston.png';
import sealKitImage from '../assets/Sealkit.png';
import hLinkImage from '../assets/Hlink.png';

function ExcavatorDivision() {
  const trackAssemblyParts = [
    "Track Shoe", "Sprocket", "Carrier Roller",
    "Idler", "Track Link", "Track Roller", "Link Chain"
  ];

  // FIXED: Changed 'image' to an 'images' array to prevent JavaScript syntax errors
  const additionalParts = [
    { 
      title: "Tooth Point & Adaptor", 
      desc: "Heavy-duty ground engaging tools for maximum penetration.",
      images: [toothAdapterImage, toothImage] // Safely holds both images side-by-side
    },
    { 
      title: "Piston Coating Work & Seal Kit", 
      desc: "Premium hydraulic seal kits for leak-free operations.",
      images: [sealKitImage, pistonImage] // Safely holds both images side-by-side
    },
    { 
      title: "H Link", 
      desc: "High-strength linkages for extreme bucket digging forces.",
      images: [hLinkImage] 
    }
  ];

  return (
    <section className="excavator-section">
      <div className="excavator-header">
        <h2 className="excavator-title">Excavator & Undercarriage Parts</h2>
        <div className="title-underline"></div>
      </div>

      <div className="excavator-container">

        {/* TOP ROW: The Yellow Track Assembly Diagram */}
        <div className="track-diagram-wrapper">
          <img src={excavatorImage} alt="Excavator Image" />

          <div className="track-list-container">
            <h3 className="list-title">Core Track Components</h3>
            <ul className="track-list">
              {trackAssemblyParts.map((part, index) => (
                <li key={index}>
                  <span className="bullet-point"></span>
                  {part}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW: Additional Undercarriage Parts */}
        <div className="additional-parts-grid">
          {additionalParts.map((item, index) => (
            <div className="part-card" key={index}>
              
              {/* FIXED: Now maps through the images array and creates real <img> tags */}
              <div className="part-image-mini">
                {item.images.map((imgSrc, i) => (
                  <img key={i} src={imgSrc} alt={`${item.title} part ${i + 1}`} />
                ))}
              </div>
              
              <h4 className="part-title">{item.title}</h4>
              <p className="part-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ExcavatorDivision;