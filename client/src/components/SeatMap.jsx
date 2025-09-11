export default function SeatMap({ seats = [], selected, onSelect }) {
  return (
    <div className="grid grid-cols-8 gap-2">
      {seats.map((s) => (
        <button
          key={s.seatNo}
          disabled={s.isBooked}
          onClick={() => onSelect(s.seatNo)}
          className={`h-10 rounded ${
            s.isBooked ? 'bg-gray-300' : selected === s.seatNo ? 'bg-indigo-600 text-white' : 'bg-white border'
          }`}
        >
          {s.seatNo}
        </button>
      ))}
    </div>
  );
}
