import { analyzeSettlement } from "@/lib/settlement-analysis";
const analysis = analyzeSettlement(settlement);
export type SettlementRisk = {
  severity: "high" | "medium" | "low";
  title: string;
  description: string;
};

export type SettlementAnalysis = {
  confidenceScore: number;
  risks: SettlementRisk[];
};

export function analyzeSettlement(settlement: any): SettlementAnalysis {
  const risks: SettlementRisk[] = [];

  // Contradictory settlement signals
  if (
    settlement.status === "disputed" &&
    settlement.signoffNote?.toLowerCase().includes("looks good")
  ) {
    risks.push({
      severity: "high",
      title: "Conflicting settlement signals",
      description:
        "Settlement is marked disputed while artist-side sign-off language implies approval.",
    });
  }

  // Settlement edited after approval
  if (settlement.editedAfterApproval) {
    risks.push({
      severity: "high",
      title: "Post-approval financial edits detected",
      description:
        "Settlement values changed after artist-side acknowledgment.",
    });
  }

  // Missing supporting documentation
  if (!settlement.hasAttachments) {
    risks.push({
      severity: "medium",
      title: "Missing supporting documentation",
      description:
        "Expense deductions appear unsupported by attached documentation.",
    });
  }

  // High security cost anomaly
  if (settlement.securityExpense > 400) {
    risks.push({
      severity: "medium",
      title: "Security expense anomaly",
      description:
        "Security expenses exceed expected operational range for comparable shows.",
    });
  }

  let score = 100;

  risks.forEach((risk) => {
    if (risk.severity === "high") score -= 25;
    if (risk.severity === "medium") score -= 10;
    if (risk.severity === "low") score -= 5;
  });

  return {
    confidenceScore: Math.max(score, 0),
    risks,
  };
}
