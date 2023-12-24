import Image from "next/image";
import Navbar from "./componets/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <div className="flex-1">
          <Image
            src="/images/minion.webp"
            alt="Minion"
            width={800}
            height={400}
            className="my-[20rem] lg:my-[10rem]"
          />
        </div>
        <div className="flex-1 m-10 flex items-center 2xl:pb-[250px]">
          <div className="lg:pr-1 2xl:pr-[250px]">
            <h1 className="top-h3 text-lg lg:text-3xl xl:text-6xl text-green-500 pt-10 lg:pt-[200px] xl:pt-10">
              Hi There
            </h1>
            <h1 className="my-3 sm:text-lg lg:text-3xl xl:text-6xl font-bold">
              I AM WEB DEVELOPER
            </h1>
            <p className="text-sm lg:text-xl xl:text-2xl mt-6">
              Self-taught React Developer: I have taken the initiative to learn
              React and its related technologies independently. Through my
              self-study, I have gained a strong understanding of React
              fundamentals, including component-based development, state
              management, and the React ecosystem.
            </p>
            <div className="flex justify-center mt-6">
              <button className="bg-[#569ada] text-white text-xs lg:text-xl xl:text-2xl px-3 xl:px-6 py-1 xl:py-4 rounded-md hover:bg-[#1c4f88]">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
