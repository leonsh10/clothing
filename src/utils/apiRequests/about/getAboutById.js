import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getProductById = async (aboutId) => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get(`about/${aboutId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getProductById;
