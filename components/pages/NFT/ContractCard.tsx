import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { FC } from "react";
import { BsEye } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
interface ContractCardProps {
  title: string;
  subTitle: string;
  avatarSrc: string;
  imageSrc: string;
  price: string;
  priceLabel: string;
  time: string;
  views: string;
}

const ContractCard: FC<ContractCardProps> = ({
  title,
  subTitle,
  avatarSrc,
  imageSrc,
  price,
  priceLabel,
  time,
  views,
}) => {
  return (
    <div
      style={{
        background:
          "radial-gradient(100.57% 100.57% at 10.83% 0.99%, #FFD200 0%, #FFD200 23.52%, #FF5C00 42.97%, #FFD200 71.86%, #FF5C00 100%) ",
      }}
      className=" p-[2px] overflow-hidden rounded-[7px]"
    >
      <div className=" bg-card rounded-[7px]">
        <div>
          <Image
            src={imageSrc}
            className=" h-[210px]"
            alt=""
            width={243}
            height={210}
          />
        </div>
        <div className=" p-4 space-y-4">
          <div className="  flex items-center justify-between">
            <div>
              <h3 className=" text-base font-medium">{title}</h3>
              <p className="text-xs font-normal text-primary">{subTitle}</p>
            </div>
            <Avatar>
              <AvatarImage src={avatarSrc} />
              <AvatarFallback>{avatarSrc ? "" : "CN"}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <span className="text-sm text-gray font-medium">Price</span>
            </div>
            <div>
              <h4 className="text-lg xl:text-xl font-semibold">{price}</h4>
              <p className="text-sm text-gray font-medium">{priceLabel}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-gray inline-flex items-center gap-2">
              <FiClock size={20} />
              <p className="text-sm font-medium text-gray">{time}</p>
            </div>
            <div className=" text-gray inline-flex items-center gap-2">
              <BsEye size={20} />
              <p className="text-sm font-medium text-gray">{views}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractCard;
