import apiCaller from "../apiCaller.js";
import { getAuth } from "firebase/auth";

const getAboutList = async () => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get("about/list", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getAboutList;
