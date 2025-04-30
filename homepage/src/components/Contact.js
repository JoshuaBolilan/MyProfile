// import React, { useState } from 'react';

// const Contact = () => {
//     const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//     const [submitted, setSubmitted] = useState(false);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSubmitted(true);
//     };

//     const handleReset = () => {
//         setFormData({ name: '', email: '', message: '' });
//         setSubmitted(false);
//     };

//     return (
//         <div className="contact-page" style={{ backgroundColor: '#e6f2e6', color: '#006600', padding: '20px' }}>
//             {submitted ? (
//                 <div>
//                     <h1>Thank you, {formData.name}!</h1>
//                     <p>Your message has been sent.</p>
//                     <p>Email: <a href={`mailto:${formData.email}`} style={{ color: '#006600' }}>{formData.email}</a></p>
//                     <p>Message: {formData.message}</p>
                    
//                     {/* Add GitHub and LinkedIn links */}
//                     <p>
//                         Check out my profiles:
//                         <br />
//                         GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: '#006600' }}>GitHub Profile</a>
//                         <br />
//                         LinkedIn: <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: '#006600' }}>LinkedIn Profile</a>
//                     </p>
                    
//                     <button onClick={handleReset} className="btn btn-primary" style={{ marginTop: '20px' }}>
//                         Send Another Message
//                     </button>
//                 </div>
//             ) : (
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label>Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="form-control"
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label>Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="form-control"
//                             required
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label>Message</label>
//                         <textarea
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             className="form-control"
//                             required
//                         />
//                     </div>

//                     <button type="submit" className="btn btn-success">
//                         Submit
//                     </button>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default Contact;
import React from 'react';

const Education = () => {
  return (
    <div style={cardStyle}>
    
      <h1>Contact</h1>
      <ul>
        <strong>Email :</strong> <a href='joshuabolilan003@gmail.com'> joshuabolilan@gmail.com</a> <br></br>
        <strong>Github :</strong> <a href='https://github.com/JoshuaBolilan'> JoshuaBolilan</a> 
       
      </ul>
    </div>
  );
};

const cardStyle = {
  backgroundColor: '#f9f9f9',
  padding: '2rem', 
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default Education;
