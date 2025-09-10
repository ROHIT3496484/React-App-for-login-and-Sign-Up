import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Comp.css";

export default function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const fakeSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="page-wrap2">
      <div className="card card-wide">
        <div className="card-header">
          <div className="title">Create new Account</div>
        </div>

        <div className="card-body">
          <form className="form-inner grid-2" onSubmit={fakeSubmit}>
            <div>
              <label className="field-label"></label>
              <div className="input-wrap">
                <input className="underline-input " type="text" name="name" placeholder="NAME" />
              </div>
            </div>

            <div>
              <label className="field-label"></label>
              <div className="input-wrap">
                <input className="underline-input" type="text" name="username" placeholder="USERNAME"/>
              </div>
            </div>

            <div>
              <label className="field-label"></label>
              <div className="input-wrap">
                <input className="underline-input" type="email" name="email" placeholder="EMAIL"/>
              </div>
            </div>

            <div>
              <label className="field-label"></label>
              <div className="input-wrap">
                <input className="underline-input" type="tel" name="phone" placeholder="PHONE NO." />
              </div>
            </div>

            <div>
              <label className="field-label"></label>
              <div className="input-wrap pwd-wrap">
                <input className="underline-input" type={showPass ? "text" : "password"} name="password"  placeholder="NEW PASSWORD"/>
                <button type="button" className="eye-btn" onClick={() => setShowPass(s => !s)}>
                  <svg width="18" height="12" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.5">
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <label className="field-label"></label>
              <div className="input-wrap pwd-wrap">
                <input className="underline-input" type={showConfirm ? "text" : "password"} name="confirm" placeholder="CONFIRM NEW PASSWORD" />
                <button type="button" className="eye-btn" onClick={() => setShowConfirm(s => !s)}>
                  <svg width="18" height="12" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.5">
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div className="btn-right">
              <button className="action-btn pill" type="submit">SIGN UP</button>
            </div>

            <div className="grid-span">
              <div className="small-footer">
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
