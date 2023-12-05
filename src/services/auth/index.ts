import { instance } from "..";
import { APIResponse } from "../types";
import { AuthData, TokensData } from "./types";

async function getTokens(data: AuthData): Promise<APIResponse<TokensData>> {
  try {
    const response = await instance.post("/auth/token/", JSON.stringify(data));
    const authData: TokensData = JSON.parse(response.data);

    localStorage.setItem("access_token", authData.access);
    localStorage.setItem("refresh_token", authData.refresh);
    localStorage.setItem("is_authenticated", "1");

    console.log(authData.access);

    return <APIResponse<TokensData>>{
      success: true,
      status: response.status,
      content: authData,
    };
  } catch (err) {
    localStorage.clear();
    console.error(err);

    return <APIResponse<TokensData>>{
      success: false,
    };
  }
}

export default {
  getTokens,
};
