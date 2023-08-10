import {Sketch} from "../components/Sketh.js";
import NFTCard from '../components/NFTCard.jsx';
import  {Component} from '../components/useBuyNFT.js';
import { useState, useEffect } from "react";
import { Provider, Wallet, ZDKNetwork } from '@zoralabs/zdk';
import { MediaFetchAgent, AuctionManager } from '@zoralabs/zdk/dist/plugins';
import {ethers} from "ethers";


export default async function Homepage() {

  // state and layout
  const [pageTitle] = useState('NFT Market')
   pageTitle;
  
  // Create p5 sketch instance
  const Sketch = useRef(null);
  
  // On mount, create new p5 instance with sketch
  useEffect(() => {
    Sketch.current = new p5(Sketch);
  }, []);

  // Generate NFT metadata 
  const metadata = {
    name: "Cool NFT",
    description: "generative art",
    image: "ipfs://abc123"
  };

  
  // connect wallet
  const [connectedWallet, setConnectedWallet] = useState(null);

  const connectWallet = async () => {
    const walletAccount = await  connectWallet();
    setConnectedWallet(walletAccount);
  }

  // zora initialization
  const networkInfo = new Provider({
    network: ZDKNetwork.ZoraGoerli,
    chainId: 999 

});

  const API_ENDPOINT = "https://api.zora.co/graph";
  const args = {
    endPoint: API_ENDPOINT,
    networks:[networkInfo],
    apiKey: process.env.API_KEY
  }
  const zdk = new zdk(args)

  const zoraWallet =new Wallet(zoraProvider);

  zoraWallet.connect(window.ethereum);

  // Generate NFT metadata
  const zoraExampleNFT = zdk.NFT({
    name : 'My NFT',
    description : 'Minted on Zora!',
    file : Sketch.current.canvas,
    properties : {
      custom : 'data'
    }
  });

  // Mint NFT
  const mintedZoraNFT = await zoraWallet.mintNFT(zoraExampleNFT); 
  mintedNFT(mintedZoraNFT);

  // Combine wallet accounts 
  const connectedAccount = zoraWallet.account[0];

  const [ mintedNFT, setMintedNFT] = useState(null);

  // When minting

  const nft = await zoraWallet.mintNFT(metadata);
  setMintedNFT(nft);
  
  // Fetch user NFTs
  const [userNFTs, setuserNFTs] = useState();

  useEffect(()=> {
    const fetchNFTs = async () => {
      const agent = new MediaFetchAgent(Provider);
      zdk.aggregateAttributes(
        {where}
      )
      const nfts = await agent.getUserNFTs(zoraWallet.address);
      setuserNFTs(nfts);
    }
    fetchNFTs();
  }, [])
  
  const {Nft, loading } = useNFTDetials(
    Nft.contractAddress,
    Nft.tokenId
      );

        function useBuyNFT(wallet, NFTs) {
        const [Loading, setLoading] = useState(false);
        const [Error, setError] = useState();
        require(
          AuctionManager,useBuyNFT(wallet,NFTs))

         
        async function handleBuy() {
          setLoading(true);

          try {
            // Check if the buyer can afford the NFT
            const canBuy = checkIfCanAfford(nft.price, wallet.balance);
            // Get NFT price and add 2.5% fee
            const price = nft.market.currentAsk.price;
            const fee = 0.025 * price;
            const total = price + fee;

            if (!canBuy) {
              throw new Error('Cannot afford NFT');
            }

            // Purchase NFT
            const tx = await wallet.buyNFT(nft, {
              value: total
            });
            return tx(FEE_PERCENT);


            // Transaction details 
          } catch (Error) {
            setError(Error);
          }

          setLoading(false);
        }

        return { loading, Error, handleBuy };
        
      }

      // Check affordability
    const checkIfCanAfford = (nftPrice, balance) => {
      // Adding sample gas fee
      const gasFee = ethers.utils.parseEthers('0.05');
      const totalCost = nftPrice + gasFee ;
      return  balance >= totalCost ;
    }

    // Sell NFT =  
    const sellNFT = (nft,price) => {
      const fee = 0.025 * price() // 2.5% fee
      fee(FEE_PERCENT);
       return zoraWallet.sellNFT(nft, {
        amount: price,
        receiver: zoraWallet.address,// get fee
        skipApproval: true
    

       }) 
    }

    // Globally available
    const FEE_PERCENT = 0.025; 
     
    function takeFee(amount) {
    return FEE_PERCENT * amount;
  }

    // WHen buying
    const total = takeFee(nft.price) + nft.price;
    total - useBuyNFT(FEE_PERCENT);

    // When selling
    const amountAfterFee = nft.price - takeFee(nft.price)
    amountAfterFee(FEE_PERCENT)

    // Direct the taxxed fee to our wallet
    // when the Buyer is buying NFTs
    const tx = await Wallet.buyNFT({
      receiver: FEE_RECEIVER_WALLET
    });
   tx(FEE_PERCENT) ;
    // When seller is selling their NFTs
    await Wallet.sellNFT({
      amount: amountAfterFee,
      receiver: FEE_RECEIVER_WALLET
    })



  return (
    <div>
      <h>GeneNFTs</h>

      <div className="connect-Wallet"> {button}
      <button onClick={connect}>Connnect Wallet</button>
      </div>
      
      const loading {Error} handleBuy{"}"} = useBuyNFT(wallet, nft);
      <div className="Buy-NFT">{button}
      <button onClick={handleBuy}> Buy NFT   </button>
      </div>
      

     <div className="Sell-NFT"> {button}
     <button onClick={sellNFT}> Sell NFT</button>
     </div>


      <sketch ref={sketchRef} />

      // Show minted NFTs
      {mintedNFT && 
      <div>
        <img src={mintedNFT.metadata.image} /> 
        <p>{mintedNFT.metadata.name}</p>
        </div>
        }
        // Display user NFTs
        <div className="user-nfts">
          {userNFTs.map(nft => (
            <NFTCard
            key={nft.tokenId}
            nft={nft}
            /> 
          ) )}
        </div>

    </div>
  )
}
