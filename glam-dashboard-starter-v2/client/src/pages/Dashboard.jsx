import GlamCard from "../components/GlamCard";
import MarketTrendChart from "../components/MarketTrendChart";

export default function Dashboard() {
  return (
    <div className="p-8 bg-pink-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-pink-600 mb-6">💎 Glam Market Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <GlamCard title="AAPL" value="$198.23" icon="/icons/diamond.svg" />
        <GlamCard title="BTC" value="$58,230" icon="/icons/coin.svg" />
        <GlamCard title="Luxury Goal: Dior Bag" value="💰 $800 / $3200" icon="/icons/purse.svg" />
      </div>
      <MarketTrendChart data={[210, 215, 213, 218, 225]} labels={["Mon", "Tue", "Wed", "Thu", "Fri"]} />
    </div>
  );
}
