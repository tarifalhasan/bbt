"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const TimeChageZone = () => {
  const [timeValue, setTimeValue] = useState<
    "1M" | "1H" | "1D" | "1W" | "1M" | "ALL"
  >("1M");

  const data = ["1M", "1H", "1D", "1W", "1Y", "ALL"];

  return (
    <div className="flex  px-4 bg-background items-center h-[51px] border-2  rounded-[15px]">
      <div className=" text-sm font-semibold">Time</div>
      <div className=" inline-flex pl-3 items-center gap-2">
        {data.map((t, u) => (
          <button
            onClick={() =>
              setTimeValue(t as "1M" | "1H" | "1D" | "1W" | "1M" | "ALL")
            }
            type="button"
            key={u}
            className={cn(
              " text-sm font-semibold  w-[52px] h-[51px]",
              timeValue === t
                ? "text-background bg-primary rounded-[15px]"
                : " text-gray"
            )}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeChageZone;
