import React, { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { FriendProvider } from "../../Contexts/Contexts";

const StatsPage = () => {
  const { call, text, vedio } = useContext(FriendProvider);
  const data = [
    { name: "Call", value: call.length, fill: "#0088FE" },
    { name: "Text", value: text.length, fill: "#00C49F" },
    { name: "Vedio", value: vedio.length, fill: "#FFBB28" },
  ];
  return (
    <div className="bg-gray-50 p-3 md:p-10 lg:p-20">
      <div>
        <h1 className="text-3xl md:text-5xl w-11/12 md:w-8/12 mx-auto font-semibold my-10">
          Friendship Analytics
        </h1>
      </div>
      <div className=" bg-white rounded-2xl w-11/12 md:w-8/12 mx-auto py-4 md:py-10">
        <p className="ml-6">By Interaction Type</p>{" "}
        <div className="w-full h-100 flex justify-center items-center ">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={80}
                outerRadius={120}
                cornerRadius={10}
                paddingAngle={5}
                dataKey="value"
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
