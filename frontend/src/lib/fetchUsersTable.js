import axions from "axios";

const fetchTableData = async (url) => {
  const reponseData = await axions.get(url);
  return reponseData.data.data;
};

export default fetchTableData;
