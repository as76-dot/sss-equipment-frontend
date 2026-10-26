import { useNavigate } from 'react-router-dom';
import '../styles/AuthorizedDealer.css';
import tokuImage from '../assets/Toku-img.png';

function AuthorizedDealer() {
  const navigate = useNavigate();

  return (
    <section className="dealer-section">
      <div className="dealer-container">
        
        {/* LEFT COLUMN: TOKU Breaker Image */}
        <div className="dealer-image-wrapper">
          <img src={tokuImage} alt="TOKU Breaker" className="dealer-image" />
        </div>

        {/* RIGHT COLUMN: The Authority Text & Button */}
        <div className="dealer-content">
          <h4 className="dealer-subtitle">OFFICIAL PARTNER</h4>
          <h2 className="dealer-title">
            Authorized Dealer For <br/>
            <span className="text-highlight">Tamil Nadu</span>
          </h2>
          
          <p className="dealer-description">
            Accept no substitutes. SSS Equipment Tools is the premier authorized distributor for genuine TOKU hydraulic rock breakers. Engineered in Japan for maximum impact frequency and unmatched durability, our breakers are built to conquer the toughest terrains in South India.
          </p>
          
          <ul className="dealer-features">
            <li>✓ 100% Authentic TOKU Machinery</li>
            <li>✓ Comprehensive Warranty Coverage</li>
            <li>✓ Expert On-Site Installation</li>
          </ul>

          {/* <button 
            onClick={() => navigate('/equipment')} 
            className="dealer-btn">
            View Breaker Specifications
          </button> */}
        </div>

      </div>
    </section>
  );
}

export default AuthorizedDealer;