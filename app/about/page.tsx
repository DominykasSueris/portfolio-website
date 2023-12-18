import Navbar from "../componets/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#e8e9f7] text-xl h-screen overflow-hidden">
        <div className="h-screen flex flex-col items-center justify-center mx-[33%]">
          <h1 className="text-6xl text-green-500 flex justify-start w-full">
            I am Dom,
          </h1>
          <p className="text-xl py-3">
            I’m adaptable, creative, collaborative, and I bring strong
            communication and problem-solving skills from my hospitality career.
            In my personal life, I value curiosity, lifelong learning, and
            community. If you’re looking for a dedicated, enthusiastic web
            developer who is eager to learn and grow with your team, please do
            not hesitate to reach out.
          </p>
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
