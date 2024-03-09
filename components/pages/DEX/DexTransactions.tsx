import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FiExternalLink } from "react-icons/fi";

const DexTransactions = () => {
  const data = [
    {
      date: "Nov 26 10:06:23 PM",
      type: "sell",
      usd: "2,310.77",
      grok: "100,000",
      weth: "1.12",
      price: "$0.02314",
      marker: "9a0541...",
    },
    {
      date: "Nov 26 10:06:23 PM",
      type: "buy",
      usd: "2,310.77",
      grok: "100,000",
      weth: "1.12",
      price: "$0.02314",
      marker: "9a0541...",
    },
    {
      date: "Nov 26 10:06:23 PM",
      type: "sell",
      usd: "2,310.77",
      grok: "100,000",
      weth: "1.12",
      price: "$0.02314",
      marker: "9a0541...",
    },
    {
      date: "Nov 26 10:06:23 PM",
      type: "buy",
      usd: "2,310.77",
      grok: "100,000",
      weth: "1.12",
      price: "$0.02314",
      marker: "9a0541...",
    },
  ];
  const THEAD = [
    "Date",
    "Type",
    "USD",
    "GROK",
    "WETH",
    "PRICE",
    "MAKER",
    "TXN",
  ];
  return (
    <div className=" bg-card border rounded-base p-4">
      <div className=" px-2 pt-3">
        <h2 className=" text-lg xl:text-2xl font-semibold">Transactions</h2>
      </div>
      <Table>
        <TableHeader className="[&_tr]:border-b-0">
          <TableRow className=" border-b-0">
            {THEAD.map((th, i) => (
              <TableHead className="text-sm text-gray font-semibold" key={i}>
                {th}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              className=" border-b-0 odd:bg-light_gray  [&_td]:py-2"
              key={index}
            >
              <TableCell>{item.date}</TableCell>
              <TableCell
                className={`text-sm capitalize font-semibold ${
                  item.type === "sell" ? "text-red-500" : "text-green"
                }`}
              >
                {item.type}
              </TableCell>
              <TableCell
                className={`text-sm font-semibold ${
                  item.type === "sell" ? "text-red-500" : "text-green"
                }`}
              >
                {item.usd}
              </TableCell>
              <TableCell
                className={`text-sm font-semibold ${
                  item.type === "sell" ? "text-red-500" : "text-green"
                }`}
              >
                {item.grok}
              </TableCell>
              <TableCell
                className={`text-sm font-semibold ${
                  item.type === "sell" ? "text-red-500" : "text-green"
                }`}
              >
                {item.weth}
              </TableCell>
              <TableCell
                className={`text-sm font-semibold ${
                  item.type === "sell" ? "text-red-500" : "text-green"
                }`}
              >
                {item.price}
              </TableCell>
              <TableCell>{item.marker}</TableCell>
              <TableCell>
                <button>
                  <FiExternalLink size={26} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DexTransactions;
