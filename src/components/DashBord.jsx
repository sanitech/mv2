import React from "react";
import ActionButtons from "./DashboardButtons";
import TopProductsTable from "./TopProductsTable";
import BusinessTable from "./BusinessTable";

const DashboardCards = () => {
  const cardsData = [
    {
      title: "Order Today",
      assistance: "2,241 assistance",
      amount: "$215,890",
      percentage: "+4.5%",
      stats: [
        { label: "Decrease", value: "45,930 USD", trend: "down" },
        { label: "Increase", value: "103,280 USD", trend: "up" },
      ],
      top: "92 TOP",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      title: "Revenue Today",
      assistance: "135 keys provided",
      amount: "$132,611",
      percentage: "+1.33%",
      stats: [
        { label: "Decrease", value: "12,748 USD", trend: "down" },
        { label: "Increase", value: "94,255 USD", trend: "up" },
      ],
      top: "34 TOP",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      title: "Pending Order",
      assistance: "2,376 successful deals",
      amount: "$348,501",
      percentage: "+2.91%",
      details: "Profit is Taken = $278,801 (-20% fees)",
      bgColor: "bg-gray-900",
      textColor: "text-gray-100",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-4 p-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} ${card.textColor} p-6 rounded-lg shadow-md flex-1 max-w-sm`}
          >
            <div className="mb-4">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-sm">{card.assistance}</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">{card.amount}</h1>
              <p className="text-lg font-semibold">{card.percentage}</p>
            </div>
            {/* {card.stats && (
              <div className="flex gap-4 mt-4">
                {card.stats.map((stat, i) => (
                  <p
                    key={i}
                    className={`${
                      stat.trend === "down" ? "text-red-500" : "text-green-500"
                    } text-sm`}
                  >
                    {stat.value}
                  </p>
                ))}
              </div>
            )} */}
            {/* {card.top && (
            <p className="text-sm mt-4 font-medium text-gray-500">{card.top}</p>
          )} */}
            {/* {card.details && (
              <p className="text-sm mt-4 font-light text-gray-400">
                {card.details}
              </p>
            )} */}
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <ActionButtons />

        <TopProductsTable />
      </div>
      {/* <BusinessTable /> */}
    </div>
  );
};

export default DashboardCards;
