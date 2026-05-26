# Valley — simple introduction and FAQ

> **Short version:** Valley helps renters use Ontario's cheapest electricity hours without staying awake at 3 a.m. It combines a map of energy burden in Peel with a smart plug that can run a small appliance when power is cheap.

Valley used to be called **Tide** in some files and code. The project idea is the same. The judge-facing name is **Valley**.

---

## 1. What It Is

Valley is a hackathon prototype for low-income renters in Ontario.

It has two parts:

1. **A map of Peel Region**
   - The map shows which postal-code areas have higher energy burden.
   - It helps a utility see where renters need support.
   - It also says which kind of support makes sense: a smart plug, a policy fix, or a retrofit.

2. **A smart plug demo**
   - The plug can turn a small appliance on and off.
   - Valley tells the plug when to run.
   - The goal is to run the appliance during Ontario's cheap overnight rate.

The core idea is simple:

**Ontario has a very cheap overnight electricity rate, but many renters cannot use it easily. Valley helps show who is locked out and gives some renters an automatic way in.**

---

## 2. The Problem

Ontario has an electricity plan called **Ultra-Low Overnight**, or **ULO**.

Under this plan:

- Overnight power can cost about **3.9 cents per kWh**.
- On-peak power can cost about **39.1 cents per kWh**.

That is about a **10x price gap**.

This sounds great, but there is a catch.

To get the cheap price, you need to use power late at night. Many renters cannot do that. They may be asleep, working shifts, caring for kids, or living in a building where they cannot choose the electricity plan at all.

So the cheapest rate can become:

- **A trap** for renters who can choose ULO but cannot shift their power use.
- **A locked door** for renters in sub-metered buildings, where the landlord or building owner chooses the plan.

Valley is built around that tension.

---

## 3. How It Works Today

The current hackathon prototype works like this:

1. **Valley reads real energy data**
   - It uses Ontario electricity rates from the Ontario Energy Board.
   - It uses grid data from IESO.
   - It uses census data from Statistics Canada for the map.

2. **Valley checks the allowed time window**
   - Example: a window air conditioner can run any time between 6 p.m. and 7 a.m.
   - Valley checks each possible start time.

3. **Valley picks the cheapest block**
   - If the appliance needs 5 hours, Valley finds the cheapest 5-hour block.
   - On ULO, that usually means overnight.

4. **Valley shows WAIT or GO**
   - If the current hour is expensive, the screen says **WAIT**.
   - If the cheap window has arrived, the screen says **GO**.

5. **The plug can turn on**
   - In the hardware demo, a Shelly smart plug can switch on a lamp.
   - The lamp stands in for a renter appliance, like a window AC or dishwasher.

The demo moment is:

**At dinnertime, the screen says WAIT at 39.1 cents. At 3 a.m., it flips to GO at 3.9 cents, and the device turns on.**

---

## 4. How It Will Work as a Real Product

In a finished version, Valley would be easier for a household to use.

The user flow would look like this:

1. A renter gets a supported smart plug.
2. They plug in a shiftable device, such as a window AC, dehumidifier, or dishwasher.
3. They tell Valley two things:
   - how long the device needs to run;
   - when it must be finished.
4. Valley checks the rate plan and grid data.
5. Valley turns the plug on during the cheapest safe window.
6. Valley shows a simple savings record.

The renter does not need to watch the clock.

The map part would help utilities and energy programs decide where to send help:

- Some areas can use the plug.
- Some areas need landlord or policy changes.
- Some areas need building upgrades instead.

That is important because Valley should not pretend one gadget solves every renter's problem.

---

## 5. How the Shelly Plug Works

The recommended plug is a **Shelly Plug US Gen4**.

We recommend Shelly because it can work locally. That means our code can talk to the plug over the same Wi-Fi network without using Shelly's cloud.

In simple words:

- The plug joins Wi-Fi.
- The plug gets an address, like `192.168.1.50`.
- Our software sends a normal web request to that address.
- The plug turns on or off.

For example:

```txt
Turn ON:
http://<plug-ip>/rpc/Switch.Set?id=0&on=true

Turn OFF:
http://<plug-ip>/rpc/Switch.Set?id=0&on=false

Check status:
http://<plug-ip>/rpc/Switch.GetStatus?id=0
```

This means we do **not** need to modify Shelly's app.

We also do **not** need to upload our code into Shelly's software for the hackathon demo.

Our code can live on:

