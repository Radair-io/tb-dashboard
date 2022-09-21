import React, { FC, useState } from "react";
import { BiWater } from "react-icons/bi";
import { AiFillSound } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import WaterLeak from "../icons/waterLeak";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

export interface IDetailViewProps {}

const dataMenu = [
  {
    title: "Sound Level",
    icon: AiFillSound,
  },
  {
    title: "Water Leak",
    icon: WaterLeak,
  },
  {
    title: "Occupied",
    icon: HiUsers,
  },
  {
    title: "Temperature",
    icon: FaTemperatureLow,
  },
  {
    title: "Humidity",
    icon: WiHumidity,
  },
  {
    title: "Water Flow",
    icon: BiWater,
  },
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const DetailView: FC<IDetailViewProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-40" : "w-48"
        } flex flex-col h-screen p-3 bg-[#546e7a] shadow duration-300`}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className=""></h2>
            <button onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {dataMenu.map((item, index) => (
                <li key={index} className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md cursor-pointer">
                    {item.title != "Humidity" && (
                      <item.icon
                        className="text-lg text-gray-500 h-6"
                        color="#ccc"
                      />
                    )}
                    {item.title == "Humidity" && (
                      <item.icon className="text-lg text-gray-300 h-7 w-7 -m-2" />
                    )}
                    <span className="text-white">{item.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-2 gap-6 mb-6 lg:grid-cols-2">
          <div className="">
            <Bar options={options} data={data} />
          </div>

          <div className=" bg-blue-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
