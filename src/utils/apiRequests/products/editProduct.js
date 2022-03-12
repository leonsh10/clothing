import apiCaller from "../apiCaller.js";
import { getAuth } from "firebase/auth";

const editProduct = async (productBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const userId = getAuth().currentUser.uid;
  const { data } = await apiCaller.put(
    "products/update",
    { ...productBody, userId },
    {
      authorization: `Bearer ${token}`,
    }
  );

  return data;
};

export default editProduct;
