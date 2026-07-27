# Smerthnix Portfolio — Design Contract

Status: Active  
Last refreshed: 2026-07-27

## 1. Source of truth

The production interface is defined by `index.html`, `styles.css`, `styles-v2.css`, and `script.js`. The latest visual review also uses the supplied desktop screenshot of the services section. This document records the design decisions that future changes should preserve.

## 2. Product and audience

Smerthnix is a lead-generation portfolio for a web developer serving beauty salons, local services, and small businesses. The page must help a potential client quickly understand:

1. what can be built;
2. what a real finished project looks like;
3. how pricing and collaboration work;
4. how to start a conversation.

Primary audience: owners of small service businesses who need a clear, modern site and may not use technical language.

## 3. Brand direction

- Tone: direct, confident, useful, and human.
- Visual character: editorial dark/light contrast with lime and violet accents.
- Core palette: near-black, warm off-white, lime `#d6ff3f`, violet `#6b50ff`.
- Typography: Space Grotesk for display text, Inter for interface and body copy.
- Avoid generic feature dumps, low-contrast hover states, decorative effects that hide content, and overly technical sales copy.

## 4. Information architecture

The page order is intentional:

1. Hero and primary contact action.
2. One verified featured project: Fito Relax.
3. Four clear service categories.
4. Individual pricing explanation.
5. Four-step working process.
6. Direct contact options.

The services section should communicate breadth without becoming a catalogue. Secondary capabilities belong in a short set of compact chips.

## 5. Interaction principles

- Motion supports hierarchy and feedback; it must not delay access to content.
- Service cards may lift, tilt, and reveal a pointer-following glow on fine pointers.
- Every hover state must retain readable white or muted-white text on the dark surface.
- Touch devices receive the same information without depending on hover.
- Respect `prefers-reduced-motion` by removing non-essential motion and video.
- Focus indicators must remain visible for keyboard users.

## 6. Components

- Floating translucent header with compact navigation and language controls.
- Split hero with strong statement, CTA buttons, facts, and a Fito Relax mockup.
- Featured project browser frame with factual scope and result statements.
- Two-column service card grid on desktop, one column on mobile.
- Compact capability chips with restrained hover feedback.
- High-contrast lime pricing section.
- Violet contact section with Telegram and e-mail actions.

## 7. Content rules

- Lead with business outcomes, then name features.
- Use short sentences and concrete verbs.
- Do not claim performance metrics, client results, or technologies that cannot be verified from the repository or linked implementation.
- Polish is the source language. Russian, Ukrainian, and English translations must preserve meaning rather than translate word-for-word.
- Keep the featured project and contact details consistent with the live links in the page and README.

## 8. Responsive and accessibility checklist

- No horizontal overflow at 390 px, 768 px, or desktop widths.
- Navigation is keyboard-operable and closes with Escape.
- Mobile menu, language switcher, and CTAs keep usable touch targets.
- Service copy remains visible at rest, hover, keyboard focus, and touch.
- Decorative motion and pointer effects are disabled for reduced-motion users.
- Images have descriptive alternative text; decorative layers are hidden from assistive technology.

## 9. Constraints and open questions

- The portfolio is a static HTML/CSS/JavaScript project published through GitHub Pages and mirrored to Sites.
- Fito Relax is the only project presented as a real implementation in the current content.
- Additional case studies should be added only when a public link and verified project scope are available.
- Site access settings are deployment concerns and are not changed by visual iterations unless explicitly requested.
