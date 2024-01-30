import DisplayImage from "./DisplayImage";
import NotFound from "../utility/NotFound";

const ImageSection = ({ images }) => {
  return images.length !== 0 ? (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Image Gallery🌃
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Showing your image collection gallery can be a great way to share
            your personal or professional work with others and display your
            creativity and artistic vision.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {images.map((image, index) => (
            <DisplayImage key={index} image={image} />
          ))}
        </div>
      </div>
    </section>
  ) : (
    <NotFound title="Image" />
  );
};

export default ImageSection;
