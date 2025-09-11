import { Link } from 'react-router-dom';
export default function EventCard({ ev }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="font-semibold">{ev.title}</div>
      <div className="text-sm text-gray-500">{new Date(ev.date).toLocaleString()}</div>
      <div className="mt-2">{ev.venue}</div>
      <div className="mt-2 font-bold">${ev.price}</div>
      <Link to={`/events/${ev._id}`} className="inline-block mt-3 px-3 py-1 rounded bg-indigo-600 text-white">View</Link>
    </div>
  );
}
