import useNFTDetials from './useNFTDetails';
import useBuyNFT from './useBuyNFT';
import { useState } from 'react';
import useBurnNFT from './useBurnNFT';

// Components/NFTCard.jsx

export default function NFTCard({nft}) {

  const { nft , loading } = useNFTDetials(nft.Id);

  const {buyLoading , handlebuy } = useBuyNFT(nft); {
    if (buyLoading, handlebuy) 
    return(useBuyNFT)
  }

  if (loading) {
    return <loadingSpinner />
  }

  
  const [ transferLoadindg, setTransferLoadling ] = useState(false);

  const [ successMsg, setSuccessMsg ] = useState('');

  async function handleTransfer() {
    
    setTransferLoadling(true);

    try {
      await zoraWallet.transferFrom(nft, toAddress);

      // Refreash data
      await reFetchNFTs();
      setSuccessMsg('Transfer successfull!!!');
    } catch(error) {
      // handle error
      setError(error)
    
    } finally {
      setTransferLoadling
    }
  } handleTransfer;

  const { loadingBurn, burnNFT } = useBurnNFT(nft);


    return (
      <div className="nft-card">
     
        <div className='actions'>
          <button disabled={buyLoading} onClick={handlebuy}>
            {buyLoading ? 'Buying...' : 'Buy'}
            </button> 
        </div>

        <>
        <button
         loading={loadingTransfer}onClick={handleTransfer}>Transfer</button>
         <button 
         loading={loadingBurn}onClick={burnNFT}>burnNFT</button>
         </>
        <div>
            <img src= {nft.metadata.image} />
            <h3>{nft.metadata.name}</h3>
            <p>{nft.metadata.description}</p>
        </div>
        </div> 
    )

}