import { AxiosResponse } from "axios";


export interface ApiResponse extends AxiosResponse {
  data: IAnalysisData[];
}

export interface IAnalysisData {
  timestamp: number;
  duration: number;
  zone: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
}

export type DataItem = {
  timestamp: number;
  duration: number;
  zone: CubePosition;
}

export type CubePosition = {
  left: number,
  top: number,
  width: number,
  height: number,
}


