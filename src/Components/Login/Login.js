import React, { useEffect } from "react";
import styled from "styled-components";
import { login } from "../../redux/auth/authActionCreators";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../.././CustomHooks";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [email, setEmail, emailBinder] = useInput("");
  const [loginPassword, setLoginPassword, passwordBinder] = useInput("");
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated } = useSelector((state) => state.authReducer);
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, loginPassword));
    setEmail("");
    setLoginPassword("");
    // if (isAuthenticated) {
    //   history.push("/dashboard");
    // } else {
    //   console.log("nana check password first");
    // }
  };
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);
  const signupHandler = (path) => {
    history.push(path);
  };

  return (
    <Container>
      <Headline>
        <h1 className="title">MakeStories Form</h1>
        <p className="description">Please Login</p>
      </Headline>
      <FormContainer onSubmit={loginHandler}>
        <FormDiv className="form-div">
          <label htmlFor="email" id="email-label">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            required
            {...emailBinder}
          />
        </FormDiv>

        <FormDiv className="form-div">
          <label htmlFor="password" id="password-label">
            Password{" "}
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            required
            {...passwordBinder}
          />
        </FormDiv>
        <FormDiv className="form-div">
          <button id="submit" className="login-button" type="submit">
            Login
          </button>
        </FormDiv>
      </FormContainer>
      <SignupContainer>
        <p className="description">New Here? Consider Signing up.</p>
        <FormDiv className="form-div">
          <button
            id="signup"
            className="signup-button"
            onClick={() => signupHandler("/signup")}
          >
            Signup
          </button>
        </FormDiv>
      </SignupContainer>
    </Container>
  );
};

export default Login;
const Container = styled.div``;

const Headline = styled.div`
  text-align: center;
  padding: 1rem;
  .title {
    padding: 5px;
    margin-bottom: 0;
    font-size: 2.5rem;
  }
  .description {
    font-style: italic;
    margin-top: 0;
    font-size: 1.5rem;
  }
`;

const FormContainer = styled.form`
  max-width: 660px;
  margin: auto;
  background-color: rgb(54, 80, 136);
  border-radius: 5px;
  padding: 1.5rem;
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  label {
    padding: 10px 0;
  }
  p {
    margin: 0;
    padding: 10px 0;
  }

  input {
    outline: none;
    padding: 10px;
  }
  .login-button {
    padding: 15px;
    margin: 10px 0;
    background-color: #4895ef;
    font-size: inherit;
    color: inherit;
    cursor: pointer;
  }
  .signup-button {
    padding: 15px;
    margin: 10px 0;
    background-color: #480ca8;
    font-size: inherit;
    color: inherit;
    cursor: pointer;
  }
`;
const SignupContainer = styled.div`
  max-width: 660px;
  margin: auto;
  background-color: rgb(54, 80, 136);
  border-radius: 5px;
  padding: 1.5rem;
  font-size: 1.3rem;
  margin-bottom: 10px;
`;
