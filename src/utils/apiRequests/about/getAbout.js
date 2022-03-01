import apiCaller from "../apiCaller.js";

const getAboutList = async () => {
  // const token = await getAuth().currentUser.getIdToken();
  // const result = await apiCaller.get("about/list", {
  //   headers: {
  //     authorization: `Bearer ${token}`,
  //   },
  // });
  // const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get("about/list");
  return result.data;
  // return result.data;
};

export default getAboutList;
