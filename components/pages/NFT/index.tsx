import Header from "@/components/layout/Header";
import { Input } from "@/components/ui/input";
import NftCollection from "./Collection";
import ContractCard from "./ContractCard";
import MarketStats from "./MarketStats";
import NftGraph from "./NftGraph";
import TokenDetails from "./TokenDetails";

const NFT = () => {
  return (
    <div className=" w-full xl:w-[81%] h-full flex gap-10">
      <div className="p-2  overflow-x-hidden overflow-y-auto rounded-[7px]   lg:pt-0   flex-1 flex flex-col relative z-10 will-change-transform justify-start h-[calc(100vh-40px)]  w-full xl:w-[62%]">
        <Header />
        <div className=" h-full   space-y-5">
          <NftGraph />
          <MarketStats />
          <NftCollection />
        </div>
      </div>
      <aside className="flex-col p-4 rounded-[7px] justify-between right-0 left-0 top-0 overflow-hidden overflow-y-auto bg-card flex-none max-w-[280px] relative w-[19%] z-50 h-full hidden xl:flex">
        <div className=" space-y-5">
          <Input placeholder="Search" />
          <ContractCard
            title="Milady 2321"
            subTitle="Milady Maker"
            avatarSrc="https://github.com/shadcn.png"
            imageSrc="/images/girl_sds.png"
            price="2.6249 ETH"
            priceLabel="$5,423.17"
            time="5d 16h"
            views="293"
          />
          <TokenDetails
            contractAddress="0x5af0...25a5"
            tokenId="2321"
            tokenStandard="0x5af0...25a5"
            chain="Ethereum"
            lastUpdated="11 months ago"
            creatorEarnings="5%"
          />
        </div>
      </aside>
    </div>
  );
};

export default NFT;
