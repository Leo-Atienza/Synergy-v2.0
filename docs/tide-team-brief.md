# Tide — what we're building, in plain English

*A brief for the whole team. No tech background needed. For the Seneca Energy Hackathon 2026 — we lock our idea tomorrow (May 22), so please skim this before then.*

---

> **The hook:** In Ontario, the *exact same* electricity costs about **4 cents at midnight and 39 cents at dinnertime.** Almost nobody notices — so they overpay every single day. **Tide is a small plug that quietly waits for the cheap hours and runs your stuff then.** You plug it in once and forget it.

## If you read nothing else

- **What it is:** a ~$15 smart plug + a simple app that runs your car charger, air conditioner, or appliances *only* when electricity is cheapest (and cleanest).
- **Why it's good:** it saves real money — hundreds of dollars a year — completely automatically, by using a discount Ontario already offers but almost nobody actually captures.
- **Why it wins the hackathon:** at the demo, we put a real plug on the table and a light switches **ON** the second the cheap hour hits. Every other team will show a chart on a screen. We show a thing that *does something*.

---

## The problem (why this is worth building)

Ontario offers an electricity plan called **Ultra-Low Overnight**. Overnight it's dirt cheap — about **4¢** per unit. But here's the catch: in the late afternoon and evening (4–9pm, when everyone's home cooking and running the AC) it jumps to about **39¢** — almost **ten times more**, and nearly double the normal rate.

So the plan is a fantastic deal *only if you actually shift your big electricity use to the middle of the night.* And that's the problem: life gets in the way. You're not going to run the dishwasher at 2am or babysit your car charger. So people sign up for the plan, forget to shift, get hammered by the 39¢ evenings — and end up **paying more** than before.

**The discount is real. Almost nobody captures it. That gap is the entire opportunity.** Tide captures it for you, automatically.

---

## What Tide is

Think of Tide as a **roommate who only ever charges the car and runs the laundry at the cheapest minute of the night — and never once forgets.**

You don't change your life. You don't watch the clock. You plug your thing into Tide, tell it "I need this done by 7am," and walk away. It handles the rest.

---

## How it works (the whole thing, simply)

1. **You get a small smart plug** (about $15 — see the box below) and plug your car charger / window AC / dehumidifier into it.
2. **Tide checks two things every hour:** how *expensive* power is right now, and how *dirty* it is right now. (Ontario publishes both, for free, every few minutes.)
3. **It finds the best window tonight** — the cheapest, cleanest stretch that still gets your job finished by the time you need it.
4. **It switches the plug on at that time, and off when done.** You did nothing.

> **What's a smart plug?** A little block that sits between your wall outlet and your device. It can turn that device's power on and off on command — normally from a phone app, but in our case from Tide automatically. Costs $15–25 at any electronics store.

---

## What it saves (real numbers, not guesses)

If you shift a load off the pricey 4–9pm window to overnight on the Ultra-Low Overnight plan:

| What you plug in | Saves about |
|---|---|
| Electric car (full charge) | **~$1,760 / year** |
| Electric car (nightly top-up) | ~$790 / year |
| Dehumidifier | ~$320 / year |
| Window air conditioner | ~$250 / year |
| Dishwasher | ~$140 / year |

**The $15 plug pays for itself in days** on an electric car, **weeks** on anything else. (For one EV charge: ~$2.20 down to ~$0.34 — about **85% off**.)

---

## The 10-second moment that wins the room

Picture the judges' table. We set down a real smart plug with a lamp (standing in for "your dishwasher"). On the screen behind it, the clock shows **6pm** — the priciest hour — and the word **WAIT**. Then we fast-forward to **11pm**, the cheap hour clicks in, and **the lamp turns on, right there in front of them.** A counter ticks up: *money saved, pollution avoided.*

Judges see 30 projects in an afternoon. They remember **one** thing about each — if they remember anything. Ours is "the one where the plug turned the light on by itself." That's the whole strategy: be the team that brought something physical that *acted*, not another dashboard.

---

## What we've already proven (this is not a maybe)

We built a working test version this week, using **real Ontario electricity data**. Confirmed:

- It pulls Ontario's live grid information correctly.
- It correctly decides to wait until late night to charge an electric car — cutting the cost by **85%**.
- The money math is correct and is automatically double-checked.
- There's already a **working demo screen** with the big **WAIT / GO NOW** display.

**Translation for the team:** the hard, risky, "will this even work" part is *done*. What's left is polish, design, and telling the story well — which is where the rest of us come in.

---

## What's left — and how you can help (no coding required)

- **Design & the look:** make the one screen and the slide deck beautiful. (We have a color scheme started.)
- **The pitch:** write and rehearse the 60-second pitch. Lead with the "4¢ vs 39¢" hook.
- **The demo video:** film the lamp turning on. First 5 seconds = the wow.
- **The story / research:** find a real Ontario family or renter the savings would matter to — names and specifics beat generic claims.
- **Buy + test the plug:** someone grabs a ~$20 TP-Link Kasa plug so we can rehearse with real hardware.
- **README & submission page:** make it read well to a non-engineer judge.

If any of that sounds like you, call it in our channel.

---

## The honest risks (so nothing surprises us)

1. **The plug needs to work on the venue's Wi-Fi.** We chose a type that works without internet, and we'll always have the on-screen version as a backup if the hardware acts up.
2. **The "cleaner" angle is strongest in summer.** In a deep winter cold snap, overnight power isn't *much* cleaner — but it's *always* about 10× cheaper. So we **lead with the money** and mention the cleaner-energy benefit second.

---

## The other two ideas on the table (we pick one tomorrow)

Tide is our front-runner, but for fairness here are the alternates so everyone can weigh in:

- **Rooftop Roll Call** — a map naming Toronto's 100 best big rooftops (Costcos, schools) that *should* have solar panels but don't, with "if we built these, it'd power 31,000 homes." Strong, but it points at potential rather than saving energy today.
- **Backwards Hour** — an app that turns saving energy into a daily "put your phone down for an hour" wellness ritual, timed to when the grid is dirtiest. Memorable, but harder to prove it actually works on stage.

Tide is the only one of the three that **saves real, measurable money and energy on the spot** — which is why it's the recommendation.

---

## Decisions we should make together

1. **The name.** "Tide" (power flows in and out like a tide) is the safe pick. A bolder option: just call it **"3.9"** — the cheap overnight rate, as the brand. Opinions welcome.
2. **Which appliance do we show?** An electric-car charger has the biggest savings; a window AC or dehumidifier is more relatable to everyone. Leaning toward the relatable one.
3. **Lead with money or the planet?** Recommendation: money first (it's what makes people act), planet second.

---

## Want to see it?

There's a working demo screen already. If you're at a computer with the project open, the technical teammate can run it in about a minute — ask Leo. You'll see the live Ontario grid reading and the WAIT / GO NOW screen.

---

## Mini-glossary (the only terms you'll hear)

- **The grid** — the province-wide electricity system everything plugs into.
- **kWh ("kilowatt-hour")** — the unit your hydro bill charges by. Think of it as one "scoop" of electricity. We mostly just talk in dollars instead.
- **Ultra-Low Overnight (ULO)** — the Ontario plan with the cheap-overnight / pricey-evening split. The thing Tide is built around.
- **Smart plug** — the $15 gadget that turns a device on/off on command.
- **Carbon intensity / "dirty vs clean" power** — how much pollution the electricity is causing *right now*. Overnight is usually cleaner because it's mostly nuclear, water, and wind; evenings burn more gas.
- **Gas peaker** — a backup gas power plant Ontario switches on at the busy evening hours. It's why dinnertime power is both pricier and dirtier.

---

*Questions? Drop them in the team channel. Idea-lock is tomorrow — please skim and react so we go in aligned.*
