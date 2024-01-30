import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { contractABI, contractAddress } from "@/lib/constants";
import { ethers } from "ethers";

export const XDriveContext = createContext();

export const XDriveProvider = ({ children }) => {
  const router = useRouter();
  const [appStatus, setAppStatus] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus("noMetaMask");
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        setAppStatus("connected");
        setCurrentAccount(addressArray[0]);
      } else {
        router.push("/");
        setAppStatus("notConnected");
      }
    } catch (error) {
      setAppStatus("error");
    }
  };

  const connectToWallet = async () => {
    if (!window.ethereum) return setAppStatus("noMetaMask");
    try {
      setAppStatus("loading");

      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (addressArray.length > 0) {
        setAppStatus("connected");
        setCurrentAccount(addressArray[0]);
      } else {
        router.push("/");
        setAppStatus("notConnected");
      }
    } catch (error) {
      setAppStatus("error");
    }
  };

  const getEthereumContract = () => {
    let metamask = window.ethereum;
    if (!metamask) return;
    const provider = new ethers.providers.Web3Provider(metamask);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    return { signer, contract };
  };

  return (
    <XDriveContext.Provider
      value={{
        appStatus,
        currentAccount,
        connectToWallet,
        setAppStatus,
        getEthereumContract,
      }}
    >
      {children}
    </XDriveContext.Provider>
  );
};
