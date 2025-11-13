import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Signup = () => {
  const { signup } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    signup(form.name, form.email, form.password);
    nav('/login');
  };

  return (
    <section className="auth-page">
      <div className="container auth-grid">
        <div className="auth-card glass">
          <h2>Create your doctor account</h2>
          <p className="muted">Sign up to access CognivaHealth tools.</p>
          <form onSubmit={onSubmit} className="form">
            <label>
              <span>Name</span>
              <input type="text" required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
            </label>
            <label>
              <span>Email</span>
              <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
            </label>
            <label>
              <span>Password</span>
              <input type="password" required value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} />
            </label>
            <button className="btn btn-primary glow" type="submit">Sign Up</button>
          </form>
          <p className="muted small">Already have an account? <a href="/login">Log in</a></p>
        </div>
        <div className="auth-art">
          <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1400&auto=format&fit=crop" alt="Doctor portal"/>
        </div>
      </div>
    </section>
  );
};

export default Signup;
