import { useState } from 'react';
import '../styles/ContactForm.css';

function ContactForm() {

  // 1. Create a state to hold all the form data
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    message: ''
  });

  // 2. Function to update state when the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // 3. Function to format data and open WhatsApp
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing

    // Write the message exactly how you want it to look using normal line breaks
    const rawMessage = `*New Inquiry from Website*

*Name:* ${formData.fullName}
*Company:* ${formData.companyName}
*Phone:* ${formData.phoneNumber}
*Email:* ${formData.emailAddress}

*Requirements:*
${formData.message}`;

    // Let JavaScript safely encode the spaces and line breaks for the URL
    const whatsappMessage = encodeURIComponent(rawMessage);

    // Target Phone Number (Salem HQ)
    const targetPhone = '919003072102';

    // Open WhatsApp Web/App in a new tab
    const whatsappURL = `https://wa.me/${targetPhone}?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="contact-page">

      {/* PREMIUM HERO HEADER */}
      <div className="contact-header">
        <h1 className="contact-title">Deploy Unmatched Power. Reach Out Today.</h1>
        <div className="contact-divider"></div>
        <p className="contact-subtitle">
          Connect with our engineering experts for customized rock breaker quotations, precise VSI rotor parts, or 24/7 emergency on-site service.
        </p>
      </div>

      {/* COMMAND CENTER: SPLIT LAYOUT */}
      <div className="contact-container">

        {/* LEFT COLUMN: Location Cards */}
        <div className="contact-info-column">

          <div className="location-card">
            <h3 className="location-title">Salem Headquarters</h3>
            <p className="location-address">
              📍 No. 3/104, Naranampalayam Privu,<br />
              Near Omalur Tollgate, Kottagoundampatti -PO,<br />
              Omalur -TK, Salem - 636 011.
            </p>
            <div className="location-details">
              <p>📞 90030 72102, 77087 12102, 97919 39402</p>
              <p>✉️ sssequipmenttools@yahoo.in</p>
            </div>
          </div>

          <div className="location-card">
            <h3 className="location-title">Chennai Branch</h3>
            <p className="location-address">
              📍 No.475/31-A, Anna Salai,<br />
              Nandanam,<br />
              Chennai - 600 035.
            </p>
            <div className="location-details">
              <p>📞 90030 72101, 94441 85269</p>
              <p>✉️ skpneumatics@yahoo.co.in</p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: The B2B Form */}
        <div className="contact-form-column">
          <div className="form-wrapper">
            <h2 className="form-heading">Request a Quotation</h2>

            {/* Added onSubmit handler here */}
            <form className="b2b-form" onSubmit={handleWhatsAppSubmit}>

              <div className="form-group">
                <label>Full Name</label>
                {/* Added name attribute, value, and onChange */}
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g., Karthik R."
                  required
                />
              </div>

              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your Construction / Mining Firm"
                  required
                />
              </div>

              <div className="form-group split-group">
                <div className="sub-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+91"
                    required
                  />
                </div>
                <div className="sub-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Message / Requirements</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe the specific equipment, spares, or service you require..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send via WhatsApp</button>
            </form>

            <div className="trust-badge">
              <p>🚨 <strong>24/7 Emergency On-Site Service Available Across Tamil Nadu.</strong></p>
            </div>
          </div>
        </div>

      </div>

      {/* FULL WIDTH GOOGLE MAPS EMBED */}
      <div className="map-container">
        <iframe
          title="SSS Equipment Tools Salem Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.635815525547!2d78.0772!3d11.7226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babfa9b66a506b7%3A0x8e833481b7e1c8d5!2sOmalur%20Toll%20Plaza!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

    </div>
  );
}

export default ContactForm;