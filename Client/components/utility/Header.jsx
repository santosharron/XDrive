import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <Image src={logo} className="w-10 h-10" alt="Logo" />
          <span className="ml-4 text-xl">XDrive</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-white">
            Home
          </Link>
          <Link href="/gallery" className="mr-5 hover:text-white">
            Gallery
          </Link>
          <Link href="/community" className="mr-5 hover:text-white">
            Community
          </Link>
          <Link href="/access" className="hover:text-white">
            Access
          </Link>
        </nav>
        <Link href="/share">
          <button className="inline-flex items-center bg-indigo-600 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500 rounded text-base mt-4 md:mt-0 text-white">
            Share Account
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
