"use client";
import Navbar from "../componets/Navbar";

const handleSubmit = () => {
  console.log("clicked");
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex lg:flex-row flex-col h-dvh">
        <div className="flex-1 flex justify-center items-center h-dvh">
          <ul className="list text-sm lg:text-2xl">
            <li>Name: Dominykas Sueris</li>
            <li>Address: Edgware, London</li>
            <li>Phone: +447593678428</li>
            <li>Email: dominykassueris@gmail.com</li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col lg:justify-center items-center">
          <div className="flex justify-center lg:w-full w-1/2 lg:h-28">
            <label className="w-full max-w-lg">
              <div className="label p-1">
                <span className="label-text lg:text-2xl text-sm">
                  Your email
                </span>
              </div>
              <input
                type="email"
                required
                placeholder="abc@abc.co.uk"
                className="input border-solid border-2 border-[#569ada] rounded-lg p-1 w-full max-w-lg lg:h-12 lg:text-xl placeholder-[#569ada]"
              />
            </label>
          </div>
          <div className="flex justify-center lg:w-full w-1/2 lg:h-28">
            <label className="w-full max-w-lg">
              <div className="label p-1">
                <span className="label-text lg:text-2xl text-sm">Subject</span>
              </div>
              <input
                type="text"
                required
                placeholder="Topic"
                className="input border-solid border-2 border-[#569ada] rounded-lg p-1 w-full max-w-lg lg:h-12 lg:text-xl placeholder-[#569ada]"
              />
            </label>
          </div>
          <div className="flex justify-center lg:w-full w-1/2 lg:h-40 h-20">
            <label className="w-full max-w-lg lg:h-40 h-20">
              <div className="label p-1">
                <span className="label-text lg:text-2xl text-sm">Message</span>
              </div>
              <textarea
                required
                className="textarea textarea-bordered border-solid border-2 border-[#569ada] rounded-lg p-1 w-full max-w-lg h-4/5 lg:text-xl placeholder-[#569ada]"
                placeholder="Send me a message"
              ></textarea>
            </label>
          </div>
          <div className="p-4 my-3">
            <button
              className="bg-[#569ada] text-white text-xs lg:text-lg lg:p-1 py-1 rounded-md hover:bg-[#1c4f88] lg:w-60 w-40"
              type="submit"
              onClick={handleSubmit}
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
