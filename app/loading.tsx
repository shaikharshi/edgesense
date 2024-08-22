import React from "react";
import { LoaderCircle } from "lucide-react";

function Loading() {
  return (
    <div className="grid items-center content-center justify-center w-full h-screen">
      <LoaderCircle className="animate-spin text-5xl text-primary" />
    </div>
  );
}

export default Loading;