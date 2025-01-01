const Player = () => {
  return (
    <div
      data-video-container
      className="sm:h-[100vh] h-[40vh] mt-[3vh] w-[100%] cursor-none"
    >
      <div
        data-play-button
        className="bg-black text-white uppercase h-[100px] w-[100px] items-center justify-center scale-0 flex fixed text-lg rounded-full"
      ></div>
      <video
        autoPlay
        muted
        loop
        src="/video.mp4"
        className="h-[100%] w-[100%] object-cover"
      ></video>
    </div>
  );
};

export default Player;
