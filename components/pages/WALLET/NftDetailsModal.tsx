import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { HiMiniChevronRight } from "react-icons/hi2";
import { PiShareFatFill } from "react-icons/pi";

interface NftCardProps {
  attributes: {
    pendingRewards: string;
    createdDate: string;
    length: string;
    registrationDate: string;
    expirationDate: string;
    namewrapperState: string;
    namewrapperExpiryDate: string;
  };
  details: {
    network: string;
    description: string;
    username: string;
    tokenName: string;
    nftImage: string;
  };
}

interface NftDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  nftCardProps: NftCardProps;
}

const NftDetailsModal: FC<NftDetailsModalProps> = ({
  open,
  onOpenChange,
  nftCardProps,
}) => {
  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className=" max-w-[1190px]">
          <div className=" grid lg:grid-cols-2 gap-5">
            <div className=" border-r pr-4">
              <div className=" border-b pb-5">
                <h3 className="text-sm lg:text-base font-semibold">
                  Attributes
                </h3>
                <div className="flex flex-wrap items-center justify-between pt-2 gap-5">
                  <div className="  flex-grow bg-[#262629] rounded-[9px] border space-y-3 p-4">
                    <p className="text-xs text-gray font-semibold">
                      Pending Rewards
                    </p>
                    <h2 className="text-sm lg:text-base font-semibold">
                      {nftCardProps.attributes.pendingRewards}
                    </h2>
                  </div>
                  <div className=" flex-grow bg-[#262629] rounded-[9px] border space-y-3 p-4">
                    <p className="text-xs text-gray font-semibold">
                      Created Date
                    </p>
                    <h2 className="text-sm lg:text-base font-semibold">
                      {nftCardProps.attributes.createdDate}
                    </h2>
                  </div>{" "}
                  <div className="flex-grow bg-[#262629] rounded-[9px] border space-y-3 p-4">
                    <p className="text-xs text-gray font-semibold">Length</p>
                    <h2 className="text-sm lg:text-base font-semibold">
                      {" "}
                      {nftCardProps.attributes.length}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between pt-2 gap-5">
                  <div className="  flex-grow bg-[#262629] rounded-[9px] border space-y-3 p-4">
                    <p className="text-xs text-gray font-semibold">
                      Registration Date
                    </p>
                    <h2 className="text-sm lg:text-base font-semibold">
                      {nftCardProps.attributes.registrationDate}
                    </h2>
                  </div>
                  <div className=" flex-grow bg-[#262629] rounded-[9px] border space-y-3 p-4">
                    <p className="text-xs text-gray font-semibold">
                      Expiration Date
                    </p>
                    <h2 className="text-sm lg:text-base font-semibold">
                      {nftCardProps.attributes.expirationDate}
                    </h2>
                  </div>{" "}
                  <div className="flex-grow bg-[#262629] rounded-[9px] border space-y-3 p-4">
                    <p className="text-xs text-gray font-semibold">
                      Namewrapper State
                    </p>
                    <h2 className="text-sm lg:text-base font-semibold">
                      {nftCardProps.attributes.namewrapperState}
                    </h2>
                  </div>
                  <div className="bg-[#262629] rounded-[9px] border space-y-3 p-4">
                    <p className="text-xs text-gray font-semibold">
                      Namewrapper Expiry Date
                    </p>
                    <h2 className="text-sm lg:text-base font-semibold">
                      {nftCardProps.attributes.namewrapperExpiryDate}
                    </h2>
                  </div>
                </div>
              </div>
              <div className=" py-3 border-b">
                <div className="  space-y-2.5 p-4">
                  <h3 className="text-sm lg:text-base font-semibold">
                    Details
                  </h3>
                  <div>
                    <p className="text-xs text-gray font-semibold">Network</p>
                    <h2 className="text-sm lg:text-base font-semibold">
                      {nftCardProps.details.network}
                    </h2>
                  </div>
                </div>
              </div>
              <div className=" py-3 border-b">
                <div className="  p-4">
                  <h3 className="text-x font-semibold">Description</h3>
                  <div>
                    <p className="text-base text-gray font-semibold">
                      {nftCardProps.details.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" py-3 border-b">
                <div className="  p-4">
                  <h3 className="text-x font-semibold">
                    About BRR Scammers NFT
                  </h3>
                  <div className=" space-y-3">
                    <p className="text-base text-gray font-semibold">
                      Generate passive income and print infinite money with your
                      Scammers!
                    </p>
                    <p className="text-base text-gray font-semibold">
                      [Start now](https://app.brr-protocol.com)
                    </p>
                  </div>
                </div>
              </div>
              <div className="  py-4 flex items-center gap-4">
                <button className=" text-sm font-semibold text-primary inline-flex items-center gap-x-1">
                  <span className="">Opensea</span>
                  <HiMiniChevronRight />
                </button>
                <button className=" text-sm font-semibold text-primary inline-flex items-center gap-x-1">
                  <span className="">Arbiscan</span>
                  <HiMiniChevronRight />
                </button>
              </div>
            </div>
            <div className=" flex flex-col justify-center   items-center gap-8">
              <div>
                <div>
                  <Image
                    src={nftCardProps.details.nftImage}
                    alt="dfdfd"
                    width={400}
                    className=" max-w-[400px] max-h-[581px]"
                    height={581}
                    quality={80}
                  />
                </div>
                <div className="flex gap-8 items-center justify-between">
                  <div>
                    <h2 className=" text-2xl xl:text-4xl font-bold">
                      {nftCardProps.details.username}
                    </h2>
                    <p className="text-lg xl:text-2xl text-gray">
                      {nftCardProps.details.tokenName}
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex gap-3 items-center">
                      <Link
                        href={"/"}
                        className="border hover:bg-primary transition-all duration-700 border-white rounded-full p-1.5"
                        target="_blank"
                      >
                        <FaTelegramPlane size={30} />
                      </Link>
                      <Link
                        href={"/"}
                        className="border hover:bg-primary transition-all duration-700 border-white rounded-full p-1.5"
                        target="_blank"
                      >
                        <PiShareFatFill size={30} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NftDetailsModal;
