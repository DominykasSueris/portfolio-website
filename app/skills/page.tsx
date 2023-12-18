import Navbar from "../componets/Navbar";

const Skills = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-[20%]">
        <div>
          <svg
            className="h-10 w-10 text-black"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M14.448 16.24a21.877 21.877 0 01-1.747 2.175c1.672 1.623 3.228 2.383 4.09 1.884.864-.498.983-2.225.414-4.484-.853.19-1.78.334-2.757.425zm-1.31.087a27.512 27.512 0 01-2.276 0c.377.492.758.948 1.138 1.364.38-.416.76-.872 1.138-1.364zm5.04-7.894c2.665.764 4.405 2.034 4.405 3.567 0 1.533-1.74 2.803-4.405 3.567.67 2.69.441 4.832-.886 5.598-1.328.767-3.298-.105-5.292-2.03-1.994 1.925-3.964 2.797-5.292 2.03-1.327-.766-1.557-2.908-.886-5.598-2.665-.764-4.405-2.034-4.405-3.567 0-1.533 1.74-2.803 4.405-3.567-.67-2.69-.441-4.832.886-5.598 1.328-.767 3.298.105 5.292 2.03 1.994-1.925 3.964-2.797 5.292-2.03 1.327.766 1.557 2.908.886 5.598zm-.973-.248c.57-2.26.45-3.986-.413-4.484-.863-.499-2.419.261-4.09 1.884a22.049 22.049 0 011.746 2.175c.978.09 1.904.234 2.757.425zm-10.41 7.63c-.57 2.26-.45 3.986.413 4.484.863.499 2.419-.261 4.09-1.884a21.877 21.877 0 01-1.746-2.175 21.877 21.877 0 01-2.757-.425zm4.067-8.142a27.512 27.512 0 012.276 0A20.523 20.523 0 0012 6.31c-.38.416-.76.872-1.138 1.364zm-1.31.087A21.877 21.877 0 0111.3 5.585C9.627 3.962 8.07 3.202 7.209 3.701c-.864.498-.983 2.225-.414 4.484.853-.19 1.78-.334 2.757-.425zm4.342 7.52A25.368 25.368 0 0015.787 12a25.368 25.368 0 00-1.893-3.28 25.368 25.368 0 00-3.788 0A25.368 25.368 0 008.213 12a25.368 25.368 0 001.893 3.28 25.368 25.368 0 003.788 0zm1.284-.131c.615-.08 1.2-.183 1.75-.304a20.523 20.523 0 00-.612-1.667 27.512 27.512 0 01-1.138 1.97zM8.822 8.85c-.615.08-1.2.183-1.75.304.17.536.374 1.094.612 1.667a27.512 27.512 0 011.138-1.97zm-1.75 5.994c.55.121 1.135.223 1.75.304a27.512 27.512 0 01-1.138-1.97 20.42 20.42 0 00-.612 1.666zm-.978-.245c.261-.834.6-1.708 1.01-2.6a22.002 22.002 0 01-1.01-2.6c-2.242.637-3.677 1.604-3.677 2.6s1.435 1.963 3.677 2.6zm10.834-5.445a20.808 20.808 0 00-1.75-.304 27.511 27.511 0 011.138 1.97c.238-.572.442-1.13.612-1.666zm.978.245c-.261.834-.6 1.708-1.01 2.6.41.892.749 1.766 1.01 2.6 2.242-.637 3.677-1.604 3.677-2.6s-1.435-1.963-3.677-2.6zM12 13.88a1.88 1.88 0 110-3.76 1.88 1.88 0 010 3.76z" />
          </svg>
        </div>
        <div>
          <svg
            className="h-10 w-10 text-black"
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z" />
          </svg>
        </div>
        <div>
          <svg
            className="h-10 w-10 text-black"
            viewBox="0 0 32 32"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path
              fill="currentColor"
              d="M4.665 3.411l2.063 23.176 9.258 2.574 9.284-2.578 2.065-23.172H4.664zm4.286 5.5l-.068-.763h7.107v2.842h-4.005l.259 2.911h3.746v2.842H9.649L8.951 8.91zm13.567 5.754l-.667 7.483-.043.48-5.822 1.616-5.814-1.616-.398-4.463h2.849l.202 2.267 3.163.854 3.165-.856.329-3.686h-3.485v-2.842h6.587l-.069.763zm.514-5.754l-.129 1.441-.057.639H16V8.149h7.1l-.068.762z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Skills;