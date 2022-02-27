import apiCaller from "../apiCaller.js";

const createAbout = async (aboutBody) => {
  const { data } = await apiCaller.post("about/create", aboutBody);

  return data;
};

export default createAbout;
