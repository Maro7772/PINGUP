export default function StatCard({ title, value, hint }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
      {hint && <div className="text-xs text-gray-400">{hint}</div>}
    </div>
  );
}
