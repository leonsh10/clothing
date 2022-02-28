import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getProduct = async (productId) => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get(`products/${productId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getProduct;