- a laptop;
- a Raspberry Pi;
- a mini PC;
- a small local server.

That computer decides when power is cheap. Then it tells the Shelly plug what to do.

---

## 6. Can We Plug Our Own Code Into Shelly?

Yes, but the easiest way is to keep our code outside Shelly.

There are three levels:

### Level 1 — Simple HTTP control

This is what we use for the prototype.

Our code calls Shelly's local HTTP API:

```ts
await fetch("http://192.168.1.50/rpc/Switch.Set?id=0&on=true");
```

This is enough to turn the plug on.

### Level 2 — A small Valley agent

For a real product, we could run a small Valley agent on a home computer or Raspberry Pi.

The agent would:

- read prices;
- read grid data;
- choose the best time;
- call the Shelly plug;
- save the result.

This is the cleanest path.

### Level 3 — Shelly scripting or MQTT

Shelly devices also support more advanced smart-home patterns, such as local automation and MQTT.

We do not need that for the hackathon.

If we used it later, we would still keep the main Valley logic outside the plug. The plug should stay simple: it switches power. Valley decides when.

---

## 7. What Data Valley Uses

Valley uses real public data where possible.

The main sources are:

- **Ontario Energy Board**
  - electricity rates;
  - ULO prices.

- **IESO**
  - Ontario grid data;
  - fuel mix;
  - measured hourly electricity use by FSA.

- **Statistics Canada**
  - income;
  - renter share;
  - apartment share;
  - population by FSA.

- **Peel FSA boundaries**
  - map shapes for postal-code areas.

This matters because the hackathon submission should not look like fake AI output. Valley's strongest defense is: **the map and numbers come from real public sources.**

---

## 8. How It Can Scale

Valley can scale in steps.

### Step 1 — One demo

One laptop. One plug. One lamp. One map of Peel.

This is enough for the hackathon video.

### Step 2 — A small pilot

A utility or housing partner gives plugs to a small group of renters who can actually use ULO.

The pilot measures:

- how much money renters save;
- whether the plug works reliably;
- which appliances are worth shifting;
- which buildings need policy help instead.

### Step 3 — Program targeting

The map becomes useful even before many plugs exist.

A utility can use it to decide:

- where to offer plugs;
- where to talk to landlords;
- where building upgrades matter more.

### Step 4 — Grid value

At larger scale, many small plugs can act like one flexible load.

Example:

- 1,000 homes shifting about 1 kW each is about 1 MW.
- 50,000 to 100,000 homes becomes grid-meaningful.

This is a long-term vision, not the hackathon claim.

For the hackathon, we should say:

**Valley proves the loop and shows the targeting map. Scaling comes later through utility programs.**

---

## 9. How Viable Is This for the Hackathon?

Valley is viable for the hackathon because the hardest technical parts already work.

What is already built:

- the rate logic;
- the carbon math;
- the optimizer that picks the best time;
- the WAIT / GO screen;
- the Peel map;
- the burden score;
- the intervention labels;
- the Shelly driver;
- the plug self-test script;
- the fallback sample day.

What still needs care:

- the physical Shelly plug must be bought and tested;
- the video must be recorded clearly;
- the old Tide name must be changed where judges see it;
- the map must stay honest about who the plug cannot help;
- the team must avoid using the big EV savings number in the renter pitch.

The idea is hackathon-strong because it has:

- a clear problem;
- real public data;
- a visual map;
- a simple WAIT / GO demo;
- a physical plug moment if hardware lands;
- honest limits.

The main risk is not the algorithm. The main risk is presentation: we must explain it simply and avoid overclaiming.

---

## 10. What Is Real and What Is Still Prototype?

### Real today

- Ontario rates are real.
- The 3.9-cent vs 39.1-cent price gap is real.
- The optimizer works.
- The map uses real public data.
- The Shelly control path is coded.
- The screen-only WAIT / GO demo works without hardware.

### Prototype today

- The app is not a polished consumer app.
- The load is still mostly pre-set.
- The plug setup is still technical.
- The map score is a first version, not a final policy model.
- The physical plug still needs live testing.

### Honest limit

Valley does not reduce total electricity use by itself.

It shifts **when** power is used.

That saves money when prices change by time of day. It can also reduce carbon when the shifted-away hour is dirtier than the overnight hour.

---

## 11. Main Risks

