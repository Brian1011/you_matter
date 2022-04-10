import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import dynamic from "next/dynamic";
import BannerComponent from "../components/banner";

function DonateForm() {
  const [donateValue, setDonateValue] = useState(0);
  const [balance, setBalance] = useState(0);

  const ABI = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_greeting",
          type: "string",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "donate",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "greet",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_greeting",
          type: "string",
        },
      ],
      name: "setGreeting",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  useEffect(() => {
    // provider to connect to wallet
    const provider = new ethers.providers.Web3Provider(global.window.ethereum);
    const signer = provider.getSigner();
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const contract = new ethers.Contract(contractAddress, ABI, signer);

    const connectWallet = async () => {
      // MetaMask requires requesting permission to connect users accounts
      await provider.send("eth_requestAccounts", []);
    };

    // get wallet balance
    const getBalance = async () => {
      const balance = await provider.getBalance(contractAddress);
      const balanceFormatted = ethers.utils.formatEther(balance);
      setBalance(balanceFormatted);
    };

    connectWallet().catch(console.error);

    getBalance().catch(console.error);
  });

  const handleDepositChange = (e) => {
    setDonateValue(e.target.value);
  };

  const handleDepositSubmit = async (e) => {
    e.preventDefault();
    console.log(donateValue);

    // providers
    const provider = new ethers.providers.Web3Provider(global.window.ethereum);
    const signer = provider.getSigner();
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const contract = new ethers.Contract(contractAddress, ABI, signer);

    // eth value
    const ethValue = ethers.utils.parseEther(donateValue);
    const depositEth = await contract.donate({ value: ethValue });
    await depositEth.wait();

    const balance = await provider.getBalance(contractAddress);
    const balanceFormatted = ethers.utils.formatEther(balance);
    setBalance(balanceFormatted);
    setDonateValue(0);
  };

  return (
    <div className="w-full flex flex-col justify-center mt-4 p-4 text-white bg-black h-screen">
      <div className="flex flex-col space-y-2 justify-center">
        <div className="self-center text-4xl">
          Total Donated Value: {balance} ETH
        </div>
        <div className="self-center border-2 rounded-md border-white p-4">
          <form
            onSubmit={handleDepositSubmit}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="self-center">Enter Amount to Donate</div>
            <input
              placeholder="Amount"
              type="number"
              className="py-2 px-2 border border-gray-500 rounded-md text-black"
              onChange={handleDepositChange}
              value={donateValue}
            />

            <button
              className="bg-blue-600 text-white rounded-md flex self-center"
              type="submit"
            >
              <div className="py-3 px-6 text-xl">Donate</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonateForm;
