import React from 'react';
import AlokKulkarni from '../assets/Alok Kulkarni.jpg';
import ShivranjanBali from '../assets/Shivranjan bali.jpg';

const testimonials = [
  {
    name: 'Dr. Alok Kulkarni',
    role: 'Manas Institute of Mental Health',
    avatar: AlokKulkarni,
  },
  {
    name: 'Dr. Shivranjan Bali',
    role: 'HCG Suchirayu',
    avatar: ShivranjanBali,
  },
  {
    name: 'Dr. Ajitha Desai',
    role: 'Mahesh Desai Clinic',
    avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2> Our Partners </h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-author">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/100';
                  }}
                />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p className="role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
