import TimeChageZone from "@/components/common/TimeChageZone";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import nft_graph_statistics from "@/public/images/nft_graph.png";
import Image from "next/image";
import {
  BsCamera,
  BsCaretDownFill,
  BsCaretUpFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { TbSettings } from "react-icons/tb";

const NftGraph = () => {
  return (
    <div className=" bg-card py-4 px-2 xl:px-4 border rounded-base">
      <div>
        <div className=" flex flex-col space-y-2">
          <div className="  inline-flex items-center gap-1">
            <div>
              <h2 className=" text-xl xl:text-2xl font-semibold">LADYS</h2>
            </div>
            <Image
              src={"/images/LADYS1.png"}
              alt="LADYS1.png"
              width={43}
              height={46}
            />
          </div>
          <div className=" inline-flex items-center gap-2">
            <h2 className=" text-3xl xl:text-5xl font-semibold">$0.00000003</h2>
            <div className=" text-sm xl:text-base text-lose font-semibold space-x-1 inline-flex items-center ">
              <BsCaretDownFill />
              <span>12.5%</span>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row gap-4 pt-8 border-b pb-5 justify-between md:items-center">
            <div className=" flex items-center gap-10 2xl:gap-24">
              <div className=" space-y-[1px]">
                <h5 className=" text-xs xl:text-sm font-semibold text-gray">
                  Market Cap
                </h5>
                <h3 className=" text-base text-white font-normal">$23.2M</h3>
                <div className=" text-sm xl:text-base text-green font-semibold space-x-1 inline-flex items-center ">
                  <BsCaretUpFill />
                  <span>0.57%</span>
                </div>
              </div>
              <div className=" border-l pl-10 2xl:pl-24 border-border space-y-[1px]">
                <h5 className=" text-xs xl:text-sm font-semibold text-gray">
                  Volume 24h
                </h5>
                <h3 className=" text-base text-white font-normal">$2.5M</h3>
                <div className=" text-sm xl:text-base text-lose font-semibold space-x-1 inline-flex items-center ">
                  <BsCaretDownFill />
                  <span>0.57%</span>
                </div>
              </div>
            </div>
            <TimeChageZone />
          </div>
          {/* price and chart */}
          <div className=" flex py-5 flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <Tabs defaultValue="price" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="price">Price</TabsTrigger>
                <TabsTrigger value="chart">Chart</TabsTrigger>
              </TabsList>
              {/* <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent> */}
            </Tabs>
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

export default NftGraph;
