import AccessSection from "@/components/access/AccessSection";
import Footer from "@/components/utility/Footer";
import Header from "@/components/utility/Header";
import { XDriveContext } from "@/context/XDriveContext";
import { useContext } from "react";

const access = () => {
  const { getEthereumContract } = useContext(XDriveContext);
  return (
    <div className="flex-1">
      <Header />
      <AccessSection getEthereumContract={getEthereumContract} />
      <Footer />
    </div>
  );
};

export default access;
