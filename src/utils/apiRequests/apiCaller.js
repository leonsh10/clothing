import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

<<<<<<< HEAD
src/utils/axios.js
const apiRequests = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 60 * 100,
  headers,
});

export default apiRequests;

=======
>>>>>>> d0412026f4a23d413d1eb47b3c193d102412fd5c
const apiCaller = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 60*100,
    headers
});


export default apiCaller;
<<<<<<< HEAD
src/utils/apiRequests/apiCaller.js
=======
>>>>>>> d0412026f4a23d413d1eb47b3c193d102412fd5c
