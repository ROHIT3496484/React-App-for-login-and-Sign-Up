import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Comp.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="page-wrap1">
      <div className="card">
        <div className="card-header">
          <div className="title">Login</div>
          <div className="subtitle">Sign in to continue</div>
        </div>

        <div className="card-body">
          <div className="form-inner">
            <label className="field-label">USERNAME</label>
            <div className="input-wrap">
              <input className="underline-input" type="text" aria-label="username" />
            </div>

            <label className="field-label">NEW PASSWORD</label>
            <div className="input-wrap pwd-wrap">
              <input
                className="underline-input"
                type={showPassword ? "text" : "password"}
                aria-label="password"
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword((s) => !s)}
                aria-label="toggle password"
              >
                {/* small inline svg eye for a clean look */}
                <svg width="18" height="12" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.5">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>

            <div className="center-row">
              <button className="action-btn">LOGIN</button>
            </div>

            <div className="footer-text">
              Don’t have Account? <Link to="/signup">SignUp</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
