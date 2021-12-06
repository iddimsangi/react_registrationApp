import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./Register.scss";
function Register(props) {
  const [personDetail, setpersonDetail] = useState({
    fullName: "",
    emailAddress: "",
  });
  // const history = useHistory();
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();

    setpersonDetail({
      fullName: "",
      emailAddress: "",
    });
    console.log(personDetail);
    navigate("/RegisteredList");
    return props.personRegistered(personDetail);
  };

  return (
    <div className="register">
      <h1>register now</h1>
      <form action="#" className="register-form" onSubmit={register}>
        <div className="form-group">
          <input
            type="text"
            name="Full name"
            className="form-input"
            placeholder="Full Name"
            id="inputName"
            value={personDetail.fullName}
            onChange={(e) => {
              setpersonDetail({ ...personDetail, fullName: e.target.value });
            }}
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
            value={personDetail.emailAddress}
            onChange={(e) => {
              setpersonDetail({
                ...personDetail,
                emailAddress: e.target.value,
              });
            }}
            required
          />
          <label htmlFor="inputEmail">Full Name</label>
        </div>
        {/* <a href="#" onClick={register} type="submit" className="btn">register</a> */}

        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
