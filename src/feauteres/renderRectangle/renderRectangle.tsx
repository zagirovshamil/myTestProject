import { FC } from "react";
import { IRenderRectangleProps } from "./modules";
import { IAnalysisData } from "../../shared";

export const RenderRectangle: FC<IRenderRectangleProps> = ({
  data,
  currentTime,
}) => {
  const fixedNum = (num: number) => Math.round(num * 100) / 100;

  const isZoneVisible = (data: IAnalysisData): boolean => {
    return (
      fixedNum(currentTime) >= fixedNum(data.timestamp) &&
      fixedNum(currentTime) <=
        fixedNum(data.timestamp) + fixedNum(data.duration)
    );
  };
  return data.data.map((zone: IAnalysisData, index: number) => {
    if (isZoneVisible(zone)) {
      return (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${zone.zone.top}px`,
            left: `${zone.zone.left}px`,
            width: `${zone.zone.width}px`,
            height: `${zone.zone.height}px`,
            backgroundColor: "rgba(0, 255, 0 , 0.5)",
            pointerEvents: "none",
          }}
        />
      );
    } else {
      return null;
    }
  });
};
