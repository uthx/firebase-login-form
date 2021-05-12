import {
  AUTH_INFO_SUCCESS,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "./authActionTypes";

//firebase helper methods imports
import {
  signupUser,
  loginUser,
  logoutUser,
  saveUser,
} from "../../helper/firebaseHelpers";

export const authInfoSuccess = (user) => ({
  type: AUTH_INFO_SUCCESS,
  payload: user,
});

export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginError = (e) => ({ type: LOGIN_ERROR, payload: e });

export const signupRequest = () => ({ type: SIGNUP_REQUEST });
export const signupSuccess = () => ({ type: SIGNUP_SUCCESS });
export const signupError = (e) => ({ type: SIGNUP_ERROR, payload: e });

export const logoutRequest = () => ({ type: LOGOUT_REQUEST });
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const logoutError = (e) => ({ type: LOGOUT_ERROR, payload: e });

export const login = (email, password) => (dispatch) => {
  dispatch(loginRequest());
  loginUser(email, password)
    .then(() => {
      dispatch(loginSuccess());
      dispatch(authInfoSuccess(true));
    })
    .catch((e) => {
      dispatch(authInfoSuccess(false));
      dispatch(loginError(e));
      throw e.message;
    });
};

export const signup = (userData) => {
  console.log("called");

  return function (dispatch) {
    const { email, password } = userData;
    dispatch(signupRequest());
    console.log("object");
    (async () => {
      try {
        const userObject = await signupUser(email, password);
        // const base64String = await toBase64(userData.profileImage);
        delete userData.password;
        delete userData.email;
        // userData.profileImage = base64String;
        await saveUser(userObject.user.uid, userData);
        console.log(userObject.user.uid);
        dispatch(signupSuccess());
        dispatch(authInfoSuccess(true));
      } catch (e) {
        dispatch(signupError(e));
        dispatch(authInfoSuccess(false));

        throw e.message;
      }
    })();
  };
};

export const logout = () => (dispatch) => {
  dispatch(logoutRequest());
  (async () => {
    try {
      await logoutUser();
      dispatch(logoutSuccess());
    } catch (e) {
      dispatch(logoutError(e));
      throw e.message;
    }
  })();
};
