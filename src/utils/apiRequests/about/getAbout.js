import apiCaller from "../apiCaller.js";

const getAboutList = async () => {
  const result = await apiCaller.get("about/list");
  return result.data;
};

export default getAboutList;
