import '../styles/SparesGrid.css';

// --- IMPORTING ALL 30 IMAGES EXACTLY AS NAMED ---
import img1 from '../assets/spares/AccumulatorAssemblies.png';
import img2 from '../assets/spares/Black-BlueElectricValve.png';
import img3 from '../assets/spares/BlackRubberBowls.png';
import img4 from '../assets/spares/ChiselPins.png';
import img5 from '../assets/spares/ControlValves.png';
import img6 from '../assets/spares/CylinderBlocks.png';
import img7 from '../assets/spares/ElectricFootPedalSwitch.png';
import img8 from '../assets/spares/GasChargingKit-PressureGauge.png';
import img9 from '../assets/spares/Gold-ColoredMetalClamps.png';
import img10 from '../assets/spares/High-PressureHydraulicBallValves.png';
import img11 from '../assets/spares/HydraulicHoseClamps.png';
import img12 from '../assets/spares/HydraulicSealKits.png';
import img13 from '../assets/spares/LowerCylinderBlocks.png';
import img14 from '../assets/spares/MountingBracket.png';
import img15 from '../assets/spares/N2GasCharging-Valves-Plugs-HydraulicNipples.png';
import img16 from '../assets/spares/Nb1500Model.png';
import img17 from '../assets/spares/Pistons-TieRods.png';
import img18 from '../assets/spares/SilverBraidedHoses.png';
import img19 from '../assets/spares/SilverThreadedAdapters.png';
import img20 from '../assets/spares/SloggingRingWrenches.png';
import img21 from '../assets/spares/SolenoidValveBlock.png';
import img22 from '../assets/spares/SquareSteelBlock-RoundCap.png';
import img23 from '../assets/spares/SteelValveCylinders.png';
import img24 from '../assets/spares/TallGasCylinders.png';
import img25 from '../assets/spares/ThroughBolts.png';
import img26 from '../assets/spares/ThrustBushes.png';
import img27 from '../assets/spares/Wedge-Blunt-Cone-Moil.png';
import img28 from '../assets/spares/woodencrate-Epirocsealkits-bushes-chiselpaste.png';
import img29 from '../assets/spares/YellowPipes-BlackHosesKit.png';
import img30 from '../assets/spares/YellowShockAbsorberBlocks.png';

