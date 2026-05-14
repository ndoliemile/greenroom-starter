
import CustomSettlementView from "@/components/CustomSettlementView";
export default function CustomSettlementView() {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
      <h2 className="text-xl font-semibold mb-2">
        AI-Assisted VS Deal Review
      </h2>

      <p className="text-sm text-gray-700">
        This settlement contains non-standard VS deal logic
        requiring operational review before finalization.
      </p>
    </div>
  );
}
