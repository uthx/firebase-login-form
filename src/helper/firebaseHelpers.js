import { auth, db, storage } from "../firebaseConfig";

//singup
const signupUser = async (email, password) => {
  const user = await auth.createUserWithEmailAndPassword(email, password);
  return user;
};

const loginUser = async (email, password) => {
  const user = await auth.signInWithEmailAndPassword(email, password);
  return user;
};

const logoutUser = async () => {
  await auth.signOut();
  return true;
};

//db things
//save user data first time
const saveUser = async (uid, data) => {
  const user = await db.collection("users").doc(uid).set(data);
  return user;
};
//get user data
const getUserData = async (uid) => {
  const userData = await db.collection("users").doc(uid).get();
  return userData.data();
};
//update user Data
const updateUserData = async (uid, data) => {
  await db.collection("users").doc(uid).update(data);
};
//edit user data
const editUser = async (uid, data) => {
  const user = await db.collection("users").doc(uid).update(data);
  return user;
};

//profile pic
const setProfileImage = async (uid, file) => {
  const profileImageRef = storage.ref();
  const thisRef = profileImageRef.child(`${uid}/${file.name}`);
  const uploadTask = await thisRef.put(file);
  return uploadTask;
};
const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
//update profile image
const updateProfileImage = async (uid, prevUrl, file) => {
  const httpImageUrl = storage.refFromURL(prevUrl); //await
  await httpImageUrl.delete();
  return await setProfileImage(uid, file);
};

export {
  signupUser,
  loginUser,
  logoutUser,
  editUser,
  saveUser,
  setProfileImage,
  updateProfileImage,
  toBase64,
  getUserData,
  updateUserData,
};
