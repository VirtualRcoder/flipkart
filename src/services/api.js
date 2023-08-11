import axios from "axios";

const URL = "https://yvlcgc-8000.csb.app";

async function authenticationSignup(data) {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling sign up api", error);
  }
}

export default authenticationSignup;
