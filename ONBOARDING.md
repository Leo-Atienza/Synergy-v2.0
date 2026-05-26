# Teammate onboarding — start here

Our project is **Sanctuary**: it ranks trusted community buildings in Peel as candidate resilience hubs — the libraries, recreation centres, and faith buildings to equip with cooling, solar, and battery support *before* the next heat wave or outage.

Everything we know — the idea, the data, the demo plan, the numbers — lives in this one repo. This page gets you from "I got an invite" to "I can read all of it" in a few minutes. **No coding required for the reading path.**

New here? The 5-minute version is **[`sanctuary/docs/sanctuary-introduction-faq.md`](sanctuary/docs/sanctuary-introduction-faq.md)** (plain English, no tech background needed). Read that, then come back here for the rest.

---

## Step 0 — Accept the invite (you can't skip this)

This repo is **private**. Until you accept your collaborator invite, you'll see a 404 and nothing else.

1. Check the email from GitHub: subject *"Leo-Atienza invited you to collaborate on Leo-Atienza/Synergy-v2.0"*. **Look in spam / Promotions** — it hides there.
2. Or just open **<https://github.com/Leo-Atienza/Synergy-v2.0/invitations>** while signed in to the GitHub account that was invited.
3. Click **Accept invitation**.
4. If there's no email and the link 404s, your invite may have expired — message Leo with your **GitHub username** and he'll re-send.

Once you can see the repo at <https://github.com/Leo-Atienza/Synergy-v2.0>, pick a path below.

---

## Path 1 — Read in your browser (zero install) · *recommended for everyone*

No tools to install. Everything renders right on github.com.

1. Open the repo: <https://github.com/Leo-Atienza/Synergy-v2.0>
2. Open the project: click into the **[`sanctuary/`](sanctuary/)** folder and read in this order:
   - [`sanctuary/README.md`](sanctuary/README.md) — what Sanctuary is and what's in the folder
   - [`sanctuary/docs/sanctuary-introduction-faq.md`](sanctuary/docs/sanctuary-introduction-faq.md) — the plain-English intro + FAQ
   - [`sanctuary/docs/storymap-and-data-guide.md`](sanctuary/docs/storymap-and-data-guide.md) — how the ArcGIS StoryMap and data fit together
3. Want the demo plan and the judge answers? [`sanctuary/docs/storymap-script.md`](sanctuary/docs/storymap-script.md), [`sanctuary/docs/video-script.md`](sanctuary/docs/video-script.md), [`sanctuary/docs/judge-qa.md`](sanctuary/docs/judge-qa.md).

That's it — you can read 100% of the active project this way. GitHub renders Markdown nicely; the only thing that won't render is Obsidian-style `[[double-bracket]]` links in the thinking vault (Path 2 makes those clickable).

## Path 2 — Open the thinking vault in Obsidian · *optional, for the curious*

The repo also carries a working **Obsidian vault** — `Synergy-v2.0 — Hackathon Brain/` — with the full thinking trail: how ideas were scored, daily build logs, design notes, and session handoffs. **You don't need it to work on Sanctuary.** Open it only if you want the backstory with graph view and clickable `[[wikilinks]]`.

**Easiest (no command line) — GitHub Desktop:**
1. Install [GitHub Desktop](https://desktop.github.com/) and sign in (it handles private-repo access for you — no tokens to fumble).
2. **File → Clone repository → Leo-Atienza/Synergy-v2.0**, pick a folder, Clone.
3. Install [Obsidian](https://obsidian.md/) (free).
4. In Obsidian: **Open folder as vault** → navigate into the repo you just cloned and **select the `Synergy-v2.0 — Hackathon Brain/` subfolder** — *not* the repo root. (This is the #1 mistake: the vault is a folder **inside** the repo.)
5. Done — graph view, backlinks, and wikilinks all work now. Start at the vault's `index.md`.

**If you're comfortable with the command line:**
```bash
git clone https://github.com/Leo-Atienza/Synergy-v2.0.git
# HTTPS will ask you to sign in to GitHub (private repo)
```
Then open the `Synergy-v2.0 — Hackathon Brain/` subfolder as a vault in Obsidian (step 4 above).

> **To pull updates:** GitHub Desktop → *Fetch origin*, or `git pull` on the command line. The repo changes daily during the build.

---

## What's where

| You want… | Open |
|---|---|
| **The project — Sanctuary** (data, StoryMap script, methods, judge Q&A) | [`sanctuary/`](sanctuary/) — start at its README |
| The whole idea in 5 minutes (plain English) | [`sanctuary/docs/sanctuary-introduction-faq.md`](sanctuary/docs/sanctuary-introduction-faq.md) |
| The runnable web map (Next.js) | [`sanctuary/web/`](sanctuary/web/) |
| The candidate-building data + scoring | [`sanctuary/data/`](sanctuary/data/) |
| Hard event facts (rules, themes, timeline, deadlines) | [`docs/`](docs/) — `seneca-hackathon-context.md`, `themes.md`, `timeline.md` |
| The deep research dossier (Ontario energy, past winners, sponsors) | [`docs/research-dossier.md`](docs/research-dossier.md) |
| Why we make "weird on purpose" design calls | [`docs/uniqueness-principles.md`](docs/uniqueness-principles.md) |
| The locked scope + demo moment | [`.hackathon/scope.md`](.hackathon/scope.md) |
| The thinking vault (ideas, research, daily log, handoffs) | `Synergy-v2.0 — Hackathon Brain/` → start at `index.md` (Path 2) |
| **Cut earlier idea** (Valley/Tide) — kept as a fallback, *not* what we're building | [`archive/`](archive/) |

## Where to start reading (any path)

1. **[`sanctuary/docs/sanctuary-introduction-faq.md`](sanctuary/docs/sanctuary-introduction-faq.md)** — the project in plain English.
2. **[`sanctuary/README.md`](sanctuary/README.md)** — what's in the project folder.
3. **[`.hackathon/scope.md`](.hackathon/scope.md)** — exactly what we're building and the 10-second demo moment.

## Stuck?

- **Repo shows 404** → you haven't accepted the invite yet (Step 0), or you're signed into the wrong GitHub account.
- **Clone asks for a password and rejects it** → GitHub killed password auth. Use GitHub Desktop (easiest), or a [Personal Access Token](https://github.com/settings/tokens) in place of the password.
- **Obsidian shows an empty/odd vault** → you opened the repo root instead of the `Synergy-v2.0 — Hackathon Brain/` subfolder.
- **You found a folder called `archive/`** → that's the earlier *Valley/Tide* idea we cut. Ignore it for the build; it's kept only as a fallback.
- Anything else → drop it in the team channel.
