import axios from "axios";

const URL = "http://localhost:8000";

async function authenticationSignup(data) {
  try {
    await api.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling sign up api", error);
  }
}

export default authenticationSignup;
