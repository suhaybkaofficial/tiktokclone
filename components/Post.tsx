import Image from "next/image";
import React from "react";
import VideoPlayer from "./VideoPlayer";
import Reactions from "./Reactions";
interface PostProps {
  name: string;
  username: string;
  caption: string;
  tags: string;
}
function Post(props: PostProps) {
  return (
    <div className="mx-12 my-4">
      {/* User Info */}
      <div className="flex items-center  space-x-6">
        {/* user profile */}
        <div className="rounded-full h-14 w-14 bg-red-500">
          <Image
            src="/ronaldo.jpg"
            width={60}
            height={60}
            alt="Picture of the author"
            className="object-cover h-full w-full rounded-full"
          />
        </div>
        {/* username */}
        <div>
          <div>
            <p className="text-lg font-semibold">{props.name}</p>
            <p className="text-sm">{props.username}</p>
          </div>
          <p className="text-gray-400 text-sm">{props.caption}</p>
          <p className="text-blue-500 cursor-pointer underline text-sm">{props.tags}</p>
        </div>
        {/* Follow Button */}
        <button className="bg-primary text-secondary border border-secondary py-1 px-6 hover:bg-primary/20">
          Follow
        </button>
      </div>

      <div className="flex my-3 space-x-4">
        <div className="flex-1 max-h-[85vh] rounded-2xl ">
          {/* Video Player */}
          <VideoPlayer />
        </div>
        <div className="flex-0 self-end">
            {/* Reactions */}
        <Reactions />
        </div>
      </div>
    </div>
  );
}

export default Post;
