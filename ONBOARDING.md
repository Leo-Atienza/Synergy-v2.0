# Teammate onboarding — how to read the Synergy-v2.0 brain

Everything we know about this project — the idea, the research, the demo plan, the numbers — lives in this one repo. This page gets you from "I got an invite" to "I can read all of it" in a few minutes. **No coding required for the reading path.**

New here? The 5-minute version of the whole project is **[`tide/docs/tide-team-brief.pdf`](tide/docs/tide-team-brief.pdf)** (plain English, no tech background needed). Read that first; come back here when you want the full brain.

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
2. Read the brief: click into [`tide/docs/tide-team-brief.pdf`](tide/docs/tide-team-brief.pdf) (GitHub previews PDFs in-page).
3. Open the brain: click the folder **`Synergy-v2.0 — Hackathon Brain/`**, then read in this order:
   - `README.md` — what the brain is and how it's organized
   - `index.md` — the live map of everything (the "you are here")
   - `hot.md` — the most recently touched notes (what's active right now)
4. From `index.md`, click any link to jump around. GitHub renders Markdown nicely; the only thing that won't work here is Obsidian-style `[[double-bracket]]` links (they show as plain text). If you want those clickable, use Path 2.

That's it — you can read 100% of the project this way.

## Path 2 — Open it in Obsidian (the full linked experience) · *optional*

Choose this if you want the graph view, working backlinks, and clickable `[[wikilinks]]`. You'll have a local copy of the repo and open the vault folder in Obsidian.

**Easiest (no command line) — GitHub Desktop:**
1. Install [GitHub Desktop](https://desktop.github.com/) and sign in (it handles private-repo access for you — no tokens to fumble).
2. **File → Clone repository → Leo-Atienza/Synergy-v2.0**, pick a folder, Clone.
3. Install [Obsidian](https://obsidian.md/) (free).
4. In Obsidian: **Open folder as vault** → navigate into the repo you just cloned and **select the `Synergy-v2.0 — Hackathon Brain/` subfolder** — *not* the repo root. (This is the #1 mistake: the vault is a folder **inside** the repo.)
5. Done — graph view, backlinks, and wikilinks all work now.

**If you're comfortable with the command line:**
```bash
git clone https://github.com/Leo-Atienza/Synergy-v2.0.git
# HTTPS will ask you to sign in to GitHub (private repo)
```
Then open the `Synergy-v2.0 — Hackathon Brain/` subfolder as a vault in Obsidian (step 4 above).

> **To pull updates:** GitHub Desktop → *Fetch origin*, or `git pull` on the command line. The brain changes daily during the build.

---

## What's where

| You want… | Open |
|---|---|
| Everything about the Tide candidate (docs + code) | [`tide/`](tide/) — start at its README |
| The whole idea in 5 minutes (plain English) | [`tide/docs/tide-team-brief.pdf`](tide/docs/tide-team-brief.pdf) |
| The thinking brain (ideas, research, design, daily log) | `Synergy-v2.0 — Hackathon Brain/` → start at `index.md` |
| Hard event facts (rules, themes, timeline, deadlines) | [`docs/`](docs/) — `seneca-hackathon-context.md`, `themes.md`, `timeline.md` |
| The deep research dossier (Ontario energy, past winners, sponsors) | [`docs/research-dossier.md`](docs/research-dossier.md) |
| Why we make "weird on purpose" design calls | [`docs/uniqueness-principles.md`](docs/uniqueness-principles.md) |
| Machine-read event state | [`.hackathon/event.yaml`](.hackathon/event.yaml) |

## Where to start reading (any path)

1. **[`tide/docs/tide-team-brief.pdf`](tide/docs/tide-team-brief.pdf)** — the project in plain English.
2. **`Synergy-v2.0 — Hackathon Brain/index.md`** — the map of the brain.
3. **`Synergy-v2.0 — Hackathon Brain/hot.md`** — what's active this week.

## Stuck?

- **Repo shows 404** → you haven't accepted the invite yet (Step 0), or you're signed into the wrong GitHub account.
- **Clone asks for a password and rejects it** → GitHub killed password auth. Use GitHub Desktop (easiest), or a [Personal Access Token](https://github.com/settings/tokens) in place of the password.
- **Obsidian shows an empty/odd vault** → you opened the repo root instead of the `Synergy-v2.0 — Hackathon Brain/` subfolder.
- Anything else → drop it in the team channel.
