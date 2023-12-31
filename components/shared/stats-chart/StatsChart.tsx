import React, { memo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { InvestmentStatsType } from "../form-container/FormContainer";

ChartJS.register(ArcElement, Tooltip, Legend);

interface StatChartProp {
  data: InvestmentStatsType;
}

const StatsChart = ({ data }: StatChartProp) => {
  const labels = ["Total Investment", "Total Returns"];
  const { totalValue, ...valueData } = data;

  const values = Object.values(valueData);
  const chartData = {
    labels,
    datasets: [
      {
        label: " ₹ ",
        data: values,
        backgroundColor: ["#c2d9ff", "#8e8ffa"],
      },
    ],
  };

  return (
    <div style={{ minHeight: "300px" }}>
      <Doughnut data={chartData} />
    </div>
  );
};

export default memo(StatsChart);