| Risk | Simple answer |
|---|---|
| The plug fails during the demo | Use the screen-only WAIT / GO version. The lamp is a bonus. |
| A judge asks if this helps all renters | No. The map shows who the plug helps and who needs policy or retrofit help. |
| Savings look too small | For renters, the honest number is about `$30-130/year`. The bigger value is targeting and fairness. |
| The project sounds anti-utility | It is not. It helps utilities find where support should go. |
| Carbon savings are challenged | Lead with cost. Carbon is a secondary benefit and depends on the hour. |
| Shelly setup takes too long | Pre-configure the plug and use a travel router or phone hotspot for a private LAN. |

---

## 12. FAQ

### Is Valley the same as Tide?

Yes. Tide was the earlier name. Valley is the judge-facing name.

### Why the name Valley?

The name points to **valley filling**, a grid idea where demand moves from peak hours into low-demand hours. In plain English: move use away from the busy evening and into the quiet overnight.

### Who is Valley for?

The main user story is a renter in Ontario who can choose a time-of-use rate and has a small appliance worth shifting.

Examples:

- window AC;
- dehumidifier;
- dishwasher;
- small space heater;
- pool pump.

### Who is it not for?

It does not help every renter.

It does not directly help:

- tenants in buildings where the landlord controls the electricity plan;
- homes with no shiftable appliance;
- hardwired 240 V loads;
- central AC;
- renters without reliable Wi-Fi.

That is why the map matters.

### Why not just tell people to run appliances at night?

Because people forget. Also, asking a tired person to wake up at 3 a.m. is not a fair design.

Valley automates the timing.

### Does Valley save energy?

Not directly.

It usually uses the same amount of energy at a better time.

It saves money because the rate is cheaper overnight. It can save carbon when the evening hour uses more gas power than the overnight hour.

### How much money can a renter save?

For the renter story, use the honest range:

**about `$30-130/year`**, depending on the appliance.

Do not lead with the EV savings number. That number is real for EV charging, but it is not the right claim for low-income renters.

### Why does the map use FSAs?

An FSA is the first three characters of a postal code, like `L4X`.

FSAs are small enough to feel local and large enough to work well in a hackathon map. They also match useful public data.

### Why Peel?

Peel fits the event and the sponsor context.

It includes Mississauga, Brampton, and Caledon. It is also in Alectra's service area, which makes the utility story stronger.

### Can the plug work without the internet?

Yes, for local control.

The laptop and Shelly plug need to be on the same Wi-Fi network. Valley can send local commands to the plug even if the wider internet is not available.

Live grid data needs the internet, but the demo has a fallback sample day.

### Do we need Shelly's cloud?

No.

For the demo, turn Shelly Cloud off and use local control.

### Do we need to edit Shelly's firmware?

No.

We only call Shelly's local API.

### Can another app control the same plug?

Yes, if it can call the Shelly API and is on the same network.

But for reliability, one controller should be in charge during a demo.

### Can we use Kasa instead of Shelly?

Maybe, but Shelly is safer.

Some newer Kasa/Tapo devices need cloud credentials even for "local" control. That is risky under a hackathon deadline.

### What happens if I plug in something unsafe?

Do not do that.

Use only normal 120 V plug-in loads within the plug's amp rating. Do not use it for central AC, a dryer, a Level 2 EV charger, a stove, or hardwired equipment.

### How does Valley choose the best hour?

It checks all possible start times and scores each one.

The score is mostly cost. It can also include carbon. The lowest score wins.

### Is the map score perfect?

No.

It is a hackathon model that uses real public data. It is meant to guide a decision, not replace a full utility study.

### Why is this a good hackathon idea?

Because judges can understand it quickly:

**39.1 cents now. 3.9 cents overnight. WAIT becomes GO. The plug turns on.**

It also has real data, a real device path, and honest limits.

---

## 13. What To Say in One Sentence

**Valley shows where Ontario renters are locked out of the cheapest electricity rate, then uses a simple smart plug to help the renters who can safely use it.**

---

## 14. Read Next

- [`pitch-and-business-case.md`](pitch-and-business-case.md) — deeper pitch and business case.
- [`developer-build-plan.md`](developer-build-plan.md) — build plan and technical status.
- [`tide-dev-guide.md`](tide-dev-guide.md) — how the code and Shelly plug are wired.
- [`how-to-use-tide.md`](how-to-use-tide.md) — practical setup guide.
- [`../spike/VIABILITY.md`](../spike/VIABILITY.md) — proof that the core mechanic works.
