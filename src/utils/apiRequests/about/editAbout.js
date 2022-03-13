import apiCaller from "../apiCaller.js";
import { getAuth } from "firebase/auth";

const editAbout = async (aboutBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const userId = getAuth().currentUser.uid;
  const { data } = await apiCaller.put(
    "about/update",
    { ...aboutBody, userId },
    {
      authorization: `Bearer ${token}`,
    }
  );

  return data;
};

export default editAbout;
