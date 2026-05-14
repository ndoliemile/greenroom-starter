export default function CustomSettlementView({
  settlement,
  deal,
  expenses,
  recoups,
}: any) {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 space-y-3">
      <h2 className="text-xl font-semibold">
        VS Deal — AI Settlement Review Required
      </h2>

      <p className="text-sm text-gray-700">
        This deal type (VS: Guarantee vs % of Net) is not fully supported
        by the standard settlement engine.
      </p>

      <div className="text-sm text-gray-800">
        <p><strong>Guarantee:</strong> ${deal?.guaranteeAmount}</p>
        <p><strong>Deal Type:</strong> {deal?.dealType}</p>
        <p><strong>Recoups:</strong> {recoups?.length}</p>
        <p><strong>Expenses:</strong> {expenses?.length}</p>
      </div>

      <div className="mt-3 text-xs text-amber-900">
        AI Insight: VS deals require reconciliation between guarantee and net percentage outcomes.
      </div>
    </div>
  );
}
