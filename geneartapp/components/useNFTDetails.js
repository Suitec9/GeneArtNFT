import { useState ,useEffect } from 'react';

export default function useNFTDetials(nftId) {

    const [nft, setNft]  = useState();
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        async function fetchNFT() {
            const nft = await ApiError.fetchNFT(nftId);
            setNft(nft) ;
            setLoading(false);
        }
        fetchNFT();  
    }, [nftId]);

    return { nft, loading };
}