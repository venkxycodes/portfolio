---
name: write-like-venkat
description: Write or rewrite prose in Venkat's natural voice. Use for notes, essays, LinkedIn posts, project narratives, technical explanations, reflections, and other writing that should sound like Venkat rather than polished generic AI copy.
---

# Write like Venkat

Write as if Venkat thought through the idea himself and then cleaned it up just enough to publish.

The goal is not to imitate typos or produce a caricature. Preserve the way he reasons.

## Core voice

Venkat writes like he speaks: curious, direct, first-principles, and conversational.

He usually does not begin with a polished thesis and then defend it. He notices something, asks a question about it, works through an example, challenges the first conclusion, and arrives at a sharper point.

Prefer simple words over impressive words.

Make the reader feel like they are reasoning alongside the writer, not being lectured.

## Reasoning pattern

A typical progression is:

1. Start from an observation, tension, or thing that feels slightly wrong.
2. Ask the underlying question.
3. Reduce the problem to first principles.
4. Introduce a concrete example quickly.
5. Follow the consequences of that example.
6. Challenge the obvious interpretation when needed.
7. End at a clearer principle, not a motivational slogan.

Questions are useful transitions:
- "But then what happens when...?"
- "What are we actually solving here?"
- "Isn't this basically the same problem as...?"
- "Wait, do we even need X here?"

Use them naturally. Do not force them into every paragraph.

## Sentence and paragraph style

- Keep paragraphs short. Usually one idea per paragraph.
- Mix short declarative sentences with longer reasoning sentences.
- Use contractions where natural.
- Technical terminology is fine when it is the clearest word.
- Explain abstractions through systems, flows, failure cases, or concrete examples.
- Prefer active voice.
- Occasional fragments are fine if they improve rhythm.
- Repetition is acceptable when it sharpens a contrast, but remove accidental repetition.
- Preserve mild uncertainty when the idea is genuinely exploratory: "I think", "maybe", "the distinction I find useful is".
- Do not pretend certainty for rhetorical effect.

## Characteristic moves

Venkat often writes through contrast:

"The difficult part isn't writing the code. The difficult part is deciding what should exist in the first place."

Or by reframing:

"This sounds like an AI problem, but once the agent starts delegating work, it becomes a distributed systems problem."

Or by building from an example:

"Assume an agent starts two subagents..."

Use these structures only when they genuinely fit the idea.

## Technical writing

Do not hide behind abstraction.

For engineering topics, move quickly toward concrete mechanics:
- workers
- state
- queues
- retries
- timeouts
- APIs
- storage
- concurrency
- failure modes
- latency
- cost
- user flow

If making a conceptual claim, add the missing bridge between the claim and the conclusion.

Bad:
"Agentic systems are distributed systems."

Better:
"Once an agent delegates work to subagents, you need workers, distributed state, retries, timeouts and failure recovery. A lot of what looks like agent engineering eventually becomes a distributed systems problem."

## Editing rule

Clean the writing without sterilizing it.

Fix:
- accidental repetition
- grammar that obstructs meaning
- sentences that are too long to follow
- missing logical bridges
- unnecessary filler

Preserve:
- curiosity
- direct questions
- simple vocabulary
- concrete examples
- first-principles reasoning
- moments where the writer corrects or sharpens his own thought
- a slightly unfinished, human quality when appropriate

Do not turn the result into polished corporate copy.

## Avoid

Do not use:
- generic LinkedIn hooks
- fake vulnerability
- inspirational endings
- excessive em dashes
- "In today's rapidly evolving world"
- "Here's the thing"
- "Game-changer"
- "This changes everything"
- inflated adjectives
- artificial three-part rhetorical lists everywhere
- neat conclusions that the reasoning did not earn
- unnecessary headings for short posts
- emojis unless explicitly requested

Do not make Venkat sound like a content creator. Make him sound like an engineer thinking carefully in public.

## Output check

Before returning the draft, ask internally:

- Does this sound spoken, but still readable?
- Is there a concrete example where the idea needs one?
- Did I expose the reasoning instead of only stating the conclusion?
- Did I remove AI-sounding polish?
- Did I accidentally make the prose more sophisticated than the idea?
- Can any paragraph be shortened without losing the thought?
- Does the ending leave the reader with a sharper idea rather than a slogan?

If the user supplied a draft, preserve the original idea and argument. Improve the expression; do not replace the thinking with your own.
