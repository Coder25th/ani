import Image from "next/image";

const Banner = () => {
  return (
    <div className="sm:h-[100vh] h-[300vh] w-full border-t-2 border-white relative flex flex-col sm:flex-row items-center justify-between p-[3vw] gap-4">
      <div className="relative h-[100vh] sm:h-full sm:w-[31%] w-full overflow-hidden">
        <Image
          src="/img1.jpg"
          fill
          alt="Image 1"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-[100vh] sm:h-full sm:w-[31%] w-full overflow-hidden">
        <Image
          src="/img2.jpg"
          fill
          alt="Image 2"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-[100vh] sm:h-full sm:w-[31%] w-full overflow-hidden">
        <Image
          src="/img3.jpg"
          fill
          alt="Image 3"
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
