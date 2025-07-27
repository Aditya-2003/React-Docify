import React from "react";

export default function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold">
          Document
        </div>
        <h1 className="absolute text-[13vw] loading-none tracking-tighter font-semibold top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900">Docs.</h1>
      </div>
    </>
  );
}
