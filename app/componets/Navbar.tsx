import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 lg:p-4">
      <div className="flex items-center justify-between mx-2 lg:mx-6">
        <div className="flex">
          <a
            className="mx-3"
            href="https://www.linkedin.com/in/dominykas-sueris-06806420a/"
          >
            <svg
              className="items-center h-6 lg:h-8 w-6 lg:w-8 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a className="mx-3" href="https://github.com/DominykasSueris">
            <svg
              className="items-center h-6 lg:h-8 w-6 lg:w-8 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
        <ul className="flex flex-row list-none">
          <li className="mx-3 text-base lg:text-2xl">
            <Link className="nav-link" aria-current="page" href="/">
              Home
            </Link>
          </li>
          <li className="mx-3 text-base lg:text-2xl">
            <Link className="nav-link" href="/about">
              About
            </Link>
          </li>
          <li className="mx-3 text-base lg:text-2xl">
            <Link className="nav-link" href="/skills">
              Skills
            </Link>
          </li>
          <li className="mx-3 text-base lg:text-2xl">
            <Link className="nav-link" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
