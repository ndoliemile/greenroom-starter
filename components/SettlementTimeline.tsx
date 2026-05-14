const events = [
  "11:42pm — Doors closed",
  "11:58pm — Guarantee edited from $4,000 → $4,500",
  "12:04am — Agent verbally approved settlement",
  "12:17am — Expenses modified",
  "12:22am — Settlement marked disputed",
];

export default function SettlementTimeline() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="font-semibold text-lg mb-4">
        Settlement Timeline
      </h2>

      <div className="space-y-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="border-l-2 pl-4 text-sm text-gray-700"
          >
            {event}
          </div>
        ))}
      </div>
    </div>
  );
}
