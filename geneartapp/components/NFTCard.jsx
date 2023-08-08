// Components/NFTCard.jsx

export default function NFTCard({nft}) {
    return (
        <div>
            <img src= {nft.metadata.image} />
            <h3>{nft.metadata.name}</h3>
            <p>{nft.metadata.description}</p>
        </div>
    )
}