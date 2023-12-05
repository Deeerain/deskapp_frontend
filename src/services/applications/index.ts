import { instance } from "..";
import { APIResponse } from "../types";
import { Application, CreateApplicationData } from "./types";

async function GetList(): Promise<APIResponse<Array<Application>>> {
  try {
    const response = await instance.get("/apps/");

    return <APIResponse<Array<Application>>>{
      success: true,
      status: response.status,
      content: JSON.parse(response.data),
    };
  } catch {
    return <APIResponse<Array<Application>>>{
      success: false,
    };
  }
}

async function CreateApplication(
  data: CreateApplicationData
): Promise<APIResponse<Application>> {
  try {
    const response = await instance.post("/apps/", JSON.stringify(data));

    return <APIResponse<Application>>{
      success: true,
      status: response.status,
      content: JSON.parse(response.data),
    };
  } catch {
    return <APIResponse<Application>>{
      success: false,
    };
  }
}

export default {
  GetList,
  CreateApplication,
};
