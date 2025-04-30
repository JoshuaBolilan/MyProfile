// components/Footer.js
import React from 'react';

const footerStyle = {
  marginTop: 'auto',
  padding: '1rem',
  textAlign: 'center',
  backgroundColor: '#007bff',
  color: '#ffffff',
  width: '100%',
  maxWidth: '800px',
  borderRadius: '8px',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      © {new Date().getFullYear()} Your Name. All rights reserved.
    </footer>
  );
};

export default Footer;
