import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Login = () => {
  const { login } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [prefill, setPrefill] = useState(null);

  useEffect(() => {
    const pending = localStorage.getItem('cogniva:pendingUser');
    if (pending) setPrefill(JSON.parse(pending));
  }, []);

  useEffect(() => {
    if (prefill?.email) setForm((f) => ({ ...f, email: prefill.email }));
  }, [prefill]);

  const onSubmit = (e) => {
    e.preventDefault();
    login(form.email, form.password);
    nav('/'); // go to landing, navbar will now show profile and Get Started will enter dashboard
  };

  return (
    <section className="auth-page">
      <div className="container auth-grid">
        <div className="auth-card glass">
          <h2>Welcome back, Doctor</h2>
          <p className="muted">Log in with your credentials to continue.</p>
          <form onSubmit={onSubmit} className="form">
            <label>
              <span>Email</span>
              <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
            </label>
            <label>
              <span>Password</span>
              <input type="password" required value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} />
            </label>
            <button className="btn btn-primary glow" type="submit">Log In</button>
          </form>
          <p className="muted small">New here? <Link to="/signup">Create an account</Link></p>
        </div>
        <div className="auth-art">
          <img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1400&auto=format&fit=crop" alt="Login illustration"/>
        </div>
      </div>
    </section>
  );
};

export default Login;
