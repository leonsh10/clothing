import apiCaller from "../apiCaller";

const getProductsList = async () => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get("products/list");
  return result.data;
};

export default getProductsList;
