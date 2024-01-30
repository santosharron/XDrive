import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import vector from "../../assets/vector.svg";

const AccessSection = ({ getEthereumContract }) => {
  const router = useRouter();
  const [address, setAddress] = useState("");

  const access = async () => {
    try {
      const { contract } = await getEthereumContract();
      const fetchImages = await contract.display(address);
      const isEmpty = Object.keys(fetchImages).length === 0;
      if (!isEmpty) {
        const accessImages = fetchImages.toString().split(",");
        setAddress("");
        router.push(
          {
            pathname: "/gallery",
            query: { accessImages: accessImages },
          },
          "/gallery"
        );
      }
    } catch (e) {
      alert("You don't have access");
      setAddress("");
    }
  };
  return (
    <div className="bg-gray-900">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                Access <span className="text-blue-500">Community</span>
              </h1>

              <p className="mt-3 text-gray-400">
                To access your community account, you will need to enter your
                user
                <span className="font-medium text-blue-500"> address.</span>
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <input
                  id="address"
                  type="text"
                  className="flex-1 px-4 py-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Account Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                <button
                  className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  onClick={() => access()}
                  disabled={address.length === 0}
                >
                  Access
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image
              className="w-full h-full max-w-md"
              src={vector}
              alt="Vector art"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessSection;
