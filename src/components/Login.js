import React, { useState } from "react";

// Redux
import { connect } from "react-redux";
import { signIn } from "../store/actions/loginActions";

// Prop-types
import PropTypes from "prop-types";

const Login = ({ actions }) => {
  // State
  const [data, saveData] = useState({ email: "", password: "" });

  const readData = e => {
    saveData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const sendData = e => {
    e.preventDefault();

    const { email, password } = data;

    // Validate
    if (email === "" || password === "") {
      alert("Los campos no pueden ir vacíos");
      return;
    }

    actions.signIn(data);
  };

  return (
    <div className="login">
      <form
        onSubmit={sendData}
        className="d-flex flex-column center login-form"
      >
        <img
            src="data:image/png;base64,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"
            alt="Logo Tauros"
            className="img"
          />
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          onChange={readData}
        />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={readData}
        />
        <input type="submit" value="Sign In" className="btn" />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: {
    signIn: payload => dispatch(signIn(payload))
  }
});

Login.propTypes = {
  actions: PropTypes.object.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
