import Link from "next/link";

const DisplayImage = ({ image }) => {
    console.log(image)
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <Link
        href={`https://gateway.pinata.cloud/ipfs/${image.substring(7)}`}
        target="_blank"
      >
        <img
          alt="Image"
          className="w-full h-full object-cover object-center hover:opacity-75"
          src={`https://gateway.pinata.cloud/ipfs/${image.substring(7)}`}
        />
      </Link>
    </div>
  );
};

export default DisplayImage;
