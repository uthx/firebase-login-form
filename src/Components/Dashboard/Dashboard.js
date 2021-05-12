import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authActionCreators";
import { getUserData, updateUserData } from "../../helper/firebaseHelpers";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "90%",
    },
  },
}));

const Dashboard = () => {
  const [uid, setUid] = useState();
  const [isUpdated, setIsUpdated] = useState(false);
  const [userData, setUserData] = useState();
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.authReducer);
  console.log("->", isAuthenticated);
  const logoutHandler = () => {
    dispatch(logout());
    // history.push("/");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("hello");
        setUid(user.uid);
        getUserData(user.uid).then((docData) => setUserData(docData));
      }
    });
    return () => {
      setUid("");
      setUserData({});
    };
  }, []);

  console.log(userData);

  const updateHandler = (e) => {
    setIsUpdated(true);
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    await updateUserData(uid, userData);
    alert("Your details have been updated");
  };
  return (
    <div>
      <Container>
        <Headline>
          <h1 id="title">MakeStories User Details</h1>
          <p id="description">Below are your entered details.</p>
        </Headline>
        <FormContainer>
          <FormDiv>
            <p>First Name : </p>
            <div className={classes.root}>
              <TextField
                required
                name="firstName"
                id="standard-required"
                value={userData?.firstName}
                onChange={(e) => updateHandler(e)}
                inputProps={{
                  style: { color: "white", fontSize: "30px" },
                }}
              />
            </div>
          </FormDiv>
          <FormDiv>
            <p> Last Name</p>
            <div className={classes.root}>
              <TextField
                required
                name="lastName"
                id="standard-required"
                value={userData?.lastName}
                onChange={(e) => updateHandler(e)}
                // onChange={}
                inputProps={{
                  style: { color: "white", fontSize: "30px" },
                }}
              />
            </div>
          </FormDiv>

          <FormDiv>
            <p>Age :</p>
            <div className={classes.root}>
              <TextField
                required
                name="age"
                id="standard-required"
                onChange={(e) => updateHandler(e)}
                value={userData?.age}
                // onChange={}
                inputProps={{
                  style: { color: "white", fontSize: "30px" },
                }}
              />
            </div>
          </FormDiv>
          <FormDiv>
            <p>Phone :</p>
            <div className={classes.root}>
              <TextField
                required
                name="phNumber"
                id="standard-required"
                value={userData?.phNumber}
                onChange={(e) => updateHandler(e)}
                // onChange={}
                inputProps={{
                  style: { color: "white", fontSize: "30px" },
                }}
              />
            </div>
          </FormDiv>
          <FormDiv>
            <p>Country :</p>
            <div className={classes.root}>
              <TextField
                required
                name="country"
                id="standard-required"
                value={userData?.country}
                onChange={(e) => updateHandler(e)}
                // onChange={}
                inputProps={{
                  style: { color: "white", fontSize: "30px" },
                }}
              />
            </div>
          </FormDiv>
          <FormDiv>
            <p>State :</p>
            <div className={classes.root}>
              <TextField
                required
                name="state"
                id="standard-required"
                value={userData?.state}
                onChange={(e) => updateHandler(e)}
                // onChange={}
                inputProps={{
                  style: { color: "white", fontSize: "30px" },
                }}
              />
            </div>
          </FormDiv>
          <FormDiv>
            <p>City :</p>
            <div className={classes.root}>
              <TextField
                required
                name="city"
                id="standard-required"
                value={userData?.city}
                onChange={(e) => updateHandler(e)}
                // onChange={}
                inputProps={{
                  style: { color: "white", fontSize: "30px" },
                }}
              />
            </div>
          </FormDiv>
          <FormDiv>
            <p>House Address :</p>
            <div className={classes.root}>
              <TextField
                required
                id="standard-required"
                multiline
                name="address"
                rowsMax={4}
                value={userData?.address}
                onChange={(e) => updateHandler(e)}
                // onChange={}
                variant="outlined"
                inputProps={{
                  style: {
                    color: "white",
                    fontSize: "30px",
                    paddingTop: "5px",
                  },
                }}
              />
            </div>
          </FormDiv>
          <FormDiv>
            <p>Landmark :</p>
            <div className={classes.root}>
              <TextField
                required
                id="standard-required"
                name="landmark"
                value={userData?.landmark}
                onChange={(e) => updateHandler(e)}
                // onChange={}
                inputProps={{
                  style: { color: "white", fontSize: "20px" },
                }}
              />
            </div>
          </FormDiv>
          {/* <FormDiv>
            <p>Profile Picture</p>
            <p></p>
          </FormDiv> */}
        </FormContainer>
        {isUpdated && (
          <>
            <SignupContainer>
              <p className="description">
                Your details have been updated and save
              </p>
              <FormDiv className="form-div">
                <button className="update-button" onClick={handleSubmit}>
                  Submit{" "}
                </button>
              </FormDiv>
            </SignupContainer>
          </>
        )}
        <SignupContainer>
          <p className="description">Want to Logout</p>
          <FormDiv className="form-div">
            <button className="logout-button" onClick={logoutHandler}>
              Logout
            </button>
          </FormDiv>
        </SignupContainer>
      </Container>
      {!isAuthenticated && <Redirect to="/" />}
    </div>
  );
};

export default Dashboard;

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
  p {
    padding: 0 10px;
  }
  .logout-button {
    padding: 15px;
    margin: 10px 0;
    background-color: #480ca8;
    font-size: inherit;
    color: inherit;
    cursor: pointer;
  }
  .update-button {
    padding: 15px;
    margin: 10px 0;
    background-color: #3a94dd;
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
