import { z } from "zod";

export const SourceSchema = z.object({
  id: z.string(),
  title: z.string(),
  authors: z.array(z.string()),
  venue: z.string().optional(),
  publishedAt: z.string().optional(),
  url: z.string().url(),
  doi: z.string().optional(),
  sourceType: z.enum([
    "paper",
    "preprint",
    "standard",
    "regulator",
    "tool",
    "dataset",
    "benchmark",
    "other",
  ]),
  trustRating: z.number().min(0).max(1),
  relevanceScore: z.number().min(0).max(1),
  summary: z.string().optional(),
  discoveredAt: z.string(),
});

export const HypothesisSchema = z.object({
  id: z.string(),
  statement: z.string(),
  status: z.enum(["active", "strengthened", "weakened", "retired", "new"]),
  confidence: z.number().min(0).max(1),
  priority: z.number().min(0).max(1),
  createdAt: z.string(),
  updatedAt: z.string(),
  parentId: z.string().optional(),
  rationale: z.string().optional(),
});

export const ResearchNoteSchema = z.object({
  sourceId: z.string(),
  claim: z.string(),
  implication: z.string(),
  limitation: z.string(),
});

export const HypothesisUpdateSchema = z.object({
  hypothesisId: z.string(),
  previousConfidence: z.number().min(0).max(1),
  nextConfidence: z.number().min(0).max(1),
  status: z.enum(["active", "strengthened", "weakened", "retired", "new"]),
  rationale: z.string(),
});

export const DossierSchema = z.object({
  date: z.string(),
  runStartedAt: z.string(),
  runCompletedAt: z.string(),
  startingHypothesis: HypothesisSchema,
  sourcesRead: z.array(SourceSchema),
  notes: z.array(ResearchNoteSchema),
  synthesis: z.string(),
  hypothesisUpdates: z.array(HypothesisUpdateSchema),
  newHypotheses: z.array(HypothesisSchema),
  nextSearchPlan: z.array(z.string()),
  unresolvedQuestions: z.array(z.string()),
});

export const TopicMapSchema = z.object({
  updatedAt: z.string().nullable(),
  clusters: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      sourceIds: z.array(z.string()),
      hypothesisIds: z.array(z.string()),
    }),
  ),
  edges: z.array(
    z.object({
      from: z.string(),
      to: z.string(),
      relationship: z.string(),
    }),
  ),
});
