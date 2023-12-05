import { instance } from "..";
import { APIResponse } from "../types";
import { User } from "./types";

async function GetMe(): Promise<APIResponse<User>> {
  const response = await instance.get("/users/me/");
  const user: User = JSON.parse(response.data);

  return <APIResponse<User>>{
    success: true,
    status: response.status,
    content: user,
  };
}

export default {
  GetMe,
};
