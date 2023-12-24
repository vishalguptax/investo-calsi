import React, { memo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { InvestmentStatsType } from "../formContainer/FormContainer";

ChartJS.register(ArcElement, Tooltip, Legend);

interface StatChartProp {
  data: InvestmentStatsType;
}

const StatChart = ({ data }: StatChartProp) => {
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
    <div>
      <Doughnut data={chartData} />
    </div>
  );
};

export default memo(StatChart);
