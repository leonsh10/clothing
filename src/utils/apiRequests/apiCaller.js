import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

src/utils/axios.js
const apiRequests = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 60 * 100,
  headers,
});

export default apiRequests;

const apiCaller = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 60*100,
    headers
});


export default apiCaller;
src/utils/apiRequests/apiCaller.js
