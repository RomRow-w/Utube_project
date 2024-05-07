import { CirclePlay } from "lucide-react";
import React from "react";
import { formatDuration } from "../utils/formatDuration";
import { formatTimeAgo } from "../utils/formatTimestamp";
import { IvideoItem } from "../data/home"

interface IVideoProps extends IvideoItem {
  setModalState: React.Dispatch<React.SetStateAction<string>>;
}

const viewFormatter = new Intl.NumberFormat(undefined, {notation: "compact"});


export default function VideoItem({
  title,
  channel,
  views,
  duration,
  whenPosted,
  thumbnailUrl,
  videoUrl,
  setModalState,
}: IVideoProps) {

  return (
    <div className="flex flex-col gap-2 justify-between">
      <div onClick={() => setModalState(videoUrl)} className="relative">
        <img src={thumbnailUrl} alt="" className="block w-full h-full object-cover rounded-xl"/>
        <div className="absolute bottom-1 right-1 bg-secondary-dark 
          text-secondary text-sm px-0.5 rounded">
          {formatDuration(duration)}
        </div>
        <div className="flex justify-center items-center absolute w-full h-full top-0 opacity-0 hover:opacity-80 bg-black rounded-xl">
          <CirclePlay className="text-[#8700FF] h-16 w-16"/>
        </div>
      </div>
      <div className="flex gap-2">
        <a href={`${channel.url}`} target="blank" className="flex-shrink-0">
          <img className="w-12 h-12 rounded-full" alt="" src={channel.profileUrl}></img>
        </a>
        <div className="flex flex-col">
          <div onClick={() => setModalState(videoUrl)} className="font-bold cursor-pointer">
            {title}
          </div>
          <a href={`${channel.url}`} target="blank" className="text-secondary-text text-sm">
            {channel.name}
          </a>
        </div>
      </div>
      <div className="text-secondary-text text-sm"> 
        {viewFormatter.format(views)} Просмотров ● {formatTimeAgo(new Date(whenPosted))}
      </div>
    </div>
  )
}