function SparesGrid() {
  
  // 10 Rows x 3 Images with Premium Descriptions!
  const groupedSpares = [
    {
      id: 1,
      title: "Impact Tools & Chisels",
      parts: [
        { name: "Heavy-Duty Chisels", desc: "Forged from high-tensile steel, offering absolute penetration and uncompromising wear resistance in the harshest quarry environments." },
        { name: "Chisel Pins", desc: "Precision-machined retaining pins engineered to lock your impact tools securely in place under maximum kinetic load." },
        { name: "Slogging Ring Wrenches", desc: "Industrial-grade striking spanners designed for applying massive torque to your breaker's most critical structural bolts." }
      ],
      images: [img27, img4, img20] 
    },
    {
      id: 2,
      title: "Core Internal Components",
      parts: [
        { name: "Pistons & Tie Rods", desc: "Heavy-mass pistons delivering devastating kinetic energy, secured by high-tensile tie rods." },
        { name: "Cylinder Blocks", desc: "The impenetrable core housing designed to withstand extreme internal operating pressures." },
        { name: "Lower Cylinder Blocks", desc: "Reinforced front heads providing maximum guiding stability for the impact tool." }
      ],
      images: [img17, img6, img13] 
    },
    {
      id: 3,
      title: "Hydraulic Control Systems",
      parts: [
        { name: "Control Valves", desc: "High-pressure control units routing hydraulic fluid with absolute zero latency." },
        { name: "Solenoid Blocks", desc: "Electromagnetic valve assemblies ensuring precise and immediate fluid distribution." },
        { name: "Electric Valves", desc: "Automated hydraulic switching components engineered for optimal breaker responsiveness." }
      ],
      images: [img5, img21, img2] 
    },
    {
      id: 4,
      title: "Accumulators & Diaphragms",
      parts: [
        { name: "Accumulator Assemblies", desc: "Top-tier shock absorbers maintaining kinetic energy and neutralizing destructive pressure spikes." },
        { name: "Rubber Diaphragms", desc: "High-flexibility bowls that separate nitrogen gas from hydraulic oil flawlessly." },
        { name: "Square Steel Blocks", desc: "Heavy-duty mounting caps machined to safeguard the internal accumulator core." }
      ],
      images: [img1, img3, img22] 
    },
    {
      id: 5,
      title: "Gas Charging & Diagnostics",
      parts: [
        { name: "N2 Gas Cylinders", desc: "High-capacity Nitrogen storage cylinders critical for maintaining optimal breaker impact frequency." },
        { name: "Charging Kits & Gauges", desc: "Professional diagnostic tools to accurately measure and replenish nitrogen pressure levels." },
        { name: "Valves & Nipples", desc: "Precision-threaded hydraulic ports enabling safe, fast, and leak-free field maintenance." }
      ],
      images: [img24, img8, img15] 
    },
    {
      id: 6,
      title: "Hydraulic Routing & Hoses",
      parts: [
        { name: "Steel Piping Kits", desc: "Complete yellow steel pipes and black flexible hoses designed for optimized fluid dynamics." },
        { name: "Braided Hoses", desc: "Extreme-pressure, stainless-steel reinforced lines built to survive violent vibrations." },
        { name: "Hydraulic Hose Clamps", desc: "Rubber-lined mounting brackets that secure vulnerable hydraulic lines to the excavator arm." }
      ],
      images: [img29, img18, img11] 
    },
    {
      id: 7,
      title: "Heavy-Duty Hardware",
      parts: [
        { name: "Mounting Brackets", desc: "The crucial upper connection points engineered to link the breaker to the carrier machine." },
        { name: "Track Clamps", desc: "Gold-zinc plated heavy-duty clamps ensuring rigid structural integrity across the equipment." },
        { name: "Through Bolts", desc: "Massive, high-tensile bolts holding the entire breaker assembly together under extreme stress." }
      ],
      images: [img14, img9, img25] 
    },
    {
      id: 8,
      title: "Valves & Adapters",
      parts: [
        { name: "Hydraulic Ball Valves", desc: "Industrial high-pressure shutoff valves for immediate and reliable fluid isolation." },
        { name: "Threaded Adapters", desc: "Silver-machined connecting joints featuring O-rings for a perfect, leak-proof seal." },
        { name: "Valve Cylinders", desc: "Inner sliding spools operating with micro-millimeter precision to direct oil flow." }
      ],
      images: [img10, img19, img23] 
    },
    {
      id: 9,
      title: "Sealing & Wear Protection",
      parts: [
        { name: "Hydraulic Seal Kits", desc: "Comprehensive sets of O-rings, U-cups, and dust seals to prevent any pressure loss." },
        { name: "Thrust Bushes", desc: "Anti-friction guiding rings that dramatically extend the lifespan of the impact chisel." },
        { name: "Shock Absorber Blocks", desc: "Polyurethane cushion dampers that absorb massive recoil to protect the excavator boom." }
      ],
      images: [img12, img26, img30] 
    },
    {
      id: 10,
      title: "Breaker Assemblies & Kits",
      parts: [
        { name: "NB 1500 Breaker", desc: "The complete, fully assembled heavy-duty rock breaker, prepped and ready for deployment." },
        { name: "Maintenance Kits", desc: "Authentic wooden-crated overhaul sets including Epiroc seal kits, bushes, and chisel paste." },
        { name: "Foot Pedal Switches", desc: "Ergonomic and responsive electric cabin controls for safe hydraulic engagement." }
      ],
      images: [img16, img28, img7] 
    }
  ];

  return (
    <div className="spares-page">
      
      <div className="spares-header">
        <h1 className="spares-title">The Anatomy of Unrelenting Force.</h1>
        <div className="spares-divider"></div>
        <p className="spares-subtitle">
          Comprehensive hydraulic rock breaker spares engineered for absolute precision, maximum lifespan, and uncompromising heavy-duty performance.
        </p>
      </div>

      {/* Map through all 10 rows and alternate the background band colors */}
      {groupedSpares.map((group, index) => (
        
        <section className={`color-band ${index % 2 === 0 ? 'band-light' : 'band-dark'}`} key={group.id}>
          
          {/* Centered wrapper for the content, flipping reverse on odd indexes */}
          <div className={`zigzag-wrapper ${index % 2 !== 0 ? 'reverse' : ''}`}>
            
            <div className="bento-grid">
              <div className="bento-box bento-tall">
                <img src={group.images[0]} alt={group.parts[0].name} className="bento-img" />
              </div>
              <div className="bento-box bento-square-top">
                <img src={group.images[1]} alt={group.parts[1].name} className="bento-img" />
              </div>
              <div className="bento-box bento-square-bottom">
                <img src={group.images[2]} alt={group.parts[2].name} className="bento-img" />
              </div>
            </div>

            <div className="zigzag-content">
              <h2 className="zigzag-heading">{group.title}</h2>
              
              {/* Premium Parts List */}
              <ul className="parts-list">
                {group.parts.map((part, i) => (
                  <li key={i}>
                    <strong>{part.name}:</strong> {part.desc}
                  </li>
                ))}
              </ul>

              {/* <button className="cta-btn-small">Request Quotation</button> */}
            </div>

          </div>
        </section>

      ))}

    </div>
  );
}

export default SparesGrid;