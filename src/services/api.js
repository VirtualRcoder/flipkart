import axios from "axios";

const URL = "https://f59pmy-8000.csb.app";

export async function authenticationSignup(data) {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling sign up api", error);
  }
}

export async function authenticateLogin(data) {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while calling login api", error);
    return error.response
  }
}
