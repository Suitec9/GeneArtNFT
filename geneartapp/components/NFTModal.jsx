import { metadata } from '@/app/layout';
import {useState} from 'react';

function NFTModal({nft}) {
    const [open ,setOpen] = useState(false);
    


return (
    <div>
        <button onClick={() => setOpen(true)}>Details</button>

        { open && 
           <Modal>
            // display data
            <div>
            <img src={nft.metadata.name} />
            <h1>{nft.metadata.name}</h1>
            <p>{nft.metadata.description}</p>
            </div>
            <div>
                <h3>Owner History</h3>
                <div>
                    {nft.ownershipHistory.map(event => (
                        <><><div key={event.to}>
                            {event.to} - {event.from}
                        </div>
                            <h4>Sale History</h4>
                            {nft.saleHistory.map(sale => (
                                <div key={sale.eventId}>
                                    Sold for {sale.totalPrice} ETH
                                </div>
                            ))}</>
                            <div>
                                Current Ask: {nft.market.currentAsk.price} ETH 
                                </div>
                                <div>
                                    Reserve Price: {nft.market.auction.reservePrice}
                                    Highest Bid: {nft.market.auction.highestBi}
                                     </div>
                                     <div>
                                        {nft.market.offerings.map(offer => (
                                            <div key={offer.id}>
                                                {offer.price} ETH from {offer.bidder}
                                            </div>
                                        ))}
                                         </div>
                                         <div>
                                            <h5>Price History</h5>
                                            
                                            {nft.market.priceHistory.map(sale => (
                                                <div key={sale.eventId}>
                                                    {sale.totalPrice} ETH
                                                </div>
                                            ))}
                                            </div>
                                            </>
                    ))}
                </div>
                </div>
            </Modal>}
    </div>
)
}