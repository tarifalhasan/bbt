"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsBarChart, BsThreeDots } from "react-icons/bs";
import { GiPerspectiveDiceFour } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { LuCandlestickChart } from "react-icons/lu";

const menuItems = [
  { icon: <IoHome className="w-6 block h-6" />, text: "Home", href: "/" },
  {
    icon: <LuCandlestickChart className="w-6 block h-6" />,
    text: "Active",
    href: "/active",
  },
  { icon: <BsBarChart className="w-6 block h-6" />, text: "DCA", href: "/dca" },
  {
    icon: <GiPerspectiveDiceFour className="w-6 block h-6" />,
    text: "Degen",
    href: "/degen",
  },
];
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="flex-col rounded-[7px] justify-between right-0 left-0 top-0 overflow-hidden overflow-y-auto bg-card flex-none max-w-[280px] relative w-[19%] z-50 h-full hidden lg:flex">
      <div className=" px-4 py-4 flex h-full  flex-col justify-between">
        <div>
          <Link href={"/"}>
            <Image
              className=" w-52 h-20"
              src={"/images/logo.svg"}
              alt="bbt"
              width={208}
              height={80}
              quality={80}
            />
          </Link>
        </div>
        <ul className="flex flex-col">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={cn(
                "px-2.5 flex items-center h-[52px] rounded-[7px]",
                pathname === item.href && " bg-background text-primary"
              )}
            >
              <Link href={item.href} className="inline-flex items-center gap-2">
                {item.icon}
                <span className="block text-xl font-normal">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <div className=" flex items-center justify-between">
            <div className=" inline-flex items-center gap-1">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h4 className=" text-sm font-semibold text-primary">
                TheCryptoDev
              </h4>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <BsThreeDots size={24} className=" text-primary" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
