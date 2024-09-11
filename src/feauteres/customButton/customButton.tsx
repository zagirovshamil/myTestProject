import { FC } from "react";

import { CustomButtonProps } from "./customButton.modules/customButton.modules";
import { Button } from "@mui/material";
import { DataItem } from "../../shared";

export const СustomButton: FC<CustomButtonProps> = ({ data, setTimestamp }) => {
  return (
    <>
      {data?.data.map((el: DataItem) => {
        const date = new Date(el.timestamp);
        const minutes = Math.floor(date.valueOf() / 60);
        const seconds = Math.floor(date.getTime() - 60 * minutes);
        const milliseconds: number =
          +(Number(el.timestamp) - minutes * 60 - seconds).toFixed(3) * 1000;

        return (
          <div key={el.timestamp}>
            <Button
              sx={{ marginTop: "10px" }}
              color="info"
              variant="outlined"
              onClick={() => {
                setTimestamp(el.timestamp);
              }}
            >
              {`${minutes < 10 ? "0" : ""}${minutes}:${
                seconds < 10 ? "0" : ""
              }${seconds}:${
                milliseconds < 10 ? "00" : milliseconds < 100 ? "0" : ""
              }${milliseconds}`}
            </Button>
          </div>
        );
      })}
    </>
  );
};
