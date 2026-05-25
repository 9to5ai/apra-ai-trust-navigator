import assert from "node:assert/strict";
import test from "node:test";
import { DossierSchema, HypothesisSchema, SourceSchema } from "../lib/schemas";

test("source schema accepts a minimal open-source research artifact", () => {
  const source = SourceSchema.parse({
    id: "S0001",
    title: "Continuous AI Assurance",
    authors: ["Researcher"],
    url: "https://example.com/source",
    sourceType: "paper",
    trustRating: 0.8,
    relevanceScore: 0.7,
    discoveredAt: "2026-05-25T00:00:00.000Z",
  });

  assert.equal(source.id, "S0001");
});

test("hypothesis schema constrains confidence and priority", () => {
  assert.throws(() =>
    HypothesisSchema.parse({
      id: "H0001",
      statement: "AI trust requires operational evidence.",
      status: "active",
      confidence: 1.2,
      priority: 0.8,
      createdAt: "2026-05-25T00:00:00.000Z",
      updatedAt: "2026-05-25T00:00:00.000Z",
    }),
  );
});

test("dossier schema validates a complete nightly output", () => {
  const source = {
    id: "S0001",
    title: "Continuous AI Assurance",
    authors: ["Researcher"],
    url: "https://example.com/source",
    sourceType: "paper",
    trustRating: 0.8,
    relevanceScore: 0.7,
    discoveredAt: "2026-05-25T00:00:00.000Z",
  };
  const hypothesis = {
    id: "H0001",
    statement: "AI trust requires operational evidence.",
    status: "active",
    confidence: 0.5,
    priority: 0.8,
    createdAt: "2026-05-25T00:00:00.000Z",
    updatedAt: "2026-05-25T00:00:00.000Z",
  };

  const dossier = DossierSchema.parse({
    date: "2026-05-25",
    runStartedAt: "2026-05-25T00:00:00.000Z",
    runCompletedAt: "2026-05-25T00:01:00.000Z",
    startingHypothesis: hypothesis,
    sourcesRead: [source],
    notes: [
      {
        sourceId: "S0001",
        claim: "Operational evidence matters.",
        implication: "Assurance should be continuous.",
        limitation: "Needs replication.",
      },
    ],
    synthesis: "Evidence supports the working hypothesis.",
    hypothesisUpdates: [],
    newHypotheses: [],
    nextSearchPlan: ["continuous AI assurance"],
    unresolvedQuestions: ["Which evidence survives deployment drift?"],
  });

  assert.equal(dossier.sourcesRead.length, 1);
});
