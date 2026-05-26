import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { z } from "zod";
import {
  PLANNING_ASSISTANT_DISCLAIMER,
  PLANNING_ASSISTANT_LABEL,
  buildPlanningPrompt,
  candidatePlanningContextSchema,
  fallbackChecklistFor,
  validatePlanningChecklist,
} from "@/lib/planning-assistant";

export const runtime = "nodejs";

const requestSchema = z.object({
  candidate: candidatePlanningContextSchema,
});

function parseJsonObject(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) {
      throw new Error("Gemini did not return JSON.");
    }
    return JSON.parse(match[0]);
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid public candidate context." }, { status: 400 });
  }

  const { candidate } = parsed.data;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      checklist: fallbackChecklistFor(candidate),
      mode: "static-fallback",
      reason: "GEMINI_API_KEY is not configured.",
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL ?? "gemini-2.5-flash",
      contents: buildPlanningPrompt(candidate),
      config: {
        temperature: 0.2,
        responseMimeType: "application/json",
      },
    });

    const raw = parseJsonObject(response.text ?? "{}");
    const checklist = validatePlanningChecklist({
      ...(raw as Record<string, unknown>),
      candidate_rank: candidate.rank,
      candidate_name: candidate.name,
      disclaimer: PLANNING_ASSISTANT_DISCLAIMER,
      ai_label: PLANNING_ASSISTANT_LABEL,
    });

    return NextResponse.json({ checklist, mode: "live-gemini" });
  } catch (error) {
    console.error("planning-checklist route fell back", error);
    return NextResponse.json({
      checklist: fallbackChecklistFor(candidate),
      mode: "static-fallback",
      reason: "Gemini output was unavailable or failed the no-overclaim gate.",
    });
  }
}
