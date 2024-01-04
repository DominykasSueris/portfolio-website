import Navbar from "../componets/Navbar";

export const metadata = {
  title: "About",
};

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#e8e9f7] text-xl overflow-hidden">
        <div className="h-dvh flex flex-col items-center justify-center mx-[20%] lg:mx-[10%] xl:mx-[30%] text-xs sm:text-bs md:text-base xl:text-xl">
          <h1 className="text-lg md:text-lg lg:text-4xl text-green-500 flex justify-start w-full">
            I am Dom,
          </h1>
          <p className="py-3">
            I am a highly adaptable, creative, and collaborative professional
            with a background in hospitality, bringing strong communication and
            problem-solving skills to the table. In both my personal and
            professional life, I prioritize curiosity, lifelong learning, and
            building meaningful relationships.
          </p>
          <p className="py-3">
            As an enthusiastic web developer, I am dedicated to continual growth
            and eager to contribute my skills to your team. Dynamic team member
            who is passionate about learning and ready to thrive in a
            collaborative environment.
          </p>
          <p className="py-3">
            Please do not hesitate to get in touch, I am excited about the
            prospect of discussing how I can contribute to your team.
          </p>
          <div className="flex justify-center mt-4">
            <a href="/cv/cv_dominykas_sueris.pdf">
              <button className="bg-blue-500 text-xs lg:text-lg xl:text-xl text-white px-4 py-1 md:py-2 lg:py-2 rounded-md hover:bg-blue-600">
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
