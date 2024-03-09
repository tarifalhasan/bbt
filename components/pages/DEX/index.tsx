import Header from "@/components/layout/Header";
import { Input } from "@/components/ui/input";
import graph from "@/public/images/dex_graph.webp";
import Image from "next/image";
import DexCalculator from "./DexCalculator";
import DexProfileCard from "./DexProfileCard";
import DexTransactions from "./DexTransactions";
import TopGainers from "./TopGainers";
const DEX = () => {
  return (
    <div className=" w-full xl:w-[calc(80%-20px)] h-full flex gap-1">
      <div className="p-2  overflow-x-hidden overflow-y-auto rounded-[7px]   lg:pt-0   flex-1 flex flex-col relative z-10 will-change-transform justify-start h-[calc(100vh-40px)]  w-full xl:w-[calc(53%-20px)]">
        <Header />
        <div className=" space-y-5">
          <div>
            <Image className="w-full" src={graph} alt="dex graph" />
          </div>
          <DexTransactions />
          <DexCalculator />
        </div>
      </div>
      <aside className="flex-col p-4 rounded-[7px] justify-between right-0 left-0 top-0 overflow-hidden overflow-y-auto bg-card max-w-[280px]  relative w-[calc(27%-20px)] z-50 h-full hidden xl:flex">
        <div className=" overflow-y-auto space-y-3">
          <Input placeholder="Search" />
          <DexProfileCard />
          <TopGainers />
        </div>
      </aside>
    </div>
  );
};

export default DEX;
