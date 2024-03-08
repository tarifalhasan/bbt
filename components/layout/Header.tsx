"use client";

import { useClient } from "@/contex/clientContext";
import { cn } from "@/lib/utils";
const Header = () => {
  const { headerTab, setHeader } = useClient();

  return (
    <div className="flex items-center justify-end">
      <button
        className={cn(
          " text-base font-semibold h-[46px]  px-8 rounded-t-[7px]",
          headerTab === "dex" ? "bg-primary text-background" : "bg-black"
        )}
        onClick={() => setHeader("dex")}
      >
        DEX
      </button>
      <button
        className={cn(
          " text-base font-semibold h-[46px]  px-8 rounded-t-[7px]",
          headerTab === "nft" ? "bg-primary text-background" : "bg-black"
        )}
        onClick={() => setHeader("nft")}
      >
        NFT
      </button>{" "}
      <button
        className={cn(
          " text-base font-semibold h-[46px]  px-8 rounded-t-[7px]",
          headerTab === "wallet" ? "bg-primary text-background" : "bg-black"
        )}
        onClick={() => setHeader("wallet")}
      >
        Wallet
      </button>
    </div>
  );
};

export default Header;
