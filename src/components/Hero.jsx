import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';
import stransImage from '../assets/Strans-home.png';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      
      {/* LEFT COLUMN: The Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Unyielding Power<br />
          <span className="hero-metallic-text">Unmatched Reliability</span>
        </h1>
        
        <p className="hero-subtitle">
          South India's premier authorized dealer for STRANS and TOKU hydraulic rock breakers. We deliver world-class heavy machinery, precision VSI rotor parts, and relentless 24/7 service across Tamil Nadu. The true Symbol of Quality.
        </p>
        
        <div className="hero-buttons">
          {/* Primary button uses the metallic theme */}
          <button onClick={() => navigate('/equipment')} className="hero-btn-primary">Explore the STRANS Lineup</button>
          {/* Secondary button uses the dark black theme */}
          <button onClick={() => navigate('/contact')} className="hero-btn-secondary">Request 24/7 Service</button>
        </div>
      </div>

      {/* RIGHT COLUMN: The Image Placeholder */}
      <div className="hero-image-container">
        <img src={stransImage} alt="STRANS Breaker" />
      </div>

    </section>
  );
}

export default Hero;