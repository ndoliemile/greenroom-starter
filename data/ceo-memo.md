# Settlement Confidence — Reducing Operational Ambiguity During Venue Settlement

**From:** Ndoli Emile Arnauld
**To:** Greenroom team
**Date:** May 2026

Here’s a polished memo you can adapt directly for submission.

---

# Settlement Confidence — Reducing Operational Ambiguity During Venue Settlement

**Ndoli Emile Arnauld**
Applied AI PM Case Study — Greenroom

---

## Problem

Settlement disputes at independent venues are rarely caused by arithmetic errors alone. More often, they emerge from ambiguous operational workflows: verbal approvals that are never formalized, edits made after sign-off, contradictory status labels, and fragmented communication between venue operators and artist representatives.

After exploring the Greenroom product and reviewing settlement records, I noticed that structured data and operational reality frequently drift apart. In several cases, settlement status fields conflicted with freeform notes or approval behavior. For example, a settlement could be marked “disputed” while a sign-off note still implied approval.

At independent venues like The Crescent, settlement happens in a highly operational environment:

* late at night
* under time pressure
* across tired operators
* in noisy backstage settings
* through fragmented conversations

In that context, ambiguity becomes expensive. The core issue is not calculation itself — it is trust alignment between the venue and the artist representative.

---

## Why I Chose This Slice

I intentionally avoided rebuilding settlement accounting, forecasting revenue, or creating broad reporting dashboards.

The prompt repeatedly emphasized operational messiness, contradictory signals, and the gap between what the UI says and what actually happened. That led me to focus on a narrower but higher-leverage problem:

> preventing ambiguous settlement closures before disputes happen.

I believe this is a stronger applied AI opportunity because AI is most useful when:

* interpreting ambiguity
* surfacing inconsistencies
* summarizing operational risk
* structuring messy workflows

rather than replacing accounting systems.

Instead of trying to automate settlement, I focused on helping operators identify uncertainty before settlement closes.

---

## Proposed Solution: Settlement Confidence

I designed a lightweight AI-assisted settlement review layer called **Settlement Confidence**.

The goal is to help Mariana quickly understand whether a settlement is operationally safe to finalize.

The workflow includes four tightly connected components:

### 1. Settlement Confidence Score

The system generates a confidence score that estimates operational alignment rather than financial correctness.

Examples:

* 92% — Low Risk
* 68% — Moderate Ambiguity
* 31% — High Dispute Risk

The score is influenced by:

* contradictory statuses
* edits after approval
* reopen frequency
* undocumented deductions
* manual overrides
* inconsistent sign-off behavior

This creates a fast operational signal during late-night settlement.

---

### 2. AI Discrepancy Detection

The system surfaces inconsistencies in plain language.

Examples:

* Settlement marked disputed while sign-off note says “Looks good — TM”
* Guarantee edited after verbal approval
* Expenses modified after settlement acknowledgment
* Security deduction unusually high relative to similar shows

This helps operators quickly understand where ambiguity exists without manually reconstructing the entire workflow.

---

### 3. Settlement Timeline

I added a chronological operational timeline showing how settlement evolved over time.

Example:

* 11:42pm — Doors closed
* 11:58pm — Guarantee edited from $4,000 → $4,500
* 12:04am — Agent verbally approved settlement
* 12:17am — Expenses modified
* 12:22am — Settlement marked disputed

This improves audit visibility and helps explain how conflicting settlement states emerged.

---

### 4. Structured Sign-off Workflow

Settlement approvals are often captured through vague freeform comments that create interpretation problems later.

To reduce ambiguity, I introduced structured confirmation prompts before settlement closes:

* Are all numbers final?
* Were any verbal exceptions granted?
* Are deductions fully documented?
* Does the artist representative acknowledge final settlement?

This creates clearer accountability while preserving operational flexibility.

---

## AI Philosophy

I intentionally positioned AI as:

* an interpretation layer
* an anomaly-detection system
* an operational assistant

NOT:

* an autonomous accounting engine
* a replacement for human approval
* a financial decision-maker

I believe this distinction is important in trust-sensitive operational workflows.

The goal is not to automate settlement decisions. The goal is to reduce uncertainty before settlement closes.

---

## Design Principles

I designed the workflow around the actual operating conditions of independent venues.

Settlement often happens:

* late at night
* under fatigue
* in noisy environments
* under pressure to close quickly

The interface therefore prioritizes:

* low cognitive load
* concise explanations
* minimal clicks
* calm visual hierarchy
* operational clarity

I intentionally avoided:

* chat-heavy AI interfaces
* overly dense dashboards
* excessive analytics
* distracting AI branding

because they increase friction during already stressful workflows.

---

## Technical Approach

The prototype was implemented using:

* Next.js
* React
* Tailwind
* a lightweight heuristic-based analysis layer

The analysis engine evaluates settlement conditions and surfaces operational risks using deterministic logic.

I intentionally avoided introducing full LLM infrastructure because the prototype objective was workflow validation rather than model sophistication. Most ambiguity cases can already be detected through operational heuristics and structured workflow analysis.

---

## Trade-offs and Scope Decisions

I intentionally did NOT build:

* accounting integrations
* predictive revenue forecasting
* real-time collaborative editing
* AI chat assistants
* automated dispute resolution
* cross-venue benchmarking

I made these cuts because the highest leverage problem was ambiguity during final settlement.

I preferred depth over breadth and focused narrowly on improving trust alignment before settlement closure.

---

## Validation Plan

I would evaluate this workflow using both quantitative and qualitative signals.

### Quantitative Metrics

* reduction in reopened settlements
* reduction in post-show disputes
* faster settlement completion
* reduced clarification messages
* fewer contradictory settlement states

### Qualitative Validation

The most important question is:

> Would Mariana trust this system during a real 2am settlement workflow?

I would validate this through:

* observational settlement sessions
* operator interviews
* post-show workflow reviews
* usability testing with venue managers and bookers

---

## Future Iterations

If I continued this project, the next areas I would explore include:

* predictive dispute likelihood
* cross-show anomaly detection
* artist-side acknowledgment workflows
* automatic settlement recap emails
* AI-assisted expense categorization

---

## Final Reflection

The most important insight from this exercise was that settlement is fundamentally a trust and workflow problem before it is an accounting problem.

I believe the strongest AI opportunities in operational software are not replacing humans, but helping them resolve ambiguity faster and with more confidence.

That philosophy shaped both the scope and implementation of this solution.

