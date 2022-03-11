import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createProduct = async (productBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const userId = getAuth().currentUser.uid;
  const { data } = await apiCaller.post(
    "products/create",
    { ...productBody, userId },
    {
      authorization: `Bearer ${token}`,
    }
  );

  return data;
};

export default createProduct;
