import axios from 'axios';
import callAPI from '../config';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getDataUser() {
  const URL = `users`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getDetailUser(id) {
  const URL = `users/${id}`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function DestroyUser(id) {
  const URL = `users/delete/${id}`;

  const response = await axios.delete(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function SetAddUser(data) {
  const url = `${ROOT_API}/${API_VERSION}/users/create`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
}

export async function SetEditUser(data,id) {
  const url = `${ROOT_API}/${API_VERSION}/users/edit/${id}`;

  return callAPI({
    url,
    method: 'PUT',
    data,
  });
}

export async function GetLamp() {
  const url = `${ROOT_API}/${API_VERSION}/lamps`;

  return callAPI({
    url,
    method: 'GET',
    // data,
  });
}

export async function SetLamp(data) {
  const url = `${ROOT_API}/${API_VERSION}/lamps`;

  return callAPI({
    url,
    method: 'PUT',
    data,
  });
}

export async function GetTemperature() {
  const URL = `temperatures`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function GetAllDataTemperature() {
  const URL = `temperatures`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}



