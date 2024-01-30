import ShareSection from "@/components/share/ShareSection";
import Footer from "@/components/utility/Footer";
import Header from "@/components/utility/Header";
import { XDriveContext } from "@/context/XDriveContext";
import { useContext } from "react";

const share = () => {
  const { getEthereumContract } = useContext(XDriveContext);
  return (
    <div className="flex-1">
      <Header />
      <ShareSection getEthereumContract={getEthereumContract} />
      <Footer />
    </div>
  );
};

export default share;
