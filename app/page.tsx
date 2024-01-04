import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./componets/Navbar";

export const metadata = {
  title: "Dominykas Sueris website",
};

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row h-dvh">
        <div className="flex-1 flex items-center">
          <Image
            src="/images/minion.webp"
            alt="Minion"
            width={800}
            height={400}
            className="my-[20rem] lg:my-[10rem]"
          />
        </div>
        <div className="flex-1 flex items-center sm:my-0 m-10 2xl:pb-64">
          <div className="lg:pr-1 2xl:pr-[250px]">
            <h1 className="text-lg lg:text-3xl xl:text-6xl text-green-500 sm:pt-0 lg:pt-48 xl:pt-10 my-2">
              Hi There,
            </h1>
            <h1 className="lg:my-6 sm:my-1 sm:text-lg lg:text-3xl xl:text-4xl font-bold my-2">
              I AM WEB A DEVELOPER
            </h1>
            <p className="text-xs sm:text-lg lg:text-xl xl:text-2xl lg:mt-6 sm:mt-1">
              Passionate React Developer: I&apos;ve immersed myself in the world
              of React, navigating its intricacies independently. Proficient in
              component-based development, adept at state management, and
              well-versed in the React ecosystem, I bring a dedicated and
              enthusiastic approach to web development.
            </p>
            <div className="flex justify-center mt-3 sm:mt-1 lg:mt-6">
              <Link href="/contact">
                <button className="bg-[#569ada] text-white text-xs lg:text-xl xl:text-2xl px-3 xl:px-6 py-1 xl:py-4 rounded-md hover:bg-[#1c4f88]">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
