export type Audience = "all" | "adi" | "insurer" | "super" | "phi";
export type Topic =
  | "all"
  | "governance"
  | "risk"
  | "security"
  | "operational"
  | "ai"
  | "publication"
  | "board"
  | "sector";

export type APRAPublication = {
  id: string;
  title: string;
  date: string;
  summary: string;
  whyItMatters: string[];
  action: string[];
  href: string;
  accent?: "teal" | "violet" | "amber" | "red" | "blue" | "green";
};

export type ControlCard = {
  id: string;
  audience: Audience[];
  topics: Topic[];
  standard: string;
  title: string;
  summary: string;
  whatAPRAExpects: string[];
  practicalControls: string[];
  evidence: string[];
  aiImplications: string[];
  links: Array<{ label: string; href: string }>;
  accent?: "teal" | "violet" | "amber" | "red" | "blue" | "green";
};

export type RoadmapStep = {
  id: string;
  title: string;
  description: string;
  evidence: string[];
};

export type BoardQuestion = {
  question: string;
  answerFrame: string;
};

export const audienceOptions: Array<{ id: Audience; label: string; hint: string }> = [
  { id: "all", label: "All entities", hint: "Cross-industry view" },
  { id: "adi", label: "ADI", hint: "Banking and deposit-taking" },
  { id: "insurer", label: "Insurer", hint: "General and life insurance" },
  { id: "super", label: "Super", hint: "RSE licensees" },
  { id: "phi", label: "PHI", hint: "Private health insurers" },
];

export const topicOptions: Array<{ id: Topic; label: string }> = [
  { id: "all", label: "All" },
  { id: "governance", label: "Governance" },
  { id: "risk", label: "Risk" },
  { id: "security", label: "Security" },
  { id: "operational", label: "Operational" },
  { id: "ai", label: "AI" },
  { id: "publication", label: "Publications" },
  { id: "board", label: "Board" },
  { id: "sector", label: "Sector overlays" },
];

export const publicationHighlights: APRAPublication[] = [
  {
    id: "ai-letter",
    title: "APRA calls for a step-change in AI-related risk management and governance",
    date: "2026-06-20",
    summary:
      "APRA says governance, risk management, assurance and operational resilience are not keeping pace with the scale, speed, and complexity of AI adoption.",
    whyItMatters: [
      "AI is moving from experiments to embedded customer and decision workflows.",
      "Boards often lack the technical literacy needed to challenge management on AI risk.",
      "AI risk crosses cyber, privacy, procurement, and operational resilience lines at once.",
    ],
    action: [
      "Create an AI inventory with owners, purposes, model/provider details, and criticality.",
      "Add AI to risk appetite, change management, incident management, and vendor assurance.",
      "Test concentration risk, contingency plans, and fallback operations for every critical use case.",
    ],
    href: "https://www.apra.gov.au/news-and-publications/apra-calls-step-change-ai-related-risk-management-and-governance",
    accent: "red",
  },
  {
    id: "governance-paper",
    title: "Governance Review Consultation Paper",
    date: "2026-06-17",
    summary:
      "APRA says stronger boards and clearer accountability are needed to handle emerging risks such as AI, cyber, and geopolitical disruption.",
    whyItMatters: [
      "The review is the first major governance refresh in more than a decade.",
      "APRA wants clearer contemporary requirements for boards and senior managers.",
      "The proposal aims to harmonise governance minimums across APRA-regulated entities.",
    ],
    action: [
      "Map board charters, committee terms, delegations, and management reporting against CPS 510.",
      "Review conflicts management, skills matrices, and fit and proper files for directors and executives.",
      "Prepare for more explicit governance minimums and a stronger evidence trail.",
    ],
    href: "https://www.apra.gov.au/governance-review-consultation-paper",
    accent: "violet",
  },
  {
    id: "governance-update",
    title: "APRA revises governance proposals following industry consultation",
    date: "2025-10-24",
    summary:
      "After 57 meetings, more than 150 stakeholder organisations, and almost 80 submissions, APRA narrowed three proposals and kept the governance uplift moving.",
    whyItMatters: [
      "APRA moved to a hard 12-year non-executive director tenure limit with limited extensions.",
      "The proposed independent-director requirement for banks and insurers will not proceed as originally drafted.",
      "Early APRA engagement on responsible person appointments and succession will also not proceed as originally drafted.",
    ],
    action: [
      "Stress-test director tenure, independence, conflicts, and succession plans now.",
      "Refresh relevant interests registers and board skills/renewal evidence.",
      "Treat the final CPS 510 package as a near-term board operating model change, not a paper exercise.",
    ],
    href: "https://www.apra.gov.au/news-and-publications/apra-revises-governance-proposals-following-industry-consultation",
    accent: "amber",
  },
  {
    id: "governance-next-phase",
    title: "APRA commences next phase of push to strengthen and streamline governance requirements",
    date: "2026-06-16",
    summary:
      "APRA says the new CPS 510 is meant to sharpen accountability, align with modern practice, and remove duplicated fit and proper reporting now that FAR is in place.",
    whyItMatters: [
      "APRA expects new requirements to be in effect from early 2028.",
      "The final package will combine five existing prudential standards into one.",
      "APRA is also clarifying skills, conflicts, and relevant interests requirements.",
    ],
    action: [
      "Inventory the artefacts needed for the next board cycle, not just the consultation response.",
      "Track any dependencies on FAR reporting, CPS 001 defined terms, and internal governance policies.",
      "Align the board calendar to the release timing and expected commencement window.",
    ],
    href: "https://www.apra.gov.au/news-and-publications/apra-commences-next-phase-push-strengthen-and-streamline-governance",
    accent: "blue",
  },
];

