import Navbar from "../componets/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#e8e9f7] text-xl overflow-hidden">
        <div className="h-dvh flex flex-col items-center justify-center xl:mx-[33%] mx-[25%]">
          <h1 className="lg:text-6xl md:text-4xl text-green-500 flex justify-start w-full">
            I am Dom,
          </h1>
          <p className="text-xs sm:text-sm md:text-lg lg:text-2xl py-3">
            I’m adaptable, creative, collaborative, and I bring strong
            communication and problem-solving skills from my hospitality career.
            In my personal life, I value curiosity, lifelong learning, and
            community. If you’re looking for a dedicated, enthusiastic web
            developer who is eager to learn and grow with your team, please do
            not hesitate to reach out.
          </p>
          <div className="flex justify-center lg:mt-4 mt-0">
            <a href="/cv/cv_dominykas_sueris.pdf">
              <button className="bg-blue-500 lg:text-xl  md:text-base text-xs text-white px-4 lg:py-2 md:py-3 py-1 rounded-md hover:bg-blue-600">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
