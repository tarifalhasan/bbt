import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { IoShareSocial } from "react-icons/io5";

const NftCollection = () => {
  return (
    <div className="bg-card py-4 px-2 xl:px-4 border rounded-base">
      <div className=" pt-4">
        <Input placeholder="Search Collection" />
      </div>
      <div className=" flex items-start flex-col lg:flex-row gap-5 pt-5">
        <div className=" space-y-5 w-full lg:max-w-[253px]">
          <div className=" space-y-2">
            <Label className="text-sm font-semibold">1.Buy Price</Label>
            <Input placeholder="ETH" />
          </div>
          <div className=" space-y-2">
            <Label className="text-sm font-semibold">2.Sell Price</Label>
            <Input placeholder="ETH" />
          </div>
          <div className=" space-y-2">
            <Label className="text-sm font-semibold">
              3.Collection Royalty
            </Label>
            <Input placeholder="%" />
          </div>
          <div className=" space-y-2">
            <Label className="text-sm font-semibold">4.Service Fee</Label>
            <Input placeholder="%" />
          </div>
          <div className=" space-y-2">
            <Label className="text-sm font-semibold">5.Buy Gas Fee</Label>
            <Input placeholder="ETH" />
          </div>
          <div className=" space-y-2">
            <Label className="text-sm font-semibold">6.List Gas Fee</Label>
            <Input placeholder="ETH" />
          </div>
          <div>
            <Button>Calculate</Button>
          </div>
        </div>
        <div className="flex-1 w-full p-4 space-y-4 rounded-base border h-full">
          <div className="flex border-b pb-6 items-start justify-between">
            <div className="flex  items-end gap-3">
              <Image
                width={95}
                height={100}
                src={"/images/girl.png"}
                alt="girl"
              />
              <p className="text-base font-semibold">Milady Maker</p>
            </div>
            <button>
              <IoShareSocial size={28} />
            </button>
          </div>
          <div className="">
            <div className=" bg-black/20  rounded-[7px] p-3">
              <p className="text-sm text-gray font-normal">Profit/Loss</p>
              <h4 className="text-base text-lose font-semibold">0.1269 ETH</h4>
              <p className="text-sm text-gray font-semibold">$239.27</p>
            </div>
            <div className="  rounded-[7px] p-3">
              <p className="text-sm text-gray font-normal">ROI</p>
              <h4 className="text-base text-lose font-semibold">-5.32%</h4>
            </div>
            <div className=" bg-black/20  rounded-[7px] p-3">
              <p className="text-sm text-gray font-normal">Total Gas Amount</p>
              <h4 className="text-base text-lose font-semibold">0.0079 ETH</h4>
              <p className="text-sm text-gray font-semibold">$14.90</p>
            </div>
            <div className="  rounded-[7px] p-3">
              <p className="text-sm text-gray font-normal">Service Fee</p>
              <h4 className="text-base  font-semibold">0 ETH</h4>
              <p className="text-sm text-gray font-semibold">$0</p>
            </div>
            <div className=" bg-black/20  rounded-[7px] p-3">
              <p className="text-sm text-gray font-normal">Royalty</p>
              <h4 className="text-base  font-semibold">0.119 ETH</h4>
              <p className="text-sm text-gray font-semibold">$224.38</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCollection;
