import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { APIResult } from "src/model/APIResult";
import { AuthData } from "src/model/AuthData";
import { ProfileData } from "src/model/ProfileData";

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

/**
 * This method is a mock to simulate get profile informations
 * normally we should use a real API,
 * for this test we will use localstorage to be able to mock update profile informations
 * @param token JWT
 * @returns
 */
const getProfileUser = async (token: string): Promise<APIResult<ProfileData>> => {
  const profileData: string | null = localStorage.getItem("profile");

  // User should be logged in order to retrieve personal information
  // for now we just verify if token is not null.
  if (token !== null) {
    if (profileData == null) {
      const fakeProfileData: ProfileData = {
        name: "Anna Engelman",
        address: "Naples, Florida",
        type: "Customer",
        phone1: "(025) 014-2029",
        phone2: "(061) 293-7005",
        nickName: "anna_engelman",
        email: "anna-engelman@gmail.com",
      };

      // To simulate API
      localStorage.setItem("profile", JSON.stringify(fakeProfileData));

      return { type: "success", value: fakeProfileData };
    }
    return { type: "success", value: JSON.parse(profileData) };
  }
  return {
    type: "error",
    code: "401",
    error: "UNAUTHENTICATED",
  };
};

/**
 * This method is a mock to simulate update profile informations
 * normally we should use a real API,
 * for this test we will use localstorage
 * @param token JWT
 * @returns
 */
const updateProfileUser = async (token: string, newProfile: ProfileData): Promise<APIResult<ProfileData>> => {
  // User should be logged in order to retrieve personal information
  // for now we just verify if token is not null.
  if (token !== null) {
    // To simulate API
    localStorage.setItem("profile", JSON.stringify(newProfile));
    return { type: "success", value: newProfile };
  }
  return {
    type: "error",
    code: "401",
    error: "UNAUTHENTICATED",
  };
};

export default {
  verifyUser,
  getProfileUser,
  updateProfileUser,
};
