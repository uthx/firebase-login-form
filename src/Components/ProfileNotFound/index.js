import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ProfileNotFound = () => {
  const history = useHistory();

  const redirectHandler = () => {
    history.push("/");
  };
  return (
    <Container>
      <Headline>
        <h1 id="title">Please Login First</h1>
      </Headline>
      <FormContainer>
        <FormDiv>
          <button className="redirect" onClick={() => redirectHandler("")}>
            Rediret to Login
          </button>
        </FormDiv>
      </FormContainer>
    </Container>
  );
};

export default ProfileNotFound;
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

const FormContainer = styled.div`
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
  p {
    padding: 0 10px;
  }
  .redirect {
    padding: 15px;
    margin: 10px 0;
    background-color: #480ca8;
    font-size: inherit;
    color: inherit;
    cursor: pointer;
  }
`;
