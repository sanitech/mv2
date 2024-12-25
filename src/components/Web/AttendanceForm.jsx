import React from "react";

const TimeOffRequests = () => {
  const requests = [
    {
      id: 1,
      name: "Nora Barrett",
      days: "7 days",
      date: "22 - 28 Aug 2024",
      type: "Manager",
      status: "Approved",
    },
    {
      id: 2,
      name: "Evelyn Cooper",
      days: "1 day",
      date: "25 Aug 2024",
      type: "chef",
      status: "Pending",
    },
    {
      id: 3,
      name: "Jamie Blue",
      days: "5 days",
      date: "20 - 25 Aug 2024",
      type: "casher",
      status: "Rejected",
    },
    // Add more requests as needed
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Approved":
        return "text-green-500 bg-green-100";
      case "Pending":
        return "text-yellow-500 bg-yellow-100";
      case "Rejected":
        return "text-red-500 bg-red-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <header className="flex justify-between items-center border-b pb-4 mb-4">
          <h1 className="text-xl font-bold text-gray-800">Time & Attendance</h1>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600">
            Add Time Off
          </button>
        </header>

        <div className="mb-4 flex space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg">
            Time Off Requests
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg">
            Policy
          </button>
        </div>

        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Days</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Type</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {requests.map((request) => (
              <tr
                key={request.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {request.name}
                </td>
                <td className="py-3 px-6 text-left">{request.days}</td>
                <td className="py-3 px-6 text-left">{request.date}</td>
                <td className="py-3 px-6 text-left">{request.type}</td>
                <td className="py-3 px-6 text-center">
                  <span
                    className={`text-xs font-semibold py-1 px-3 rounded-full ${getStatusBadge(
                      request.status
                    )}`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <button className="text-blue-500 hover:underline">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeOffRequests;
