import {useState}  from 'react';

export default function useBurnNFT(nft) {
    const [loadingBurn , setLoading] = useState(false);

    const burnNFT = async() => {
        setLoading(true);

        try {
            await zoraWallet.burn(nft);
            
            // Additional logic 

            // Refresh data 
            await fetchNFTs();

            // Show notification
            showToast('NFT burned successfully!!');

            // Log for analytics
            logNFTBurn(nft);
            
        } catch (error) {
            // Handle error
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    return { loadingBurn, burnNFT};
}

