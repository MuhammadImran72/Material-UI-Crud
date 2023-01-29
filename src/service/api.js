import axios from "axios";

const API_URL = "http://localhost:3002/users";

export const AddUsers = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log("Error While Calling AddUsers Api", error.message);
  }
};

export const getUsers = async (data) => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error While Calling getUsers Api", error.message);
  }
};
