import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AuthLayout( Component ) {

  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <main className="w-[85%]">
        <Header />
        <Component />
      </main>
    </div>
  );
}

export default AuthLayout;
