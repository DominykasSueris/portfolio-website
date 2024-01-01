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
        <div className="flex-1 flex flex-col justify-center items-center h-dvh">
          <ul className="list text-sm lg:text-2xl">
            <li>Name: Dominykas Sueris</li>
            <li>Address: Edgware, London</li>
            <li>Phone: +447593678428</li>
            <li>Email: dominykassueris@gmail.com</li>
          </ul>
          <div className="my-2">
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=dominykas.sueris@gmail.com&tf=cm"
              target="_blank"
            >
              <svg
                className="lg:h-20 h-10 lg:w-16 w-8 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 24"
              >
                <path
                  d="M29.986 27.715H2.008C.915 27.715 0 26.85 0 25.733V6.376A2.01 2.01 0 0 1 2.008 4.37h27.978c1.093 0 2.008.9 2.008 2.008v19.33c-.025 1.144-.915 2.008-2.008 2.008z"
                  fill="#f2f2f2"
                />
                <path
                  d="M4 27.715l11.97-8.76.076-.508L3.7 9.578l-.025 17.705z"
                  opacity=".1"
                  fill="#221f1f"
                />
                <g fill="#d44c3d">
                  <path d="M2.008 27.715C.9 27.715 0 26.85 0 25.733V6.35c0-1.118.9-1.32 2.008-1.32s2.008.23 2.008 1.32v21.364z" />
                  <path d="M2.008 5.334c1.423 0 1.703.432 1.703 1.016v21.084H2.008c-.94 0-1.703-.762-1.703-1.703V6.35c-.025-.6.28-1.016 1.703-1.016zm0-.28C.9 5.055 0 5.283 0 6.35v19.356a1.98 1.98 0 0 0 2.008 2.008h2.008V6.35C4 5.258 3.126 5.055 2.008 5.055zm27.978.28c1.296 0 1.703.254 1.703.966v19.458c0 .94-.762 1.703-1.703 1.703h-1.703V6.3c-.025-.737.407-.966 1.703-.966zm0-.28c-1.118 0-2.008.152-2.008 1.245v21.44h2.008c1.118 0 2.008-.9 2.008-2.008V6.274c-.025-1.093-.915-1.22-2.008-1.22z" />
                  <path d="M29.986 27.715h-2.008V6.3c0-1.118.9-1.245 2.008-1.245s2.008.152 2.008 1.245v19.458a2 2 0 0 1-2.008 1.957z" />
                </g>
                <path
                  d="M21.422 27.715L.178 7.2l1.118.457 14.8 10.647L31.993 6.63v19.128a1.99 1.99 0 0 1-2.008 1.982z"
                  opacity=".08"
                  fill="#221f1f"
                />
                <g fill="#d44c3d">
                  <path d="M15.96 18.98L.864 8.028c-.9-.66-1.144-1.93-.483-2.82s1.93-1.093 2.846-.432l12.757 9.275L28.817 4.65c.9-.66 2.135-.457 2.795.457.66.9.457 2.135-.457 2.795z" />
                  <path d="M29.986 4.572c.534 0 1.067.254 1.398.712.534.762.38 1.83-.38 2.4L15.96 18.625 1.042 7.8C.28 7.24.076 6.147.6 5.4c.305-.457.84-.737 1.423-.737.38 0 .737.102 1.016.33l12.73 9.25.178.102.178-.102 12.82-9.393c.33-.178.66-.28 1.042-.28zm0-.305c-.407 0-.84.102-1.17.38L15.984 14.05 3.202 4.75c-.33-.254-.762-.38-1.194-.38-.635.025-1.27.305-1.652.84-.635.9-.38 2.135.508 2.795L15.96 18.98 31.155 7.9a2.02 2.02 0 0 0 .457-2.795c-.407-.534-1.016-.84-1.626-.84z" />
                </g>
              </svg>
            </a>
          </div>
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
