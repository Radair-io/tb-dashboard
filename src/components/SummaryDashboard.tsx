import React, { FC } from "react";
import { BiBuildingHouse, BiWater, BiSearchAlt } from "react-icons/bi";
import { AiFillSound } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { Input, Tooltip } from "@material-tailwind/react";
import WaterLeak from "../icons/waterLeak";
import { useNavigate } from "react-router-dom";

export interface ISummaryDashboardPageProps {
  customerId?: string; // optional
}

const SummaryDashboard: FC<ISummaryDashboardPageProps> = ({ customerId }) => {
  const navigate = useNavigate();
  const navigateToDetailView = () => {
    // 👇️ navigate to /detailview
    navigate("/details");
  };

  return (
    <div className="p-10 pl-20 pr-20">
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-96 rounded-xl overflow-y-auto border border-gray-300 scrollbar">
          <ul className="w-full text-sm font-medium">
            <div className="w-1/2 m-5">
              <Input
                className="p-2 px-3 rounded-2xl"
                placeholder="Search for an asset"
                icon={<BiSearchAlt className="inline-block w-6 h-6" />}
              />
            </div>
            <li
              className="grid grid-cols-7 gap-2 py-4 px-4 w-full  border-b border-gray-300 bg-green-50 cursor-pointer"
              onClick={navigateToDetailView}
            >
              <span className="col-span-4">
                <BiBuildingHouse className="inline-block w-7 h-7 text-gray-600" />{" "}
                Place to stay in Hildale <br />
                <span className="font-light text-gray-500">
                  Iconic Glass Mansion - Huge Views - Best Location
                </span>
              </span>
              <span className="col-span-3 grid grid-cols-6">
                <Tooltip content="Sound sensor" placement="top">
                  <span>
                    <AiFillSound className="inline-block w-8 h-8 text-blue-gray-600" />
                  </span>
                </Tooltip>
                <Tooltip content="Water leak detection" placement="top">
                  <span>
                    <WaterLeak
                      className="inline-block w-10 h-10"
                      color="#546E7A"
                    />
                  </span>
                </Tooltip>
                <Tooltip content="Motion detector" placement="top">
                  <span>
                    <HiUsers className="inline-block w-8 h-8 text-blue-gray-600" />
                  </span>
                </Tooltip>
                <Tooltip content="Temperature" placement="top">
                  <span>
                    <FaTemperatureLow className="inline-block w-8 h-8 text-blue-gray-600" />
                  </span>
                </Tooltip>
                <Tooltip content="Humidity" placement="top">
                  <span>
                    <WiHumidity className="inline-block w-12 h-12 -mt-2 -ml-2 text-blue-gray-600" />
                  </span>
                </Tooltip>
                <Tooltip content="Water flow" placement="top">
                  <span>
                    <BiWater className="inline-block w-8 h-8 text-blue-gray-600" />
                  </span>
                </Tooltip>
              </span>
            </li>
            <li className="grid grid-cols-7 gap-2 py-4 px-4 w-full  border-b border-gray-300 bg-green-50 cursor-pointer">
              <span className="col-span-4">
                <BiBuildingHouse className="inline-block w-7 h-7 text-gray-600" />{" "}
                Place to stay in Hildale <br />
                <span className="font-light text-gray-500">
                  Iconic Glass Mansion - Huge Views - Best Location
                </span>
              </span>
              <span className="col-span-3 grid grid-cols-6">
                <AiFillSound className="inline-block w-8 h-8 text-blue-gray-600" />
                <WaterLeak className="inline-block w-10 h-10" color="#546E7A" />
                <HiUsers className="inline-block w-8 h-8 text-blue-gray-600" />
                <FaTemperatureLow className="inline-block w-8 h-8 text-blue-gray-600" />
                <WiHumidity className="inline-block w-12 h-12 -mt-2 -ml-2 text-blue-gray-600" />
                <BiWater className="inline-block w-8 h-8 text-blue-gray-600" />
              </span>
            </li>
            <li className="grid grid-cols-7 gap-2 py-4 px-4 w-full  border-b border-gray-300 bg-green-50 cursor-pointer">
              <span className="col-span-4">
                <BiBuildingHouse className="inline-block w-7 h-7 text-gray-600" />{" "}
                Place to stay in Hildale <br />
                <span className="font-light text-gray-500">
                  Iconic Glass Mansion - Huge Views - Best Location
                </span>
              </span>
              <span className="col-span-3 grid grid-cols-6">
                <AiFillSound className="inline-block w-8 h-8 text-blue-gray-600" />
                <WaterLeak className="inline-block w-10 h-10" color="#546E7A" />
                <HiUsers className="inline-block w-8 h-8 text-blue-gray-600" />
                <FaTemperatureLow className="inline-block w-8 h-8 text-blue-gray-600" />
                <WiHumidity className="inline-block w-12 h-12 -mt-2 -ml-2 text-blue-gray-600" />
                <BiWater className="inline-block w-8 h-8 text-blue-gray-600" />
              </span>
            </li>
            <li className="grid grid-cols-7 gap-2 py-4 px-4 w-full  border-b border-gray-300 bg-red-50 cursor-pointer">
              <span className="col-span-4">
                <BiBuildingHouse className="inline-block w-7 h-7 text-gray-600" />{" "}
                Place to stay in Hildale <br />
                <span className="font-light text-gray-500">
                  Iconic Glass Mansion - Huge Views - Best Location
                </span>
              </span>
              <span className="col-span-3 grid grid-cols-6">
                <AiFillSound className="inline-block w-8 h-8 text-blue-gray-600" />
                <WaterLeak className="inline-block w-10 h-10" color="#546E7A" />
                <HiUsers className="inline-block w-8 h-8 text-blue-gray-600" />
                <FaTemperatureLow className="inline-block w-8 h-8 text-blue-gray-600" />
                <WiHumidity className="inline-block w-12 h-12 -mt-2 -ml-2 text-blue-gray-600" />
                <BiWater className="inline-block w-8 h-8 text-blue-gray-600" />
              </span>
            </li>
            <li className="grid grid-cols-7 gap-2 py-4 px-4 w-full  border-b border-gray-300 bg-green-50 cursor-pointer">
              <span className="col-span-4">
                <BiBuildingHouse className="inline-block w-7 h-7 text-gray-600" />{" "}
                Place to stay in Hildale <br />
                <span className="font-light text-gray-500">
                  Iconic Glass Mansion - Huge Views - Best Location
                </span>
              </span>
              <span className="col-span-3 grid grid-cols-6">
                <AiFillSound className="inline-block w-8 h-8 text-blue-gray-600" />
                <WaterLeak className="inline-block w-10 h-10" color="#546E7A" />
                <HiUsers className="inline-block w-8 h-8 text-blue-gray-600" />
                <FaTemperatureLow className="inline-block w-8 h-8 text-blue-gray-600" />
                <WiHumidity className="inline-block w-12 h-12 -mt-2 -ml-2 text-blue-gray-600" />
                <BiWater className="inline-block w-8 h-8 text-blue-gray-600" />
              </span>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl overflow-y-auto border border-gray-300 text-center bg-gray-50">
            <AiFillSound className="inline-block w-1/4 h-3/4 text-[#537aa1] mt-5" />
            {/* <p className="text-black font-semibold">Sound level - 30 dB</p> */}
          </div>
          <div className="rounded-xl overflow-y-auto border border-gray-300 text-center bg-gray-50">
            <FaTemperatureLow className="inline-block w-1/4 h-3/4 text-[#537aa1] mt-5" />
            {/* <p className="text-black font-semibold">Temperature - 23 &#x2109;</p> */}
          </div>
          <div className="rounded-xl overflow-y-auto border border-gray-300 text-center bg-gray-50">
            <WaterLeak
              className="inline-block w-1/4 h-3/4 mt-5"
              color="#537aa1"
            />
            {/* <p className="text-black font-semibold">Water leak - Not detected</p> */}
          </div>
          <div className="rounded-xl overflow-y-auto border border-gray-300 text-center bg-gray-50">
            <BiWater className="inline-block w-1/4 h-3/4 text-[#537aa1] mt-5" />
            {/* <p className="text-black font-semibold">Water flow - On</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryDashboard;
