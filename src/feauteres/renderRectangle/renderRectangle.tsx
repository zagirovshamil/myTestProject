import { FC } from "react";
import { IRenderRectangleProps, Zone } from "./modules";

export const RenderRectangle: FC<IRenderRectangleProps> = ({
  data,
  currentTime,
}) => {
  console.log("data", data);

  const fixedNum = (num: number) => Math.round(num * 100) / 100;

  const isZoneVisible = (data: Zone): boolean => {
    return (
      fixedNum(currentTime) >= fixedNum(data.timestamp) &&
      fixedNum(currentTime) <=
        fixedNum(data.timestamp) + fixedNum(data.duration)
    );
  };
  return data.data.map((zone: Zone, index: number) => {
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