export const controlLibrary: ControlCard[] = [
  {
    id: "cps510",
    audience: ["all"],
    topics: ["governance", "board"],
    standard: "CPS 510 Governance",
    title: "Board oversight, delegation, and conflicts",
    summary:
      "The board must own the governance architecture, not just receive reports. APRA’s refresh pushes clearer accountability, better challenge, and a cleaner line of sight from board to business.",
    whatAPRAExpects: [
      "A board that understands its prudential responsibilities and can challenge management assumptions.",
      "Clear delegation that does not dilute accountability.",
      "Effective conflicts management, skills coverage, and regular board evaluation and renewal.",
    ],
    practicalControls: [
      "Keep a board governance map showing charters, delegations, committees, and escalation paths.",
      "Run a quarterly board risk conversation on the riskiest AI, outsourcing, cyber, and resilience issues.",
      "Maintain a decision log for major approvals, including AI use cases and vendor concentration.",
    ],
    evidence: [
      "Board charter and committee terms",
      "Skills matrix and renewal plan",
      "Conflicts and relevant interests register",
      "Board papers with challenge questions and resolutions",
    ],
    aiImplications: [
      "No AI use case should go live without a named business owner and board-visible risk tier.",
      "The board should see AI concentration, drift, and override metrics at a cadence it can actually use.",
    ],
    links: [
      { label: "CPS 510", href: "https://www.apra.gov.au/standards/cps-510" },
      { label: "Governance consultation", href: "https://www.apra.gov.au/governance-review-consultation-paper" },
    ],
    accent: "teal",
  },
  {
    id: "cps520",
    audience: ["all"],
    topics: ["governance", "board"],
    standard: "CPS 520 Fit and Proper",
    title: "Responsible persons must stay fit, not just start fit",
    summary:
      "Fit and proper is not a hiring checkbox. APRA expects a living process that re-tests capability, integrity, judgement, and conflicts whenever the role or risk profile changes.",
    whatAPRAExpects: [
      "Responsibility holders must have the capability and integrity to exercise sound judgement.",
      "Assessment and reassessment processes must be effective and documented.",
      "The regulated entity must be able to show it acted promptly when concerns arose.",
    ],
    practicalControls: [
      "Tie reassessment triggers to role change, incident, misconduct, material outsourcing, and AI deployment changes.",
      "Keep evidence of referee checks, training, performance concerns, and conflict declarations.",
      "Link accountable owners to AI and technology oversight rather than assuming it sits only with IT.",
    ],
    evidence: [
      "Fit and proper policy",
      "Assessment forms and trigger logs",
      "Probity and training records",
      "Board/committee appointment papers",
    ],
    aiImplications: [
      "A manager approving AI risk or supplier decisions should be tested for technical literacy and oversight capability.",
      "A people file should show who owns AI-related decisions and who signs off on reassessment triggers.",
    ],
    links: [
      { label: "CPS 520", href: "https://www.apra.gov.au/standards/cps-520" },
      { label: "CPS 001", href: "https://www.apra.gov.au/standards/cps-001" },
    ],
    accent: "green",
  },
  {
    id: "cps511",
    audience: ["all"],
    topics: ["governance", "board"],
    standard: "CPS 511 Remuneration",
    title: "Pay for prudence, not just volume",
    summary:
      "Remuneration should reinforce prudential outcomes, not push behaviour that creates hidden operational or customer harm.",
    whatAPRAExpects: [
      "Remuneration frameworks must support sound risk outcomes and alignment with risk appetite.",
      "The board should be able to see how material risk and conduct outcomes affect pay.",
      "Incentives should not reward activity that creates unmanaged prudential risk.",
    ],
    practicalControls: [
      "Add AI-related risk, control breaches, incident severity, and remediation timeliness to scorecards.",
      "Introduce deferral or clawback for AI deployments that create avoidable losses or customer harm.",
      "Check that performance metrics do not reward automation volume without quality, complaint, or error guardrails.",
    ],
    evidence: [
      "Remuneration policy",
      "Scorecard design and breach reports",
      "Clawback and deferral decisions",
      "Board remuneration committee minutes",
    ],
    aiImplications: [
      "If AI is meant to improve productivity, the scorecard must also penalise model errors and unsafe scale-ups.",
      "The board should know whether AI cost savings are being created by taking hidden risk.",
    ],
    links: [
      { label: "CPS 511", href: "https://www.apra.gov.au/standards/cps-511" },
    ],
    accent: "amber",
  },
  {
    id: "cps220",
    audience: ["all"],
    topics: ["risk", "operational", "ai"],
    standard: "CPS 220 Risk Management",
    title: "AI belongs in the enterprise risk framework",
    summary:
      "APRA expects a risk framework that actually covers the business. For AI, that means classification, appetite, ownership, and scenario analysis all need to be explicit.",
    whatAPRAExpects: [
      "The board approves the risk management framework and can see how it works in practice.",
      "Material risks are identified, monitored, and reported with clear escalation.",
      "Risk appetite and tolerances are meaningful enough to trigger action.",
    ],
    practicalControls: [
      "Create an AI inventory with use case criticality, data sources, model/provider, and decision impact.",
      "Classify each use case by customer impact, prudential impact, and operational dependency.",
      "Run AI scenario tests for drift, hallucination, prompt injection, and vendor outage.",
    ],
    evidence: [
      "Risk management framework and appetite statements",
      "Use-case register and risk tiering",
      "Scenario analyses and exceptions",
      "Risk committee reporting packs",
    ],
    aiImplications: [
      "APRA’s AI letter makes it clear that AI risk spans cyber, privacy, procurement, and resilience at once.",
      "A fragmented control model is not enough if the AI use case can fail in multiple domains simultaneously.",
    ],
    links: [
      { label: "CPS 220", href: "https://www.apra.gov.au/standards/cps-220" },
      {
        label: "APRA AI letter",
        href: "https://www.apra.gov.au/news-and-publications/apra-calls-step-change-ai-related-risk-management-and-governance",
      },
    ],
    accent: "red",
  },
  {
    id: "cps230",
    audience: ["all"],
    topics: ["operational", "ai"],
    standard: "CPS 230 Operational Risk Management",
    title: "Critical services need fallback paths and service-provider control",
    summary:
      "APRA’s operational risk standard is where AI governance meets the real world. If AI can interrupt a critical service, the entity needs a service map, a fallback, and an incident path.",
    whatAPRAExpects: [
      "An operational risk framework that identifies critical operations and key dependencies.",
      "Controls for service providers, continuity, and material incidents.",
      "Testing that the business can keep going during disruption.",
    ],
    practicalControls: [
      "Tag AI-enabled processes that support critical operations and record their failure modes.",
      "Set vendor contingency plans, exit paths, and manual workarounds before production launch.",
      "Tie model drift, tool failure, and access loss to incident triggers and recovery playbooks.",
    ],
    evidence: [
      "Critical operations map",
      "Service provider register and contracts",
      "BCP and incident playbooks",
      "Control testing and recovery results",
    ],
    aiImplications: [
      "If AI is used in customer service, credit workflows, claims, or member servicing, the fallback plan must be real, not theoretical.",
      "Every critical AI dependency should have a manual path and a vendor exit option.",
    ],
    links: [
      { label: "CPS 230", href: "https://www.apra.gov.au/standards/cps-230" },
      {
        label: "AI governance review",
        href: "https://www.apra.gov.au/governance-review-consultation-paper",
      },
    ],
    accent: "violet",
  },
  {
    id: "cps234",
    audience: ["all"],
    topics: ["security", "ai", "operational"],
    standard: "CPS 234 Information Security",
    title: "Protect the model, the prompts, the memory, and the data",
    summary:
      "AI introduces a wider attack surface than a normal app. Security needs to cover access, secrets, prompt injection, retrieval, tool use, logging, and monitoring.",
    whatAPRAExpects: [
      "Information security capability that is commensurate with threats and risks.",
      "Security controls that are tested and kept current.",
      "Reporting and response for information security incidents and weaknesses.",
    ],
    practicalControls: [
      "Treat prompts, retrieved documents, and model outputs as security-sensitive control points.",
      "Log model calls, tool actions, overrides, and administrator changes.",
      "Test for prompt injection, data leakage, privilege escalation, and unsafe output handling.",
    ],
    evidence: [
      "Security policy and control matrix",
      "Pen-test and red-team reports",
      "Access and logging records",
      "Incident tickets and response timelines",
    ],
    aiImplications: [
      "APRA’s latest AI review notes that information security practices are struggling to keep pace with AI adoption.",
      "If the model is embedded in a vendor platform, the entity still owns the security outcome.",
    ],
    links: [
      { label: "CPS 234", href: "https://www.apra.gov.au/standards/cps-234" },
      {
        label: "APRA AI letter",
        href: "https://www.apra.gov.au/news-and-publications/apra-calls-step-change-ai-related-risk-management-and-governance",
      },
    ],
    accent: "blue",
  },
  {
    id: "cps900",
    audience: ["all"],
    topics: ["operational", "sector"],
    standard: "CPS 900 Resolution Planning",
    title: "Know how you would unwind the dependency",
    summary:
      "Resolution planning is the exit discipline of prudential regulation. If a critical AI dependency fails or becomes unacceptable, the entity needs a credible way to step away.",
    whatAPRAExpects: [
      "A resolution plan that identifies critical functions and the actions needed to preserve them.",
      "Operational readiness for stress, disruption, or wind-down.",
      "Evidence that the entity can continue to serve customers while it restructures.",
    ],
    practicalControls: [
      "Document which AI services are critical, which are replaceable, and which can be turned off.",
      "Test vendor exit, data export, and manual substitution for critical use cases.",
      "Make sure the recovery plan addresses AI dependency concentration.",
    ],
    evidence: [
      "Resolution plan and critical function map",
      "Exit and portability tests",
      "Fallback process walkthroughs",
      "Board-approved recovery actions",
    ],
    aiImplications: [
      "A regulated entity cannot assume an AI vendor or internal model will always remain safe, cheap, or available.",
      "If the service is material, the plan must show how customers keep getting served when AI is unavailable.",
    ],
    links: [
      { label: "CPS 900", href: "https://www.apra.gov.au/standards/cps-900" },
    ],
    accent: "green",
  },
  {
    id: "adi-overlay",
    audience: ["adi"],
    topics: ["sector"],
    standard: "ADI overlay",
    title: "Banking-specific controls that sit on top of the cross-industry core",
    summary:
      "For an ADI, AI governance has to land on capital, credit, liquidity, conduct, and related-party exposure questions, not just model novelty.",
    whatAPRAExpects: [
      "A credit and capital story that survives stress, concentration, and remediation scrutiny.",
      "Liquidity and contingency readiness for AI-dependent customer or internal processes.",
      "Clear oversight of outsourcing, related entities, and material service providers.",
    ],
    practicalControls: [
      "Map AI use cases to lending, fraud, collections, customer servicing, and treasury processes.",
      "Stress test whether AI errors could distort credit quality, liquidity decisions, or complaints volume.",
      "Confirm manual override and human decisioning paths for material credit or customer outcomes.",
    ],
    evidence: [
      "ADI AI use-case register",
      "Credit and fraud control reports",
      "Liquidity/BCP fallback tests",
      "Outsourcing and related-entity reviews",
    ],
    aiImplications: [
      "A model that changes lending or fraud behaviour can become a prudential issue, not just an analytics issue.",
      "APRA will care whether AI makes the bank faster without making it less controllable.",
    ],
    links: [
      { label: "APRA standards", href: "https://www.apra.gov.au/cross-industry/prudential-and-reporting-standards" },
    ],
    accent: "amber",
  },
  {
    id: "insurer-overlay",
    audience: ["insurer"],
    topics: ["sector"],
    standard: "Insurer overlay",
    title: "Claims, reserving, reinsurance, and actuarial judgement",
    summary:
      "For insurers, AI must be controlled where it can touch claims triage, reserve assumptions, reinsurance data, valuation logic, and customer treatment.",
    whatAPRAExpects: [
      "Governance that preserves actuarial and underwriting judgement.",
      "Controls around claims, reserving, and reinsurance decision support.",
      "Evidence that AI does not create hidden bias or control breakdowns in customer outcomes.",
    ],
    practicalControls: [
      "Document where AI supports, but does not replace, actuarial or claims decisions.",
      "Track reserving and claims changes that may be influenced by AI workflows or vendor data.",
      "Build escalation for model drift that could affect policyholder fairness or expense assumptions.",
    ],
    evidence: [
      "Claims and reserving control logs",
      "Reinsurance data quality checks",
      "Actuarial review packs",
      "Model change approvals and overrides",
    ],
    aiImplications: [
      "An insurer should be able to explain where AI supports judgment and where human control remains mandatory.",
      "If AI influences claims handling or valuation, the audit trail must let APRA reconstruct the decision path.",
    ],
    links: [
      { label: "APRA standards", href: "https://www.apra.gov.au/cross-industry/prudential-and-reporting-standards" },
    ],
    accent: "red",
  },
  {
    id: "super-overlay",
    audience: ["super"],
    topics: ["sector"],
    standard: "Superannuation overlay",
    title: "Member outcomes, investment governance, and service resilience",
    summary:
      "For RSE licensees, AI must align with member outcomes, investment governance, and the operational reality of service providers and member servicing.",
    whatAPRAExpects: [
      "Clear investment and operating governance for AI-supported decision making.",
      "Evidence that member communications, admin, and advice support are controlled and tested.",
      "Operational risk management that covers service providers, data quality, and continuity.",
    ],
    practicalControls: [
      "Map AI use cases across member servicing, advice support, investment operations, and complaints handling.",
      "Check whether AI changes could affect member outcome metrics or trustee decision quality.",
      "Ensure outsourcing and data-sharing arrangements are reviewed before launch.",
    ],
    evidence: [
      "Member-outcome impact assessment",
      "Investment governance papers",
      "Service provider assurance",
      "Contingency and communications playbooks",
    ],
    aiImplications: [
      "The trustee should know whether AI improves service without degrading member trust or oversight quality.",
      "A missing fallback in member servicing is a member outcomes problem, not just an IT issue.",
    ],
    links: [
      { label: "APRA standards", href: "https://www.apra.gov.au/cross-industry/prudential-and-reporting-standards" },
    ],
    accent: "violet",
  },
  {
    id: "phi-overlay",
    audience: ["phi"],
    topics: ["sector"],
    standard: "Private health insurance overlay",
    title: "Benefits management, claims, and member communications",
    summary:
      "Private health insurers need AI controls that protect claims integrity, product governance, and the accuracy of member-facing communications.",
    whatAPRAExpects: [
      "Robust prudential and operational controls over claims, benefits, and member servicing.",
      "Governance that keeps AI from creating opaque customer harm or product misstatement.",
      "Operational resilience and data security appropriate to the dependency created by AI tools.",
    ],
    practicalControls: [
      "Track AI use across claims handling, member service, fraud detection, and content generation.",
      "Verify that any automated member message can be traced back to an approved source.",
      "Confirm the manual path for service interruptions and complaint spikes.",
    ],
    evidence: [
      "Claims processing controls",
      "Member communication approvals",
      "Complaints and exception logs",
      "Service continuity and incident records",
    ],
    aiImplications: [
      "If AI drafts member communications, the entity still owns accuracy, fairness, and timeliness.",
      "APRA will expect the insurer to prove that AI does not degrade claims or benefits integrity.",
    ],
    links: [
      { label: "APRA standards", href: "https://www.apra.gov.au/cross-industry/prudential-and-reporting-standards" },
    ],
    accent: "teal",
  },
  {
    id: "evidence-pack",
    audience: ["all"],
    topics: ["board", "publication"],
    standard: "Board evidence pack",
    title: "The pack APRA examiners will want to see",
    summary:
      "If the entity cannot produce this folder quickly, the control system is probably not ready for a prudential conversation.",
    whatAPRAExpects: [
      "A current AI inventory and risk tiering.",
      "Board-approved policy and risk appetite language.",
      "Third-party and concentration risk tracking.",
      "Testing, incidents, and remediation evidence.",
    ],
    practicalControls: [
      "Create a single evidence folder per AI use case with decisions, tests, incidents, and approvals.",
      "Keep an executive summary that explains what changed since the last board pack.",
      "Make sure the evidence folder points to the owner, the approver, and the next review date.",
    ],
    evidence: [
      "AI register",
      "Board pack",
      "Red-team/test reports",
      "Incident and remediation logs",
    ],
    aiImplications: [
      "APRA will care less about slogans and more about whether the entity can show disciplined control over AI in practice.",
      "A single folder that proves the story is easier to defend than a scattered set of policy decks.",
    ],
    links: [
      { label: "APRA AI letter", href: "https://www.apra.gov.au/news-and-publications/apra-calls-step-change-ai-related-risk-management-and-governance" },
    ],
    accent: "blue",
  },
];

