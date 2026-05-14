export default function StructuredSignoff() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="font-semibold text-lg mb-4">
        Final Sign-off
      </h2>

      <div className="space-y-4 text-sm">
        <label className="block">
          <input type="checkbox" className="mr-2" />
          All numbers are final
        </label>

        <label className="block">
          <input type="checkbox" className="mr-2" />
          Any verbal exceptions were documented
        </label>

        <label className="block">
          <input type="checkbox" className="mr-2" />
          All deductions include supporting documentation
        </label>

        <label className="block">
          <input type="checkbox" className="mr-2" />
          Artist representative acknowledges settlement
        </label>

        <button className="mt-4 rounded-xl bg-black text-white px-4 py-2">
          Finalize Settlement
        </button>
      </div>
    </div>
  );
}
