import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";
import DummyAreaChart from "./AreaChart";
import TrafficChart from "./TrafficChart";

function DashboardIndex() {
  const userData = JSON.parse(sessionStorage.getItem('user'));
  const navigate = useNavigate()

  useEffect(() => {
    console.log('userData --', userData)
    if(!userData){
      navigate("/signin")
    }
  }, [])
  

  return (
    <div className="w-screen h-screen flex overflow-x-hidden">
      <Sidebar />
      <main className="w-[85%] overflow-y-auto">
        <Header title='Dashboard' />
        <div
          className="h-screen p-4 gap-2 space-y-8"
          style={{ height: "calc(100vh - 80px)" }}
        >
          <div className="grid grid-cols-4 gap-2">
            <div className="h-[180px] rounded-lg bg-indigo-200 shadow p-4 space-y-8">
              <p className="text-lg leading-5 tracking-tight font-semibold text-indigo-600">
                Budget
              </p>
              <h4 className="text-indigo-800 text-[50px] leading-5 tracking-tight font-bold">
                $24k
              </h4>
            </div>
            <div className="h-[180px] rounded-lg bg-rose-200 shadow p-4 space-y-8">
              <p className="text-lg leading-5 tracking-tight font-semibold text-rose-600">
                Total Customer
              </p>
              <h4 className="text-rose-800 text-[50px] leading-5 tracking-tight font-bold">
                1.6k
              </h4>
            </div>
            <div className="h-[180px] rounded-lg bg-teal-200 shadow p-4 space-y-8">
              <p className="text-lg leading-5 tracking-tight font-semibold text-teal-600">
                Task Progress
              </p>
              <h4 className="text-teal-800 text-[50px] leading-5 tracking-tight font-bold">
                75%
              </h4>
            </div>
            <div className="h-[180px] rounded-lg bg-orange-200 shadow p-4 space-y-8">
              <p className="text-lg leading-5 tracking-tight font-semibold text-orange-600">
                Total Profit
              </p>
              <h4 className="text-orange-800 text-[50px] leading-5 tracking-tight font-bold">
                $16k
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-[320px] shadow border border-[#D9D9D9] rounded-[10px] p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-[13px] font-inter font-medium text-[#313439]">
                  Sales History
                </h3>
                <p className="font-inter text-[10px] text-[#2F80ED] leading-[100%] font-medium">
                  Last 10 Months
                </p>
              </div>
              <DummyAreaChart />
            </div>
            <div className="h-[320px] shadow border border-[#D9D9D9] rounded-[10px] p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-[13px] font-inter font-medium text-[#313439]">
                  Traffic
                </h3>
              </div>
              <TrafficChart />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardIndex;
