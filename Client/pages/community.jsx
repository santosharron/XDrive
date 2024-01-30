import AccessList from "@/components/community/AccessList";
import Footer from "@/components/utility/Footer";
import Header from "@/components/utility/Header";
import { XDriveContext } from "@/context/XDriveContext";
import { useContext, useEffect, useState } from "react";

const community = () => {
  const { getEthereumContract } = useContext(XDriveContext);
  const [accessList, setAccessList] = useState([]);

  useEffect(() => {
    shareAccess();
  }, []);

  const shareAccess = async () => {
    const { contract } = await getEthereumContract();
    const addressList = await contract.shareAccess();
    setAccessList(addressList);
  };

  const revoke = async (address) => {
    try {
      const { contract } = await getEthereumContract();
      await contract.disallow(address);
      setAccessList(accessList.filter((item) => item.user !== address));
      alert("Revoke Successful");
    } catch (e) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex-1 bg-gray-900">
      <Header />
      <AccessList accessList={accessList} revoke={revoke} />
      <Footer />
    </div>
  );
};

export default community;
