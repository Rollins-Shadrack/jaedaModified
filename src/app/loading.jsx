import React from "react";
import { RefreshCw } from "lucide-react";

const loading = () => {
  return (
    <div className={"flex justify-center items-center h-screen  w-full"}>
      <svg className={"w-24 h-24 text-orange-400 animate-spin"} viewBox="0 0 24 24">
        <RefreshCw />
      </svg>
    </div>
  );
};

export default loading;
