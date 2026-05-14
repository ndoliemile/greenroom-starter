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
