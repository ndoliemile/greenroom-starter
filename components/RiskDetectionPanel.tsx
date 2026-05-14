import { AlertTriangle } from "lucide-react";

type Risk = {
  severity: string;
  title: string;
  description: string;
};

type Props = {
  risks: Risk[];
};

export default function RiskDetectionPanel({ risks }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="w-5 h-5" />
        <h2 className="font-semibold text-lg">
          AI Settlement Review
        </h2>
      </div>

      <div className="space-y-4">
        {risks.map((risk, index) => (
          <div
            key={index}
            className="rounded-xl border p-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium">
                {risk.title}
              </h3>

              <span className="text-xs uppercase text-gray-500">
                {risk.severity}
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              {risk.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
<div
  key={index}
  className="rounded-xl border border-ink-200/70 p-4 bg-canvas-soft"
>
  <div className="flex items-start justify-between gap-4">
    <div>
      <h3 className="font-medium text-[13px] text-ink-900">
        {risk.title}
      </h3>

      <p className="text-[12px] text-ink-500 mt-1 leading-relaxed">
        {risk.description}
      </p>
    </div>

    <span
      className={`text-[10px] uppercase font-medium ${
        severityColor[
          risk.severity as keyof typeof severityColor
        ]
      }`}
    >
      {risk.severity}
    </span>
  </div>
</div>
