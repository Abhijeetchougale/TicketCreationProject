import { COMMON_URL } from '../Constant/Constant';
import axios from "axios";

const getData = async (endpoint) => {
  try {
    const result = await axios.get(`${COMMON_URL}${endpoint}`);
    return result.data.data;
  } catch (error) {
    alert(error);
  }
};

const postData = async (endpoint, obj) => {
  try {
    const result = await axios.post(`${COMMON_URL}${endpoint}`, obj);
    return result.data;
  } catch (error) {
    alert(error);
  }
};

const deleteData = async (endpoint, id) => {
  debugger;
  try {
    debugger;
    const result = await axios.get(`${COMMON_URL}${endpoint}${id}`);
    return result.data;
  } catch (error) {
    alert(error);
  }
};

export { getData, postData, deleteData };
