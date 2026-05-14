type Props = {
  score: number;
};

export default function SettlementConfidenceCard({
  score,
}: Props) {
  const label =
    score >= 85
      ? "Low operational risk"
      : score >= 60
      ? "Moderate ambiguity"
      : "High dispute risk";

  const color =
    score >= 85
      ? "text-emerald-700"
      : score >= 60
      ? "text-amber-700"
      : "text-rose-700";

  return (
    <div className="rounded-2xl border border-ink-200/70 bg-white p-7 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-wide text-ink-400 mb-3">
            Settlement Confidence
          </div>
          <div className="flex items-end gap-3">
            <div
              className={`text-[64px] leading-none font-bold ${color}`}
              style={{ letterSpacing: "-0.04em" }}
            >
              {score}%
            </div>

            <div className="pb-2 text-[13px] text-ink-500">
              {label}
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-[11px] text-ink-400">
            AI review
          </div>

          <div className="text-[12px] font-medium text-ink-700 mt-1">
            Live operational analysis
          </div>
        </div>
      </div>
    </div>
  );
}
