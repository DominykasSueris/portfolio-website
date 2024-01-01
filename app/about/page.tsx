import Navbar from "../componets/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#e8e9f7] text-xl overflow-hidden">
        <div className="h-dvh flex flex-col items-center justify-center mx-[33%]">
          <h1 className="lg:text-6xl text-green-500 flex justify-start w-full">
            I am Dom,
          </h1>
          <p className="text-xs sm:text-lg lg:text-xl py-3">
            I’m adaptable, creative, collaborative, and I bring strong
            communication and problem-solving skills from my hospitality career.
            In my personal life, I value curiosity, lifelong learning, and
            community. If you’re looking for a dedicated, enthusiastic web
            developer who is eager to learn and grow with your team, please do
            not hesitate to reach out.
          </p>
          <div className="flex justify-center mt-4">
            <a href="/cv/cv_dominykas_sueris.pdf">
              <button className="bg-blue-500 text-xs lg:text-xl text-white px-4 py-2 rounded-md hover:bg-blue-600">
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
