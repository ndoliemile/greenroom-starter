const events = [
  {
    time: "11:42pm",
    text: "Doors closed · final walk-in count reconciled",
  },
  {
    time: "11:58pm",
    text: "Guarantee updated following merch settlement discussion",
  },
  {
    time: "12:04am",
    text: "Artist representative verbally approved revised settlement",
  },
  {
    time: "12:17am",
    text: "Security expense adjustment added",
  },
  {
    time: "12:22am",
    text: "Settlement status changed to disputed",
  },
];
export default function SettlementTimeline() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="font-semibold text-lg mb-6">
        Settlement Timeline
      </h2>

      <div className="space-y-5">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex gap-4"
          >
            <div className="w-20 text-sm text-gray-500">
              {event.time}
            </div>

            <div className="flex-1 border-l pl-4 text-sm">
              {event.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
