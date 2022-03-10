import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deleteAbout = async (id) => {
  const token = await getAuth().currentUser.getIdToken();
  //   const userId = getAuth().currentUser.uid;
  return apiCaller.delete(
    `about/delete/${id}`,
    // { userId },
    {
      headers: { authorization: `Bearer ${token}` },
    }
  );
};

export default deleteAbout;
