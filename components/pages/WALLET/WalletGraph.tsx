import TimeChageZone from "@/components/common/TimeChageZone";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import nft_graph_statistics from "@/public/images/nft_graph.png";
import Image from "next/image";
import { BsCamera, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { TbSettings } from "react-icons/tb";

const WalletGraph = () => {
  return (
    <div className=" bg-card py-4 px-2 xl:px-4 border rounded-base">
      <div>
        <Tabs defaultValue="price" className="w-[400px] ">
          <TabsList className="bg-[#262629]">
            <TabsTrigger value="price">Price</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className=" flex flex-col space-y-2">
          <div className="flex pt-6 flex-col lg:flex-row lg:justify-between gap-5">
            <div className="space-y-2">
              <h2 className="text-xl xl:text-2xl font-semibold">Performance</h2>
              <p className="text-sm xl:text-base text-gray font-semibold">
                Current holdings
              </p>
              <div>
                <div className="  inline-flex items-center gap-1">
                  <h2 className=" text-3xl xl:text-4xl font-semibold">
                    $63.68
                  </h2>
                  <span className="text-sm xl:text-base text-gray font-semibold">
                    USD
                  </span>
                </div>
                <p className="text-xs  font-normal text-lose">−1.6% ($1.03)</p>
              </div>
            </div>
            <div className=" space-y-3 pt-8  pb-5 ">
              <div className=" inline-flex items-center space-x-6">
                <button>
                  <MdOutlineZoomOutMap size={24} />
                </button>
                <button>
                  <BsCamera size={24} />
                </button>
                <button>
                  <TbSettings size={24} />
                </button>
                <button>
                  <BsThreeDotsVertical className=" text-gray" size={24} />
                </button>
                <button>
                  <FaRegStar size={24} />
                </button>
              </div>
              <TimeChageZone />
            </div>
          </div>
          <div>
            <Image
              className=" w-full block mx-auto"
              src={nft_graph_statistics}
              alt="nft"
              quality={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletGraph;
