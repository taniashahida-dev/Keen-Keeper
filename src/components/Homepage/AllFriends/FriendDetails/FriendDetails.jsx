import React, { useContext } from "react";
import { useParams } from "react-router";
import useData from "../../../../hooks/useData";
import { PropagateLoader } from "react-spinners";
import { BsClock } from "react-icons/bs";
import { MdArchive, MdDelete } from "react-icons/md";
import { FaPhoneAlt, FaRegCommentDots, FaVideo } from "react-icons/fa";
import { FriendProvider } from "../../../../Contexts/Contexts";

const FriendDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { friends, loading } = useData();
  const data = friends.find((friend) => friend.id == id);
const {call,setCall,text,setText,vedio,setVedio} = useContext(FriendProvider)


const  handleCall=()=>{
    setCall([...call,data])
}

const handleText=()=>{
setText([...text,data])
}
const handleVedio=()=>{
    setVedio([...vedio,data])
}
//   console.log(data);
  if (loading)
    return (
      <div className="flex justify-center">
        <PropagateLoader color="#244D3F" />
      </div>
    );
  return (
    <div className=" bg-gray-50 ">
      <div className="w-8/12 mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <img
            src={data.picture}
            alt={data.name}
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />

          <h2 className="text-lg font-semibold">{data.name}</h2>

          <div className="mt-2">
            <button
              className={` px-3 py-1 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all text-white ${data.status === "on-track" ? "bg-[#1D3D33] " : data.status === "overdue" ? "bg-red-600" : "bg-amber-500"}`}
            >
              {data.status}
            </button>
          </div>

          <div className="flex gap-2 my-3 justify-center">
            {data.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-3 italic">{data.bio}</p>

          <p className="text-xs text-gray-400 mt-1">Preferred: email</p>

          <div className="mt-6 space-y-2 ">
            <button className="w-full flex items-center  justify-center gap-2 bg-gray-100  rounded-lg p-2 my-3 hover:bg-gray-200">
              <BsClock /> Snooze 2 Weeks
            </button>

            <button className="w-full flex items-center justify-center gap-2 bg-gray-100 p-2 rounded-lg hover:bg-gray-200">
              <MdArchive /> Archive
            </button>

            <button className="w-full flex items-center justify-center gap-2 text-red-500 bg-gray-100 p-2 rounded-lg hover:bg-red-100">
              <MdDelete /> Delete
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h2 className="text-2xl font-bold text-green-700">
                {data.days_since_contact}
              </h2>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h2 className="text-2xl font-bold text-green-700">{data.goal}</h2>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h2 className="text-lg font-semibold text-green-700">
                {data.next_due_date}
              </h2>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-white p-5 rounded-lg shadow flex justify-between items-center">
            <div>
              <h3 className="font-medium text-gray-700">Relationship Goal</h3>
              <p className="text-sm text-gray-500">
                Connect every{" "}
                <span className="font-semibold">{data.goal} days</span>
              </p>
            </div>

            <button className="bg-gray-200 px-3 py-1 rounded text-sm hover:bg-gray-300">
              Edit
            </button>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="mb-4 font-medium text-gray-700">Quick Check-In</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button onClick={handleCall} className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg hover:bg-gray-200">
                <FaPhoneAlt />
                <span className="mt-2 text-sm">Call</span>
              </button>

              <button onClick={handleText} className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg hover:bg-gray-200">
                <FaRegCommentDots />
                <span className="mt-2 text-sm">Text</span>
              </button>

              <button onClick={handleVedio} className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg hover:bg-gray-200">
                <FaVideo />
                <span className="mt-2 text-sm">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
