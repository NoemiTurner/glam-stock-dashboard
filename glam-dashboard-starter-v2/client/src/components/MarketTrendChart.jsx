import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function MarketTrendChart({ data = [], labels = [] }) {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Price",
        data,
        fill: true,
        borderColor: "#FF69B4",
        backgroundColor: "rgba(255,182,193,0.3)",
        tension: 0.4,
        pointBackgroundColor: "#FF69B4",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-4">
      <h2 className="text-xl font-bold text-pink-700 mb-2">📈 Market Trend</h2>
      <Line data={chartData} />
    </div>
  );
}
