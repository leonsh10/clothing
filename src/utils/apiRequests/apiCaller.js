import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

<<<<<<< HEAD:src/utils/axios.js
const apiRequests = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 60 * 100,
  headers,
});

export default apiRequests;
=======
const apiCaller = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 60*100,
    headers
});


export default apiCaller;
>>>>>>> d845634711c0df78c34ec49b03d56072b1023638:src/utils/apiRequests/apiCaller.js
