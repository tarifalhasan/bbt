import Image from "next/image";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

const DexProfileCard = () => {
  return (
    <div className=" space-y-3">
      <div className="">
        <h2 className="text-lg  font-semibold">Market Stats</h2>
        <p className=" text-xs font-normal text-gray">Updated 5 minutes ago</p>
      </div>
      <div>
        <div className=" inline-flex items-center">
          <h4 className=" text-sm font-semibold">GROK/WETH</h4>
          <Image src={"/images/gtc.svg"} alt="ftc" width={28} height={28} />
        </div>
        <div className=" inline-flex items-center gap-1">
          <div>
            <h2 className=" text-lg xl:text-xl font-semibold">$0.02320</h2>
          </div>
          <div className=" text-xs text-green font-semibold inline-flex items-center">
            <BsCaretUpFill size={19} />
            <p className=" ">40.31%</p>
          </div>
        </div>
      </div>
      <div className=" border-y grid grid-cols-2">
        <div className=" border-r py-4">
          <div className=" text-center space-y-.5">
            <p className=" text-sm font-semibold text-gray">Market Cap</p>
            <p className="text-sm font-normal">$152.7M</p>
            <p className=" text-xs text-green font-semibold inline-flex items-center">
              <BsCaretUpFill size={19} />
              <span className=" ">40.31%</span>
            </p>
          </div>
        </div>
        <div className="  py-4">
          <div className=" text-center space-y-.5">
            <p className=" text-sm font-semibold text-gray">Volume 24h</p>
            <p className="text-sm font-normal">$2.5M</p>
            <p className=" text-xs text-lose font-semibold inline-flex items-center">
              <BsCaretDownFill size={19} />
              <span className=" ">-6.34%</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <ul className=" space-y-1 py-4">
          <li className=" flex items-center justify-between">
            <span className="text-sm font-semibold text-gray">
              Circulating Supply
            </span>
            <span className="text-sm font-semibold">734.4T GROK</span>
          </li>
          <li className=" flex items-center justify-between">
            <span className="text-sm font-semibold text-gray">
              All Time High
            </span>
            <span className="text-sm font-semibold">$0.03502</span>
          </li>
        </ul>
        <ul className=" space-y-2">
          <li className=" flex border rounded-base p-2 items-center justify-between">
            <span className="text-sm font-semibold text-gray">5m</span>
            <span className="text-sm text-green  font-semibold">+ 0.09%</span>
          </li>
          <li className=" flex border rounded-base p-2 items-center justify-between">
            <span className="text-sm font-semibold text-gray">1h</span>
            <span className="text-sm text-green  font-semibold">+ 1.09%</span>
          </li>{" "}
          <li className=" flex border rounded-base p-2 items-center justify-between">
            <span className="text-sm font-semibold text-gray">6h</span>
            <span className="text-sm text-green  font-semibold">+ 16.74%</span>
          </li>
          <li className=" flex border rounded-base p-2 items-center justify-between">
            <span className="text-sm font-semibold text-gray">24h</span>
            <span className="text-sm text-green  font-semibold">+ 40.31%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DexProfileCard;
