export type SourceType =
  | "paper"
  | "preprint"
  | "standard"
  | "regulator"
  | "tool"
  | "dataset"
  | "benchmark"
  | "other";

export type HypothesisStatus =
  | "active"
  | "strengthened"
  | "weakened"
  | "retired"
  | "new";

export type Source = {
  id: string;
  title: string;
  authors: string[];
  venue?: string;
  publishedAt?: string;
  url: string;
  doi?: string;
  sourceType: SourceType;
  trustRating: number;
  relevanceScore: number;
  summary?: string;
  discoveredAt: string;
};

export type ResearchNote = {
  sourceId: string;
  claim: string;
  implication: string;
  limitation: string;
};

export type Hypothesis = {
  id: string;
  statement: string;
  status: HypothesisStatus;
  confidence: number;
  priority: number;
  createdAt: string;
  updatedAt: string;
  parentId?: string;
  rationale?: string;
};

export type HypothesisUpdate = {
  hypothesisId: string;
  previousConfidence: number;
  nextConfidence: number;
  status: HypothesisStatus;
  rationale: string;
};

export type Dossier = {
  date: string;
  runStartedAt: string;
  runCompletedAt: string;
  startingHypothesis: Hypothesis;
  sourcesRead: Source[];
  notes: ResearchNote[];
  synthesis: string;
  hypothesisUpdates: HypothesisUpdate[];
  newHypotheses: Hypothesis[];
  nextSearchPlan: string[];
  unresolvedQuestions: string[];
};

export type TopicMap = {
  updatedAt: string | null;
  clusters: Array<{
    id: string;
    label: string;
    sourceIds: string[];
    hypothesisIds: string[];
  }>;
  edges: Array<{
    from: string;
    to: string;
    relationship: string;
  }>;
};
