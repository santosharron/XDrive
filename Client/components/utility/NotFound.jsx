import Image from "next/image";
import { useRouter } from "next/router";
import gallery from "../../assets/gallery.jpg";

const NotFound = ({ title }) => {
  const router = useRouter();
  return (
    <section className="bg-gray-900 ">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <h1 className="text-2xl font-semibold text-white md:text-3xl">{`${title} not found`}</h1>
          <p className="mt-4 text-gray-400">
            Sorry, you don't have an image to display at the moment. Please
            upload an image to show.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <button
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-800 bg-gray-900 text-gray-200 border-gray-700"
              onClick={() => router.back()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Go back</span>
            </button>

            <button
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto hover:bg-blue-500 bg-blue-600"
              onClick={() => router.push("/")}
            >
              Take me home
            </button>
          </div>
        </div>

        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <Image
            className="w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover"
            src={gallery}
            alt="Image"
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
