import axios from "axios";
import { baseURL } from "./baseURL";

const commonAPI = async (httpMethod, endpoint, requestData) => {
  const requestConfig = {
    method: httpMethod,
    url: baseURL + endpoint,
    data: requestData,
  };
  return await axios(requestConfig)
    .then((res) => {
        // console.log("response");
      return res;
    })
    .catch((err) => {
        // console.log(err);
      return err;
    });
};

export default commonAPI;
