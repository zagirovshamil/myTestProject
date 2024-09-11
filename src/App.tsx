import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { VideoPlayer } from "./pages";
import { СustomButton } from "./feauteres";
import { getAnalysisValue, VIDEO_URL } from "./app/api";

export const App = () => {
  const [timestamp, setTimestamp] = useState<number>(0);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["analyze"],
    queryFn: getAnalysisValue,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>{error.message}</div>;

  if (!data) return null;

  return (
    <>
      <VideoPlayer
        url={VIDEO_URL}
        width={"99vw"}
        height={"100vh"}
        data={data}
        timestamp={timestamp}
      />
      <СustomButton
        data={data}
        setTimestamp={setTimestamp}
        timestamp={timestamp}
      />
    </>
  );
};
