import { Dispatch, SetStateAction } from "react";
import { ApiResponse } from "../../../shared";


export type CustomButtonProps = {
    data: ApiResponse;
    setTimestamp: Dispatch<SetStateAction<number>>;
}