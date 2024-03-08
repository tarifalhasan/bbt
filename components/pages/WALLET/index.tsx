import Header from "@/components/layout/Header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { TbFilterStar } from "react-icons/tb";
import NftCollection from "../NFT/Collection";
import MarketStats from "./MarketStats";
import NftCard from "./NftCard";
import WalletAssets from "./WalletAssets";
import WalletGraph from "./WalletGraph";
import WalletProfileCard from "./WalletProfileCard";

const WALLET = () => {
  const nfts_dummy_data = [
    {
      attributes: {
        pendingRewards: "0 BRR",
        createdDate: "1684731359000",
        length: "19",
        registrationDate: "1684731359000",
        expirationDate: "1716267359000",
        namewrapperState: "Emancipated",
        namewrapperExpiryDate: "1724043359000",
      },
      details: {
        network: "Arbitrum",
        description: "This scammer is making 0.1 BRR daily",
        username: "Sifu: peepoo",
        tokenName: "BRR Scammers NFT",
        nftImage: "/images/nft2.png",
      },
    },
  ];
  return (
    <div className="w-full xl:w-[calc(80%-20px)] h-full flex gap-5">
      <div className="p-2  overflow-x-hidden overflow-y-auto rounded-[7px]   lg:pt-0   flex-1 flex flex-col relative z-10 will-change-transform justify-start h-[calc(100vh-40px)]  w-full xl:w-[calc(53%-20px)]">
        <Header />
        <div className=" h-full   space-y-5">
          <WalletGraph />
          <WalletAssets />
          <MarketStats />
          <NftCollection />
        </div>
      </div>
      <aside className="flex-col p-4 rounded-[7px] justify-between right-0 left-0 top-0 overflow-hidden overflow-y-auto max-w-[280px] bg-card  relative w-[calc(27%-20px)] z-50 h-full hidden xl:flex">
        <div className=" space-y-4">
          <Input placeholder="Search" />
          <WalletProfileCard
            username="thanoscock.eth"
            imageUrl="/images/72.png"
            value="$63.68"
            change="−1.6% ($1.03)"
          />
          {/* Filters and val;ue */}
          <div className=" pt-4">
            <div className=" space-y-1">
              <h3 className="text-2xl font-semibold">NFTs</h3>
              <p className="text-base text-gray">Total value by floor price</p>
              <div className=" flex items-center justify-between">
                <div className=" inline-flex items-center">
                  <p className=" text-4xl font-semibold">$0.00</p>
                  <p className="text-base font-semibold text-gray">USD</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <TbFilterStar size={24} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className=" space-y-4">
            {/* Nft Card */}
            {nfts_dummy_data.map((nft, index) => (
              <NftCard
                key={index}
                attributes={nft.attributes}
                details={nft.details}
              />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default WALLET;
