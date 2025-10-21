# Yatzy Game Design Documentation
**Course:** CST3106 — Lab 05

---

## 1) Game Documentation (Overview & Rules)

**Yatzy** is a five-dice game played over **13 rounds**. Each round, the player may roll up to **three times**, holding any subset of dice between rolls, then must record a score in **exactly one** category (each category used once per game).

### Scoring Categories
- **Ones–Sixes:** Sum of dice showing the face (e.g., Fours = 4 × count of 4s).
- **Three of a Kind:** If at least 3 dice match → sum of all five dice.
- **Four of a Kind:** If at least 4 dice match → sum of all five dice.
- **Full House:** 3 of one value + 2 of another → **25**.
- **Small Straight:** Any 4-in-a-row (1–4, 2–5, or 3–6) → **30**.
- **Large Straight:** 1–5 or 2–6 → **40**.
- **Yahtzy:** All five dice the same → **50**.
- **Chance:** Sum of all five dice.
- **Upper Bonus:** If Ones–Sixes subtotal ≥ **63** → **+35**.

Game ends after 13 categories are filled; total = Upper subtotal + bonus + Lower section.

---

## 2) Design System (Colors & Fonts)

### Color Tokens
| Token | Role | Hex |
|---|---|---|
| `--bg` | App background | `#0B1220` |
| `--panel` | Panels / cards | `#111827` |
| `--ink` | Primary text | `#E5E7EB` |
| `--muted` | Secondary text | `#94A3B8` |
| `--line` | Dividers / borders | `#1F2937` |
| `--accent` | Primary action emphasis | `#22C55E` |
| `--warn` | Hover / caution accents | `#F59E0B` |
| `--danger` | Error state | `#EF4444` |

**Rationale:** Dark background reduces glare and places visual focus on dice and score entries. High-contrast ink improves readability; green accent communicates “action/confirm”.

### Typography
- **Headings:** `Poppins`, fallback `Segoe UI`, `Arial`, `sans-serif`
- **Subheadings / Buttons:** `Trebuchet MS`, `Arial`, `sans-serif`
- **Body / Tables:** `Inter`, `Segoe UI`, `sans-serif`

**Rationale:** Poppins is geometric and readable for titles; Inter is optimized for UI text and numeric tables.

---

## 3) Dice Design

### Visual Spec
- **Size:** 64×64px desktop (min 50×50px mobile).
- **Shape:** 12–14px corner radius, subtle border.
- **Face:** Background `#0B1220`, border `#1F2937`.
- **Pips:** Solid circles `#E5E7EB`, positioned by grid.
- **States:**
    - Default: neutral.
    - **Held:** 2px outline in `#22C55E`.
    - Disabled: lower opacity.

### Digital Sketch (SVG)
Stored at `assets/die.svg` (face “five” demo). This serves as the reference for pip proportions/spacing in implementation.

---

## 4) Game Mock-ups (HTML/CSS)

**Included files:** `mockups.html`, `mockups.css`  
These mock-ups include: header/status, dice row, controls, scorecard (upper & lower sections, bonus, totals). They apply the above colors and fonts and are commented to explain structure. No JavaScript logic (mock-ups only).

---

## 5) Additional Documentation

### Layout & Flow
- **Layout:** Two-column grid ≥900px (Dice/Controls | Scorecard). Single column on smaller screens.
- **Round Flow:** Roll → (optionally hold some dice) → roll again (≤3 total) → record score in one unused category.

### Planned Interactions / Animations
- Dice are clickable (toggle “held” state).
- Buttons have hover/active feedback.
- (Implementation phase) A short roll animation per roll (not required for this lab).

### Design Rationale
- High-contrast dark theme improves readability and highlights actionable elements (Roll/Use).
- Table layout mirrors physical scorecards for familiarity.

---

## 6) Pull Request (PR)
1. Commit version 1 of `README.md`, `mockups.html`, `mockups.css`, and `assets/die.svg`.
2. Push to your repo and **open a PR** targeting `main`.
3. Request review from a peer (classmate).

---

## 7) Review & Iterate
- Address peer comments (color contrast, spacing, table clarity).
- Update documentation and mock-ups accordingly.
- Push changes to the PR (or open a follow-up PR if required).

---

## References (from the lab sheet)
- GitHub Desktop Docs — https://docs.github.com/en/desktop
- GitHub Docs — https://docs.github.com/en
- Hurna Git Academy — https://hurna.io/academy/git/index.html
- Dillinger (Markdown editor) — https://dillinger.io/
- Markdown Guide (Cheat Sheet) — https://www.markdownguide.org/cheat-sheet/
- ECMAScript — https://www.ecma-international.org/publications-and-standards/standards/ecma-262/
- JavaScript (Wikipedia) — https://en.wikipedia.org/wiki/ECMAScript
- Yatzy — https://en.wikipedia.org/wiki/Yatzy