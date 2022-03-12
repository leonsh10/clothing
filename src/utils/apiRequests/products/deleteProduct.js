import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deleteProduct = async (id) => {
  const token = await getAuth().currentUser.getIdToken();
  return apiCaller.delete(`products/delete/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export default deleteProduct;
