type Props = {
  score: number;
};

export default function SettlementConfidenceCard({ score }: Props) {
  const getLabel = () => {
    if (score >= 85) return "Low Risk";
    if (score >= 60) return "Moderate Risk";
    return "High Risk";
  };

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="text-sm text-gray-500 mb-2">
        Settlement Confidence
      </div>

      <div className="flex items-end gap-3">
        <div className="text-5xl font-bold">
          {score}%
        </div>

        <div className="pb-1 text-sm text-gray-600">
          {getLabel()}
        </div>
      </div>
    </div>
  );
}
