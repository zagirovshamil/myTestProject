import axios from "axios";
import { ApiResponse, BASE_URL } from "../../../shared";



export const getAnalysisValue = async (): Promise<ApiResponse> => {
  const resp = await axios.get(BASE_URL);
  return resp;
};




;

