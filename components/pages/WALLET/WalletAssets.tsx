import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HiDotsVertical, HiOutlineMenu } from "react-icons/hi";

const WalletAssets = () => {
  const dummyData = [
    {
      asset: {
        name: "Bitcoin",
        coinName: "BTC",
      },
      holdings: "2.5",
      avgCost: "$6000",
      profitLoss: "-$150.50",
      priceBTC: "0.0025",
      totalBalance: "$500.75",
    },
    {
      asset: {
        name: "Ethereum",
        coinName: "ETH",
      },
      holdings: "10.0",
      avgCost: "$300",
      profitLoss: "+$350.20",
      priceBTC: "0.01",
      totalBalance: "$1200.50",
    },
    {
      asset: {
        name: "Arbitrum",
        coinName: "ARB",
      },
      holdings: "5.5",
      avgCost: "$50",
      profitLoss: "-$50.75",
      priceBTC: "0.005",
      totalBalance: "$300.25",
    },
  ];

  const THEAD = [
    "",
    "Asset",
    "Holdings",
    "Avg. Cost",
    "Profit/Loss",
    "Price (BTC)",
    "Total Balance",
    "",
    "",
  ];
  return (
    <div className=" bg-card border rounded-base p-4">
      <div className=" px-2 pt-3">
        <h2 className=" text-lg xl:text-2xl font-semibold">Assets</h2>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {THEAD.map((th, i) => (
              <TableHead className="text-sm text-gray font-semibold" key={i}>
                {th}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyData.map((item, index) => (
            <TableRow key={index}>
              <TableCell className=" w-3">
                <HiOutlineMenu />
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">
                    {item.asset.name}
                  </span>
                  <span className="text-sm font-semibold">
                    {item.asset.coinName}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-sm font-semibold">
                {item.holdings}
              </TableCell>
              <TableCell className="text-sm font-semibold">
                {item.avgCost}
              </TableCell>
              <TableCell
                style={{
                  color: item.profitLoss.includes("-") ? "#E05338" : "#33FF00",
                }}
                className="text-sm font-semibold"
              >
                {item.profitLoss}
              </TableCell>
              <TableCell className="text-sm font-semibold">
                {item.priceBTC}
              </TableCell>
              <TableCell className="text-sm font-semibold">
                {item.totalBalance}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <HiDotsVertical size={28} className=" text-gray" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell className="text-base font-normal text-primary">
                <button> Chart</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WalletAssets;
