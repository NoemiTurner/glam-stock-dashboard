export default function GlamCard({ title, value, icon }) {
  return (
    <div className="bg-pink-100 rounded-2xl shadow-xl p-4 flex items-center gap-4">
      <img src={icon} alt="" className="w-10 h-10 shimmer" />
      <div>
        <h3 className="text-pink-700 text-lg font-semibold">{title}</h3>
        <p className="text-rose-500 text-xl">{value}</p>
      </div>
    </div>
  );
}
