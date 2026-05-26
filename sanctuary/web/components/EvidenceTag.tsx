// The honesty evidence tag: icon + text, never colour alone. Pure component
// (no hooks) so it renders in both the RSC legend and the client detail panel.

import type { ReactNode } from "react";
import type { Verification } from "@/lib/hubs";
import { EVIDENCE_ICON } from "@/components/icons";

const LABEL: Record<Verification, string> = {
  verified: "verified",
  modelled: "modelled",
  pending: "pending",
};

export function EvidenceTag({ tag, children }: { tag: Verification; children?: ReactNode }) {
  const Icon = EVIDENCE_ICON[tag];
  return (
    <span className={`tag tag-${tag}`}>
      <Icon size={13} />
      {children ?? LABEL[tag]}
    </span>
  );
}
