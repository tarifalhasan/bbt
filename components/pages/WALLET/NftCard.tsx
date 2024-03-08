"use client";

import Image from "next/image";
import { useState } from "react";
import NftDetailsModal from "./NftDetailsModal";

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

const NftCard: React.FC<NftCardProps> = ({ attributes, details }) => {
  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={onOpenChange}
        className="cursor-pointer bg-[#262629] rounded-[9px] gap-2 border p-4 grid grid-cols-12"
      >
        <div className="col-span-5">
          <Image
            src={details.nftImage}
            alt="nft"
            className="w-[96] h-[96px] object-cover"
            width={96}
            height={96}
            quality={80}
          />
        </div>
        <div className="col-span-7 flex flex-col justify-between">
          <h2 className="text-sm font-semibold text-gray">
            {details.tokenName}
          </h2>
          <p className="text-base font-medium text-white">{details.username}</p>
        </div>
      </div>
      <NftDetailsModal
        nftCardProps={{
          attributes,
          details,
        }}
        open={open}
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export default NftCard;
