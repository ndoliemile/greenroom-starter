Settlement Confidence
Reducing Operational Ambiguity During Venue Settlement
Candidate: Ndoli Emile
Applied AI Product Manager Case Study — Greenroom
Executive Summary

Greenroom’s settlement workflow is not failing because venues cannot calculate payouts.

It is failing because the product cannot reliably model, interpret, and explain the messy operational reality of live music deals.

The current system assumes settlement terms are structured and deterministic. In practice, the most important deal terms live inside freeform negotiation notes, evolve operationally during the show lifecycle, and often require human interpretation during settlement.

As a result:

operators abandon the product for spreadsheets,
tour managers lose trust in settlement outputs,
and disputes emerge from ambiguity rather than arithmetic.

My proposal focuses on a narrow but high-leverage product slice:

A “Settlement Confidence” layer that detects ambiguity, explains settlement logic transparently, and helps operators resolve uncertainty before settlement becomes a dispute.

Rather than attempting to automate every possible deal structure, Greenroom should become the trusted operational system for interpreting and reconciling real-world venue deals.

The Problem

The strongest signal across the repo, transcripts, and dispute examples is this:

The notes_freetext field is the real source of truth.

Structured fields are inconsistently populated because the current product model does not match how live music deals are actually negotiated.

Operators like Mariana already understand this.

That is why they settle shows in spreadsheets.

Not because spreadsheets are better calculators —
but because spreadsheets are:

flexible,
explainable,
collaborative,
and easy to audit during disputes.

The existing settlement tool breaks down precisely when operational complexity increases:

Vs deals,
walkout pots,
recoup interpretation,
tier ratchets,
and hybrid net/gross structures.

These are not edge cases.
They are the operational core of independent venue settlement.

Key Insight

The settlement problem is not primarily a math problem.

It is a:

trust problem,
interpretation problem,
and operational transparency problem.

The Coastal Spell dispute illustrates this clearly.

The disagreement did not emerge because the venue could not calculate percentages.

It emerged because:

the deal language was ambiguous,
the interpretation was unclear,
and neither side had shared visibility into how settlement logic was derived.

The current workflow behaves like a black-box calculator.

In high-trust operational environments, black boxes fail.

Product Thesis

Greenroom should shift settlement from:

“a payout calculator”

to:

“a collaborative settlement interpretation system.”

The product should help venues and tour teams:

understand settlement logic,
identify ambiguity early,
inspect calculations transparently,
and resolve disputes collaboratively.

The objective is not perfect automation.

The objective is operational trust.

Proposed Solution: Settlement Confidence Layer

I would redesign settlement around three core capabilities.

1. Deal Interpretation Layer

Treat freeform deal notes as first-class operational input.

The system parses:

guarantees,
percentages,
recoup clauses,
expense caps,
bonuses,
walkout conditions,
and settlement modifiers

into proposed settlement logic.

Critically, the system also surfaces uncertainty.

Example:

Clause	Interpretation	Confidence
Guarantee	$5,000	High
Artist Share	80% of Net	High
Marketing Cap	$1,500	Medium
Walkout Clause	Manual Review Needed	Low

This creates a workflow where ambiguity is acknowledged explicitly rather than hidden behind rigid forms.

2. Settlement Explainability Ledger

Replace opaque settlement outputs with fully traceable payout logic.

Every calculation should expose:

revenue inputs,
deductions,
recoups,
overrides,
caps,
and payout calculations.

The settlement becomes an auditable operational ledger rather than a single payout number.

This directly addresses the trust gap described by tour managers in the interviews.

Operators and counterparties should be able to answer:

“Where did this number come from?”

without leaving the product.

3. Dispute-Aware Workflow

Disputes are not exceptional behavior.

They are a normal part of venue settlement operations.

The product should support:

disputed line items,
revision history,
inline comments,
approval checkpoints,
and settlement versioning.

The goal is not eliminating disagreements entirely.

The goal is reducing operational friction and preserving trust during disagreements.

Why This Matters Strategically

Pri’s memo describes Greenroom as:

“comprehensive but mediocre.”

Settlement is the clearest example of that gap.

Today, Greenroom wins on breadth but loses on workflow quality during the most operationally sensitive moments.

A high-trust settlement workflow could become:

a daily-use operational wedge,
a retention driver,
and a strategic differentiator in the independent venue market.

Most competitors will continue adding more templates and fields.

Greenroom can differentiate by becoming:

the platform that understands operational nuance.

MVP Scope

I would intentionally narrow the first release.

Initial Scope
Standard Vs deals
Marketing recoup handling
Expense caps
Explainable settlement ledger
Ambiguity/confidence indicators
Out of Scope
Fully automated settlement approval
Long-tail custom deal automation
Advanced ratchets
AI-generated final settlements

The first milestone is not:

“full settlement automation.”

The milestone is:

reducing spreadsheet dependency on the most common complex settlement scenarios.

Success Metrics
Adoption
% of settlements completed in-app
% of Vs deals settled in-app
Reduction in spreadsheet exports
Efficiency
Average settlement completion time
Manual override frequency
Time-to-finalized settlement
Trust
Settlement dispute rate
Tour manager satisfaction
Recoup dispute frequency
Revision frequency after submission
Risks & Tradeoffs
False Confidence

An incorrect automated interpretation could damage trust quickly.

Mitigation:

confidence scoring,
ambiguity indicators,
required human review for low-confidence clauses.
Workflow Complexity

More transparency may initially increase workflow depth.

Mitigation:

progressive disclosure,
operator-focused UX,
simplified defaults for common deals.
Conclusion

Greenroom’s settlement problem is not fundamentally about unsupported formulas.

It is about operational ambiguity.

Today, experienced operators leave the platform because spreadsheets provide something the product does not:

flexibility,
explainability,
and collaborative trust.

Greenroom should not attempt to replace spreadsheets with stricter forms.

It should replace spreadsheets with a transparent operational system that venues, agents, and tour managers trust enough to use together.An important insight from this exercise was that settlement is fundamentally a trust and workflow problem before it is an accounting problem.

I believe the strongest AI opportunities in operational software are not replacing humans, but helping them resolve ambiguity faster and with more confidence.
