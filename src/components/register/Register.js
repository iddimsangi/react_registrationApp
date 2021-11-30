import React from "react";
import "./Register.scss";
function Register() {
  return (
    <div className="register">
      <h1>register now</h1>
      <form action="#" className="register-form">
        <div className="form-group">
          <input
            type="text"
            name="Full name"
            className="form-input"
            placeholder="Full Name"
            id="inputName"
            // value=""
            required
          />
          <label htmlFor="inputName">Full Name</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            name="Email Address"
            className="form-input"
            placeholder="Email Address"
            id="inputEmail"
            // value=""
            required
          />
          <label htmlFor="inputEmail">Full Name</label>
        </div>
        <a href="#" className="btn">register</a>
      </form>
    </div>
  );
}

export default Register;
