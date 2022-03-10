import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deleteProduct = async (id) => {
  const token = await getAuth().currentUser.getIdToken();
  //   const userId = getAuth().currentUser.uid;
  return apiCaller.delete(
    `products/delete/${id}`,
    // { userId },
    {
      headers: { authorization: `Bearer ${token}` },
    }
  );
};

export default deleteProduct;
