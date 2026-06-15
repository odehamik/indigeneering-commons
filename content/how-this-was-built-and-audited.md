---
title: How This Was Built & Audited
description: An independent, adversarial assurance pass on the project's decisions — reproducible, honest about its limits. The proof-of, without the data, and without the sacred.
---

# How This Was Built & Audited

*A reader's guide for reviewers. Anishinaabemowin / Jones Corpus Project · corpus state: 140 four-layer stories; lexicon at 10,743 rule-grade rows (`lexicon_rulegrade.tsv` md5 `338c20a611ff5a71a232c5d806f5331e`). The living data itself is **not** published here — it moves only by relation. → [Request access](request-access). This page is the assurance record: how to judge whether the decisions were principled, without holding the data.*

> **A fuller record is held for community-level review — not on this site.** A complete decision ledger (145 reconstructed decisions) and the review of **how ceremonial texts were handled** are held for review with the communities, Elders, and knowledge keepers whose stories and protocols these are — not published on the open web. Airing the handling of sacred material in public would itself break the protocol it documents. Reviewers who need that depth reach it by relation, not by download.

This work was independently, adversarially audited — an assurance pass that read the project's own rules and then tried to make them fail, forbidden from grading its own work, held to the project's own law: *flag, never guess.* What follows is the reviewer-facing summary. It names where the record is strong **and** where it is thin, because an assurance record that overclaims is worse than none.

## 1. What the data is, and why the decisions are strict

The source is William Jones's *Ojibwa Texts* (Vol. VII, Parts 1 & 2, 1917/1919) — narrative dictated in the early 1900s by predominantly traditional Anishinaabe knowledge holders, documented by an all-Indigenous team. It is the largest body of Anishinaabemowin narrative on record from speakers who stood outside missionary framing and outside the residential-school era's worst damage. There is no second copy of what these speakers knew; no sound recordings exist. The text is the recording.

That singularity sets the entire decision posture. This corpus is the seed for downstream language infrastructure — a glossed corpus, a lexicon, a grammar, eventually learning tools and a model. So an error here does not stay an error; it is *promoted*: a wrong word-pair becomes a wrong rule, becomes a wrong model weight, becomes a confidently wrong answer delivered to a learner with machine authority and no way to know. Every strict rule in this project is a brake on that promotion. When the decisions look conservative to the point of stubbornness, that is the reason.

## 2. How decisions were governed — the load-bearing rules

**Flag, never guess.** When the conversion is uncertain, the pipeline does not pick a likely answer — it flags the uncertainty and stops. A flag is a *finished state*, not a to-do the machine may later resolve on its own. It keeps the machine drafting and the humans deciding.

**Authority stays with the human.** Resolution of any flag belongs to the project lead (the Anishinaabemowin authority) and the scholars, never to the pipeline. Every finished file is tagged `DRAFT` until a human has line-reviewed its gloss; approval is a human moving the file and removing the tag. A file still marked `DRAFT` has not yet been signed off — and that absence is the system working, not a missing step.

**The corpus outranks the dictionaries.** Dictionaries — many of missionary provenance — are witnesses under cross-examination, not judges. Where a dictionary and the corpus disagree on *meaning*, the corpus speaks first, and missionary semantic drift is flagged, never imported. A separate audit pass confirmed the live lexicon stores no meaning at all — it is a transliteration map of spellings, with meaning kept one layer up, per story, where it travels with its flags.

**There is no standard orthography, and there never will be.** Two Anishinaabe scholars produced the finished stories in systematically different hands; different narrators spoke different dialects. That variation is *data*, not error. The lexicon records ranges of attested spellings; nothing anywhere picks a single "right" form. Uniformity across the corpus is treated as a colonial reflex and declined.

**Some knowledge keeps its protocols.** Ceremonial material is held to a slower, human-paced handling, and ceremony / spirit-world content is *named but never explained* — a deliberate firewall against a pipeline flattening sacred meaning into encyclopedia entries. The detail of that handling is part of the community-level record above, not this page.

## 3. Where the reasoning lives

The decision record is split by design. The *conventions* hold the methodology and its justification — the most fully-reasoned part of the project, especially the rules that affect meaning. The *logs* hold the chronological thread: per-story choices, flag rulings, the lead's dated rulings. The *tooling* holds the engineering decisions. The honest consequence: a per-story log entry often reads as unexplained in isolation because its reasoning is centralized in the conventions rather than restated each time. That is an efficiency choice, not concealment — a reviewer should read a log entry against the conventions, not alone.

## 4. What is reproducible — verify rather than trust

The mined data is regenerable, not hand-asserted:

- **The lexicon carries a checksum.** The rule-grade file states its md5 and row count. A reviewer with access can re-checksum the delivered file and confirm it is the audited state.
- **Pairings are gated, not eyeballed.** A word-pair is promoted only if a transliteration-skeleton test scores it above an empirically-set threshold — known bad pairs scored low, true pairs high, the threshold sits in the clean valley between. The gate validates the *pairing*, not merely the spelling, and the logs record it catching every aligner mis-pair on two separate corroboration passes.
- **Merges are guarded.** Each merge fresh-reads and checksums its baseline before appending, keeps a timestamped backup, and logs the operation. The backups exist as a chain of files.
- **The mining is scripted.** The correspondence data was derived by scripts present in the tooling; the derivation can be re-run.

## 5. Where the record is thin — disclosed, not buried

External trust is earned by naming limits. One category of thin-spot — anything touching the **handling of ceremonial material** — is held for community-level review (above), not aired here. The remaining ones are non-sacred and named plainly:

**The one that matters:** the lexicon grew through five merges to its current row count. The merge log documents four; the fifth (which added the Part I mined data) left no log entry — no checksum line, gate note, or authorization — though the resulting file matches the recorded state and a pre-merge backup exists. The growth is real and consistent; one step of its paper trail is simply absent.

**The low-stakes thin spots:** a handful of engineering constants (promotion thresholds, an alignment cutoff, a case-folding step) work but are not argued in-record; several form-level convention rules are stated without a written rationale. None of these affect meaning. None were filled in after the fact with invented justifications, because a reconstructed reason is worth less than an honest blank.

## 6. The one-line version

The decisions that shape *meaning* — the conversions, the corpus-over-dictionary rule, the firewall against missionary drift, the flag-never-guess law — are the most carefully reasoned and best-documented part of this project, and they are enforced structurally, not by good intentions. The decisions that shape *form and process* are sometimes recorded as outcome only, with their reasoning centralized elsewhere or, in named cases, genuinely incomplete. What this record does is know where it is strong and say where it is thin.

---

*This is a machine-run assurance pass: reproducible, a floor and not a coronation. It does not replace human line-review — the `DRAFT`-tag system and the lead's reviewers stand above everything here. Built by Maya Chacaby (Odehamik) · MythOS substrate two.*
