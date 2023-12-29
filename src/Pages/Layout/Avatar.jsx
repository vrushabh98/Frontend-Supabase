import React from "react";

function Avatar({firstletter, lastletter}) {
  return (
    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-300 p-4">
      <h5 className="text-sm uppercase">{`${firstletter}${lastletter}`}</h5>
    </div>
  );
}

export default Avatar;
