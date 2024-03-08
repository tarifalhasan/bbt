import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCopy } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { MdOutlineQrCode2 } from "react-icons/md";
import { PiShareFatFill } from "react-icons/pi";

interface WalletProfileCardProps {
  username: string;
  imageUrl: string;
  value: string;
  change: string;
}

const WalletProfileCard: React.FC<WalletProfileCardProps> = ({
  username,
  imageUrl,
  value,
  change,
}) => {
  return (
    <div
      style={{
        background:
          "radial-gradient(100.57% 100.57% at 10.83% 0.99%, #FFD200 0%, #FFD200 23.52%, #FF5C00 42.97%, #FFD200 71.86%, #FF5C00 100%) ",
      }}
      className="p-[2px] overflow-hidden rounded-[7px]"
    >
      <div className="bg-card rounded-[7px]">
        <div className="relative h-[210px]">
          <Image
            src={imageUrl}
            className="h-[210px]"
            alt=""
            width={243}
            height={210}
          />
          <GoStarFill size={24} className="absolute top-2 right-2" />
        </div>
        <div className="p-4 space-y-4">
          <div className="inline-flex items-center gap-3">
            <p className="text-base font-medium">{username}</p>
            <BsCopy />
            <MdOutlineQrCode2 />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg xl:text-xl font-semibold">{value}</h4>
              <p
                className={`text-xs ${
                  change.includes("-") ? "text-lose" : "text-profit"
                }`}
              >
                {change}
              </p>
            </div>
            <div className="inline-flex gap-3 items-center">
              <Link
                href={"/"}
                className="border border-white rounded-full p-1.5"
                target="_blank"
              >
                <FaTelegramPlane size={20} />
              </Link>
              <Link
                href={"/"}
                className="border border-white rounded-full p-1.5"
                target="_blank"
              >
                <PiShareFatFill size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletProfileCard;
