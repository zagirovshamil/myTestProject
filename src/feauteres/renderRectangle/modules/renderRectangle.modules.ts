import { VideoPlayerProps } from "../../../pages";


export interface IEvent {
    start: number;
    end: number;
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface ReactPlayerProps extends VideoPlayerProps {
    events: IEvent[],
    currentTime: number;
}


export interface Zone {
    timestamp: number;
    duration: number;
    top: number;
    left: number;
    width: number;
    height: number;
}

export interface IVideoPlayerProps {
    url: string;
    width: string;
    height: string;
    zones: Zone[];
}



export interface IRenderRectangleProps {
    data: Zone[];
    currentTime: number;
}