export const roadmap: RoadmapStep[] = [
  {
    id: "inventory",
    title: "1. Build the AI inventory",
    description:
      "List every AI use case, model, vendor, critical dependency, decision impact, and fallback path before you debate solutions.",
    evidence: ["Use-case register", "Model/provider inventory", "Dependency map", "Criticality rating"],
  },
  {
    id: "crosswalk",
    title: "2. Crosswalk each use case to APRA standards",
    description:
      "Map every use case to CPS 510, 520, 511, 220, 230, 234, and 900 so there is one control owner and one board line of sight.",
    evidence: ["Standards matrix", "Control owners", "Board pack", "Exception log"],
  },
  {
    id: "close-gaps",
    title: "3. Close the control gaps",
    description:
      "Fix the missing pieces: approval gates, logs, service-provider clauses, monitoring thresholds, incident paths, and manual fallbacks.",
    evidence: ["Remediation plan", "Contract changes", "Control test results", "Updated playbooks"],
  },
  {
    id: "run-it",
    title: "4. Run the operating rhythm",
    description:
      "Move from a one-off paper exercise to quarterly reporting, incident-triggered reassessment, and board-visible metrics that stay current.",
    evidence: ["Quarterly dashboard", "Incident review cadence", "Board minutes", "Reassessment schedule"],
  },
];

export const boardQuestions: BoardQuestion[] = [
  {
    question: "Which AI use cases are material enough to require board-level visibility?",
    answerFrame:
      "Answer with the inventory, criticality tiers, decision impact, and the approval threshold that makes a case visible to the board.",
  },
  {
    question: "Where is the evidence that AI does not break our operational resilience or information security controls?",
    answerFrame:
      "Point to the test pack, the incident log, the vendor assurances, and the contingency path that keeps the service alive.",
  },
  {
    question: "If the vendor fails or the model goes wrong, what is the manual path?",
    answerFrame:
      "Show the fallback process, the recovery trigger, who can invoke it, and how customers keep being served.",
  },
  {
    question: "How do we know our directors and accountable persons can still challenge management on AI?",
    answerFrame:
      "Show the skills matrix, training record, board papers, challenge questions, and the follow-through on actions.",
  },
  {
    question: "What changed since the last board pack?",
    answerFrame:
      "Bring a delta report: new use cases, incidents, concentration shifts, control failures, remediation status, and open risks.",
  },
];
