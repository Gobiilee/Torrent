import axios from "../axios";

const handleLoginApi = (userUsername, userSignature) => {
  return axios.post("users/login", {
    username: userUsername,
    signature: userSignature,
  });
};
const handleRegisterApi = (userUsername, userEmail, publicKey) => {
  return axios.post("users/register", {
    username: userUsername,
    email: userEmail,
    publicKey: publicKey,
  });
};
const handleGetProfileApi = (userId) => {
  console.log("users/getprofile/" + userId);
  //'users/getprofile'
  return axios.get("users/getprofile/" + userId);
};

export { handleLoginApi, handleRegisterApi, handleGetProfileApi };
