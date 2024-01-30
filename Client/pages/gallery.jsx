import ImageSection from "@/components/gallery/ImageSection";
import Footer from "@/components/utility/Footer";
import Header from "@/components/utility/Header";
import { XDriveContext } from "@/context/XDriveContext";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const gallery = () => {
  const { currentAccount, getEthereumContract } = useContext(XDriveContext);
  const [images, setImages] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (!currentAccount) return;
    if (router.query.accessImages) {
      setImages(router.query.accessImages);
    } else {
      display();
    }
  }, [currentAccount]);

  const display = async () => {
    if (!currentAccount) return;
    try {
      const { contract } = await getEthereumContract();
      const fetchImages = await contract.display(currentAccount);
      const isEmpty = Object.keys(fetchImages).length === 0;
      if (!isEmpty) {
        const renderImages = fetchImages.toString().split(",");
        setImages(renderImages);
      }
    } catch (e) {
      alert("You don't have access");
    }
  };

  return (
    <div className="flex-1">
      <Header />
      <ImageSection images={images} />
      <Footer />
    </div>
  );
};

export default gallery;
