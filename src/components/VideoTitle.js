import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen absolute py-[20%] px-12 text-white bg-gradient-to-r from-black aspect-video">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="pt-4 text-lg w-1/2">{overview}</p>
      <div>
        <button className="p-2 mt-4 rounded-md w-24 bg-white border-black opacity-80 text-black hover:bg-opacity-60">
          ▶Play
        </button>
        <button className="p-2 m-4 rounded-md w-24 bg-gray-500 border-black bg-opacity-50 text-white hover:bg-opacity-100">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
