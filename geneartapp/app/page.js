import Sketch1 from '../sketchs/sketch1';
import {Moralis} from "moralis";
import NFTCard from '../components/NFTCard';

export default function Homepage()  {

  // Create p5 sketch instance
  const sketch = useRef(null);

  // On mount, create new p5 instance with sketch
  useEffect(() => {
    sketch.current = new p5(sketch);
  }, []);

  // Generate NFT metadata 
  const metadata = {
    name: "Cool NFT",
    description: "generative art",
    image: "ipfs://abc123"
  };

  // Extend Moralis Object for NFTs
  const NFT = Moralis.Oject.Extend("NFT");

  // Create and save NFT object
  const nft = new NFT();
  nft.set("metadata", metadata);
  nft.save();

  // Display NFT cards
  async function getNFTs() {
    const query = new Moralis.Query("NFT");
    return await query.find();
  }

  const nfts = await getNFTs();

  return (
    <div>
      <sketch ref={sketch} />
      <div>{nfts.map(nft => ( <NFTCard key={nft.id} 
       nft={nft} /> 
       ))} </div>

      </div>
      
  );
}
