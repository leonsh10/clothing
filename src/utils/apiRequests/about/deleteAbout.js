import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deleteAbout = async (id) => {
  const token = await getAuth().currentUser.getIdToken();
  return apiCaller.delete(
    `about/delete/${id}`,
    {
      headers: { authorization: `Bearer ${token}` },
    }
  );
};

export default deleteAbout;
