import React from "react";
import styled from "styled-components";
import { useInput } from "../../CustomHooks";
import { signup } from "../../redux/auth/authActionCreators";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [firstName, , firstNameBinder] = useInput("");
  const [lastName, , lastNameBinder] = useInput("");
  const [password, , passwordBinder] = useInput("");

  const [email, , emailBinder] = useInput("");
  const [age, , ageBinder] = useInput("");
  const [country, , countryBinder] = useInput("");
  const [state, , stateBinder] = useInput("");
  const [city, , cityBinder] = useInput("");
  const [phNumber, , phNumberBinder] = useInput("");
  const [address, , addressBinder] = useInput("");
  const [landmark, , landmarkBinder] = useInput("");

  const dispatch = useDispatch();
  // const { isAuthenticated } = useSelector((state) => state.authReducer);
  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      age,
      country,
      state,
      city,
      phNumber,
      address,
      landmark,
      // profileImage,
      firstName,
      lastName,
      password,
    };
    dispatch(signup(userData));
    history.push("/dashboard");
  };
  return (
    <Container>
      <Headline>
        <h1 id="title">MakeStories Form</h1>
        <p id="description">Please fill this form to Signup.</p>
      </Headline>
      <FormContainer onSubmit={submitHandler}>
        <FormDiv>
          <label htmlFor="first-name" id="first-name-label">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            placeholder="Enter your First Name"
            required
            {...firstNameBinder}
          />
        </FormDiv>
        <FormDiv>
          <label htmlFor="last-name" id="last-name-label">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            placeholder="Enter your last name"
            required
            {...lastNameBinder}
          />
        </FormDiv>
        <FormDiv>
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
        <FormDiv>
          <label htmlFor="password" id="password-label">
            Password{" "}
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            {...passwordBinder}
          />
        </FormDiv>

        <FormDiv>
          <label htmlFor="age" id="age-label">
            Age
          </label>
          <input
            type="number"
            id="age"
            placeholder="Age"
            min="18"
            max="70"
            required
            {...ageBinder}
          />
        </FormDiv>
        <FormDiv>
          <label htmlFor="phone" id="phone-label">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="phone"
            required
            {...phNumberBinder}
          />
        </FormDiv>
        <FormDiv>
          <label htmlFor="country" id="country-label">
            Country{" "}
          </label>
          <input
            type="text"
            id="country"
            placeholder="Enter your Country"
            required
            {...countryBinder}
          />
        </FormDiv>
        <FormDiv>
          <label htmlFor="state" id="state-label">
            State{" "}
          </label>
          <input
            type="text"
            id="state"
            placeholder="Enter your State"
            required
            {...stateBinder}
          />
        </FormDiv>
        <FormDiv>
          <label htmlFor="city" id="city-label">
            City{" "}
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter your City"
            required
            {...cityBinder}
          />
        </FormDiv>
        <FormDiv>
          <label htmlFor="house-address">House Address</label>
          <textarea
            id="house-address"
            placeholder="Enter your Address"
            rows="4"
            cols="43"
            required
            {...addressBinder}
          ></textarea>
        </FormDiv>
        <FormDiv>
          <label htmlFor="landmark" id="landmark-label">
            Landmark{" "}
          </label>
          <input
            type="text"
            id="landmark"
            placeholder="Enter your Landmark"
            required
            {...landmarkBinder}
          />
        </FormDiv>
        {/* <FormDiv>
          <label htmlFor="profile-picture" id="profil-picture-label">
            Profile Picture{" "}
          </label>
          <input
            type="file"
            id="profile-picture"
            // required
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
        </FormDiv> */}
        <FormDiv>
          <button id="submit" className="submit-button" type="submit">
            Submit
          </button>
        </FormDiv>
      </FormContainer>
    </Container>
  );
};

export default Signup;

const Container = styled.div``;

const Headline = styled.div`
  text-align: center;
  padding: 1rem;
  #title {
    padding: 5px;
    margin-bottom: 0;
    font-size: 2.5rem;
  }
  #description {
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

  input,
  textarea {
    padding: 10px;
  }
  input {
    outline: none;
  }
  .submit-button {
    padding: 15px;
    margin: 10px 0;
    background-color: #4895ef;
    font-size: inherit;
    color: inherit;
    cursor: pointer;
  }
`;
