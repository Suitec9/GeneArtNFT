// useBuyNFT.js

import { useState } from 'react';
import { ethers } from 'ethers'; 

export default function useBuyNFT(wallet, nft) {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
const handleBuy = async () => {

    setLoading(true);

    try {
      // Check if can afford NFT
      const canBuy = checkIfCanAfford(nft.price, wallet.balance);
            // Get NFT price and add 2.5% fee
            const price = nft.market.currentAsk.price;
            const fee = 0.025 * price;
            const total = price + fee;

      if (!canBuy) {
        throw new Error('Cannot afford NFT');
      }

       // Purchase NFT
       const tx = await zoraWallet.buyNFT(nft, {
        value: total
      });
      return tx

      // Transaction details      

    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }

  return { loading, error, handleBuy };


}
// Check affordability 
const checkIfCanAfford = (nftPrice, balance) => {
    // Adding sample gas fee
    const gasFee = ethers.utils.parseEther('0.05');
    const totalCost = nftPrice + gasFee ;
    return  balance >= totalCost ;
  }
