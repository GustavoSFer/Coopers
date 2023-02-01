// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'mongodb+srv://gustavo:coopers123@coopers.iempdaz.mongodb.net/?retryWrites=true&w=majority';

const loginUser = async (endpoint, body) => {
  const { data } = await axios.post((baseURL + endpoint), body);
  return data;
};

const tasks = async (endpoint, body) => {
  const { data } = await axios.post((baseURL + endpoint), body);
  return data;
};

const deleteTask = async (endpoint, params) => {
  await axios.delete(`${baseURL}${endpoint}${params}`);
};

export {
  loginUser,
  tasks,
  deleteTask,
};
