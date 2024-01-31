import ImageSection from "@/components/gallery/ImageSection";
import Footer from "@/components/utility/Footer";
import Header from "@/components/utility/Header";
import { XDriveContext } from "@/context/XDriveContext";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "@/lib/constants";


// Assuming CONTRACT_ADDRESS, ABI, id, and descriptionCID are defined somewhere

const gallery = () => {
  const { currentAccount, getEthereumContract } = useContext(XDriveContext);
  const [images, setImages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // if (!currentAccount) return;
    // if (router.query.accessImages) {
    //   setImages(router.query.accessImages);
    // } else {
    display();
    // }
  }, [currentAccount]);

  const display = async () => {
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        console.log("Value of current account :", currentAccount);
  
        let fetchImages = await connectedContract.display(`${currentAccount}`);
        console.log(fetchImages);
  
        const isEmpty = Object.keys(fetchImages).length === 0;
        if (!isEmpty) {
          const renderImages = fetchImages.toString().split(",");
          setImages(renderImages);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Rest of the code

  return (
    <div className="flex-1">
      <Header />
      <ImageSection images={images} />
      <Footer />
    </div>
  );
};

export default gallery;
