import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";

const TopGainers = () => {
  const data = [
    {
      name: "GROK",
      icon: "/images/gainer/grok.png",
      price: ".05024804",
      name2: "WETH",
    },
    {
      name: "PEPE",
      icon: "/images/gainer/pepe.png",
      price: ".05024804",
      name2: "SOL",
    },
    {
      name: "FROGE",
      icon: "/images/gainer/force.png",
      price: ".05024804",
      name2: "WETH",
    },
    {
      name: "Q*",
      icon: "/images/gainer/q.png",
      price: ".05024804",
      name2: "WETH",
    },
    {
      name: "IPTV",
      icon: "/images/gainer/iptv.png",
      price: ".05024804",
      name2: "WETH",
    },
    {
      name: "LEIA",
      icon: "/images/gainer/leia.png",
      price: ".05024804",
      name2: "SOL",
    },
    {
      name: "GDAG",
      icon: "/images/gainer/gdag.png",
      price: ".05024804",
      name2: "WETH",
    },
    {
      name: "SKIB",
      icon: "/images/gainer/skib.png",
      price: ".05024804",
      name2: "SOL",
    },
    {
      name: "MUBI",
      icon: "/images/gainer/mubi.png",
      price: ".05024804",
      name2: "WETH",
    },
  ];
  return (
    <div className=" pt-5">
      <button className=" inline-flex items-center gap-1">
        <span className=" text-lg xl:text-xl font-semibold">Top Gainers</span>
        <FaChevronDown className=" text-primary " size={24} />
      </button>
      <div className=" pt-3">
        <div className=" rounded-t-base w-full bg-[#0F0F0F] flex items-center justify-between p-3">
          <span className=" text-xs  font-normal text-gray">Token</span>
          <span className=" text-xs  font-normal text-gray">
            Price (in USD)
          </span>
        </div>
        <ul>
          {data.map((item, index) => (
            <div
              key={index}
              className=" odd:bg-light_gray px-3 py-4 flex items-center justify-between"
            >
              <div className=" inline-flex items-center gap-x-1">
                <Image src={item.icon} alt={item.name} width={21} height={24} />
                <div>
                  <span className=" text-sm font-normal">
                    GROK/
                    <span className="s text-gray">WETH</span>
                  </span>
                </div>
              </div>
              <div>
                <span className=" text-sm font-semibold">.05024804</span>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopGainers;
