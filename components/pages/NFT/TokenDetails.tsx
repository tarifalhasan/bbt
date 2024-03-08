import React from "react";

interface TokenDetailsProps {
  contractAddress: string;
  tokenId: string;
  tokenStandard: string;
  chain: string;
  lastUpdated: string;
  creatorEarnings: string;
}

const TokenDetails: React.FC<TokenDetailsProps> = ({
  contractAddress,
  tokenId,
  tokenStandard,
  chain,
  lastUpdated,
  creatorEarnings,
}) => {
  return (
    <ul className="pt-4 space-y-4">
      <li className="flex items-center justify-between">
        <span className="text-sm font-normal text-gray">Contract Address</span>
        <span className="text-sm font-normal text-primary">
          {contractAddress}
        </span>
      </li>
      <li className="flex items-center justify-between">
        <span className="text-sm font-normal text-gray">Token ID</span>
        <span className="text-sm font-normal text-primary">{tokenId}</span>
      </li>
      <li className="flex items-center justify-between">
        <span className="text-sm font-normal text-gray">Token Standard</span>
        <span className="text-sm font-normal text-gray">{tokenStandard}</span>
      </li>
      <li className="flex items-center justify-between">
        <span className="text-sm font-normal text-gray">Chain</span>
        <span className="text-sm font-normal text-gray">{chain}</span>
      </li>
      <li className="flex items-center justify-between">
        <span className="text-sm font-normal text-gray">Last Updated</span>
        <span className="text-sm font-normal text-gray">{lastUpdated}</span>
      </li>
      <li className="flex items-center justify-between">
        <span className="text-sm font-normal text-gray">Creator Earnings</span>
        <span className="text-sm font-normal text-gray">{creatorEarnings}</span>
      </li>
    </ul>
  );
};

export default TokenDetails;
