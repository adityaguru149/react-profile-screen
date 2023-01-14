import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { APIResult } from "src/model/APIResult";
import { AuthData } from "src/model/AuthData";

const verifyUser = async (username: string, password: string): Promise<APIResult<AuthData>> => {
  const options: AxiosRequestConfig = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  try {
    const response: AxiosResponse<AuthData> = await axios.post(
      `https://run.mocky.io/v3/6223d072-aec4-4055-b009-7ba5a8c3a36d`,
      { username, password },
      options
    );
    return { type: "success", value: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("ERR: ", error.response);
      if (error.response?.status === 401) {
        return {
          type: "error",
          code: "401",
          error: "UNAUTHENTICATED",
        };
      }
    }
    return {
      type: "error",
      code: "001",
      error: "Error on authentication",
    };
  }
};

export default {
  verifyUser,
};
