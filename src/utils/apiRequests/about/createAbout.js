import apiCaller from "../apiCaller.js";
import { getAuth } from "firebase/auth";

const createAbout = async (aboutBody) => {
  // const { data } = await apiCaller.post("about/create", aboutBody);

  // return data;

  const token = await getAuth().currentUser.getIdToken();
  const userId = getAuth().currentUser.uid;
  const { data } = await apiCaller.post(
    "about/create",
    { ...aboutBody, userId },
    {
      authorization: `Bearer ${token}`,
    }
  );

  return data;
};

export default createAbout;
