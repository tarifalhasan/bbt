import Image from "next/image";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

const MarketStats = () => {
  return (
    <div className="bg-card py-4 px-2 xl:px-4 border rounded-base">
      <div className="border-b flex items-center justify-between pt-5 pb-5">
        <div className="flex  flex-col md:flex-row md:items-center gap-2">
          <div>
            <h3 className="text-lg xl:text-xl font-semibold">Market Stats</h3>
          </div>
          <p className=" text-sm xl:text-base text-gray">
            Updated 11 months ago
          </p>
        </div>
        <div>
          <div className=" flex items-center gap-7 xl:gap-14">
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
            <div className=" border-l pl-7 xl:pl-14 border-border space-y-[1px]">
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
        </div>
      </div>
      <div className="flex flex-col md:flex-row pt-6 items-start  gap-7 justify-between">
        <div className="flex flex-col">
          <div className="  inline-flex items-center gap-1">
            <div>
              <h2 className=" text-sm xl:text-base font-semibold">LADYS</h2>
            </div>
            <Image
              src={"/images/LADYS1.png"}
              alt="LADYS1.png"
              width={28}
              height={30}
            />
          </div>
          <div className=" flex flex-col gap-2">
            <h2 className=" text-lg xl:text-2xl font-semibold">$0.00000003</h2>
            <div className=" text-sm xl:text-base text-lose font-semibold space-x-1 inline-flex items-center ">
              <BsCaretDownFill />
              <span>12.5%</span>
            </div>
          </div>
        </div>
        <div className=" space-y-3">
          <div>
            <p className=" text-xs sm:text-sm text-gray font-semibold">
              Circulating Supply
            </p>
            <h4 className=" text-sm sm:text-base font-semibold">
              734.4T LADYS
            </h4>
          </div>
          <div>
            <p className=" text-xs sm:text-sm text-gray font-semibold">
              Price Change (1H)
            </p>
            <h4 className=" text-sm sm:text-base font-semibold">
              <div className=" text-sm xl:text-base text-lose font-semibold space-x-1 inline-flex items-center ">
                <BsCaretDownFill />
                <span>-0.43%</span>
              </div>
            </h4>
          </div>
          <div>
            <p className=" text-xs sm:text-sm text-gray font-semibold">
              Price Change (7D)
            </p>
            <h4 className=" text-sm sm:text-base font-semibold">
              <div className=" text-sm xl:text-base text-lose font-semibold space-x-1 inline-flex items-center ">
                <BsCaretDownFill />
                <span>-5.52%</span>
              </div>
            </h4>
          </div>
        </div>
        <div className=" space-y-3">
          <div>
            <p className=" text-xs sm:text-sm text-gray font-semibold">
              All Time High
            </p>
            <h4 className=" text-sm sm:text-base font-semibold">$0.00000018</h4>
          </div>
          <div>
            <p className=" text-xs sm:text-sm text-gray font-semibold">
              Price Change (24H)
            </p>
            <h4 className=" text-sm sm:text-base font-semibold">
              <div className=" text-sm xl:text-base text-lose font-semibold space-x-1 inline-flex items-center ">
                <BsCaretDownFill />
                <span>-6.8% </span>
              </div>
            </h4>
          </div>
          <div>
            <p className=" text-xs sm:text-sm text-gray font-semibold">
              Price Change (7D)
            </p>
            <h4 className=" text-sm sm:text-base font-semibold">
              <div className=" text-sm xl:text-base text-lose font-semibold space-x-1 inline-flex items-center ">
                <BsCaretDownFill />
                <span>-5.52%</span>
              </div>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketStats;
