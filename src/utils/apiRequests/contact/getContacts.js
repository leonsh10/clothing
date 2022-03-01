import apiCaller from "../apiCaller.js";
// import { getAuth } from "firebase/auth";

const getContactsList = async () => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get("contact/list", {
    // headers: {
    //   authorization: `Bearer ${token}`,
    // },
  });
  return result.data;
};

export default getContactsList;
