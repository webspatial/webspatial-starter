# WebSpatial Documentation Quality Review

> Reviewed: All 41 markdown files in `docs/`
> Date: 2026-04-10

---

## Summary

The documentation is well-structured overall and covers a wide range of concepts, APIs, and how-to guides. However, there are systemic issues across five dimensions: broken/missing links, terminology inconsistencies, non-idiomatic English phrasing, incomplete content, and formatting problems. Below is a detailed report organized by issue category with specific file paths and line numbers.

---

## 1. Broken Links and Missing Files

### CRITICAL: `WebSpatialRuntime.md` does not exist

**4 links in `getting-started.md` point to a file that doesn't exist:**

| Line | Link Text | Broken Target |
|------|-----------|---------------|
| 27 | `[remain backward compatible]` | `../api/react-sdk/js-api/WebSpatialRuntime.md` |
| 28 | `[automatically ignore WebSpatial APIs]` | `../api/react-sdk/js-api/WebSpatialRuntime.md` |
| 29 | `[feature detection]` | `../api/react-sdk/js-api/WebSpatialRuntime.md` |
| 39 | `[not affected]` | `../api/react-sdk/js-api/WebSpatialRuntime.md` |

There is no `WebSpatialRuntime.md` anywhere in the `docs/` tree. These cover critical SDK features (backward compatibility, feature detection, cross-platform behavior) — either the file needs to be created or the links need to be redirected.

### CRITICAL: Wrong relative paths in `Reality.md`

**File:** `docs/api/react-sdk/react-components/Reality.md`, line 101

```markdown
> The depth of this space can be set with [`depth`](../api/react-sdk/css-api/depth.md) and the current depth can be queried with [`clientDepth`](../api/react-sdk/dom-api/clientDepth.md).
```

Since this file is already inside `docs/api/react-sdk/react-components/`, the `..` goes up to `docs/api/react-sdk/`, then `api/react-sdk/` creates a nonexistent double-nested path. Should be:
- `../css-api/depth.md`
- `../dom-api/clientDepth.md`

---

## 2. Terminology Inconsistencies

### 2.1 "Spatial Scene" vs "Spatial Container" vs "scene"

- `spatial-scenes.md` line 3: introduces "A Spatial Scene, also called a Spatial Container..."
- Throughout all other docs, the term shifts freely between "Spatial Scene", "Spatial Scene container", "Spatial Container", and just "scene"
- **Impact:** Developers may think these are different concepts. Recommend standardizing on one primary term and using the alias only in the definition.

### 2.2 "2D containing 3D" — inconsistent formatting

| File | Format Used |
|------|-------------|
| `getting-started.md:5` | `2D containing 3D` (plain text) |
| `getting-started.md:34` | `"2D containing 3D"` (in quotes) |
| `3d-content-containers.md:35` | `## 2D containing 3D` (heading) |
| `3d-content-containers.md:37` | `"2D containing 3D"` (in quotes) |
| `spatial-computing.md:29` | `2D containing 3D` (plain text) |

Recommend standardizing to **"2D-containing-3D"** (hyphenated compound adjective) when used as a modifier, or consistently quoting it.

### 2.3 "spatialized HTML elements" vs variants

The docs inconsistently use:
- "spatialized HTML elements" (most common, 30+ uses)
- "spatialized 2D HTML elements"
- "spatialized elements" (shortened)

The "2D" qualifier sometimes appears and sometimes doesn't, creating confusion about whether 3D container elements are also "spatialized".

### 2.4 "physical world unit" vs "real-world"

- `3d-content-containers.md:42`: "physical world units (`m`) oriented toward real-world objects"
- `Reality.md:99`: "physical world unit (`m`) oriented toward real-world objects"
- `useMetrics.md:5`: "physical world unit (`m`)"
- `convertCoordinate.md:9`: "physical world unit (`m`) oriented toward real-world objects"

The phrase "oriented toward real-world objects" is attached inconsistently and is unclear in meaning — does it mean the units match real-world scale?

### 2.5 "Packaged WebSpatial App" vs "Packaged App"

- Formal term "Packaged WebSpatial App" used in `webspatial-app.md` and concept links
- Shortened to "Packaged App" in `build.md:49`, `publish.md:61`, `run.md:35`
- `getting-started.md:153` uses section heading "### Packaged App Mode"

Recommend always using the full term or defining the abbreviation explicitly.

### 2.6 "WebSpatial App" vs "spatial app" vs "Web App"

- "WebSpatial App" = a Web App using WebSpatial SDK
- "spatial app" = any app with spatial features (native or web)
- "Web App" = W3C PWA concept

The relationship between these three terms is never explicitly stated in one place. Developers reading any single document may confuse them.

---

## 3. Non-Idiomatic English / Unfriendly to English-Speaking Developers

### 3.1 Overly long sentences

**`getting-started.md:5`** — The opening sentence is ~90 words with 6 inline links and multiple nested concepts:

> "WebSpatial is a set of minimal extensions to HTML/CSS/DOM APIs plus a polyfill-style open-source SDK. It brings spatialized UI capabilities equivalent to native spatial apps and a 2D containing 3D developer experience into Web standards and mainstream Web frameworks. This allows HTML content on spatial computing platforms to break free from the screen, enter real space, gain real volume, support natural spatial interactions and flexible 3D programming, while preserving the Web's original cross-platform nature, mental model, and development workflow."

**Recommendation:** Break into 3-4 shorter sentences for readability.

### 3.2 Grammar errors

| File | Line | Issue |
|------|------|-------|
| `natural-interactions.md` | 3 | "Natural interactions **means**" — should be "Natural interactions **mean**" (plural subject) |
| `webspatial-app.md` | ~10 | "cannot currently include" — more natural as "do not currently include" |
| `getting-started.md` | 28 | "avoid affecting the behavior" — awkward double negative feel; "without affecting" is cleaner |

### 3.3 Awkward or non-idiomatic phrasing

| File | Line | Quote | Suggestion |
|------|------|-------|------------|
| `natural-interactions.md` | 8 | "Keeping the pinch held can continue into gestures" | "Holding the pinch transitions into gestures" |
| `3d-content-containers.md` | 37 | "Only the local regions that truly need 3D content use the 3D-engine development paradigm on demand" | "Only regions that actually need 3D content use the 3D engine paradigm" |
| `transform.md` | 23 | "transform-style is no longer needed and is ignored" | "transform-style is unnecessary and ignored" |
| `back.md` | 21 | "Which 2D plane counts as 'behind' it depends on..." | "Which 2D plane is considered 'behind' depends on..." |
| `minimal-pwa.md` | 5 | "For every URL in this Web App, provide the URL of the Web App Manifest" | "On every page of this Web App, include a `<link>` to the Web App Manifest" |
| `ssr.md` | 3 | "there is one extra step" | "one additional step is required" |

### 3.4 Informal / casual tone in API docs

- `getting-started.md:53`: "The latest version of WebSpatial SDK currently has a bug that temporarily prevents support for styled-components." — Too informal for reference docs; should specify version number and link to tracking issue.
- `getting-started.md:133`: "optimized for coding agents" — unusual phrasing; "includes comprehensive API documentation" would be clearer.

---

## 4. Hard-to-Understand Content

### 4.1 "larger-near smaller-far effect"

**Files:** `spatial-scenes.md:26`, `worldScaling.md:53`

> "shows a larger-near smaller-far effect during movement, like a real-world object"

This phrase is a literal translation from Chinese (近大远小) and not an established English term. In English, the standard term is **"perspective scaling"** or **"distance-based scaling"** — objects appear smaller as they move farther away.

### 4.2 Coordinate system explanation lacks visual aids

**File:** `3d-content-containers.md:40-44`

The distinction between left-handed (2D layout, Y-down) and right-handed (3D engine, Y-up) coordinate systems is described in text only. This is a frequent source of bugs and confusion — a simple diagram would be extremely valuable.

### 4.3 Event firing sequence in `natural-interactions.md`

**Lines 14-26** describe the complex multi-step event sequence in paragraph form. A timeline diagram or table mapping user action → events fired would be much clearer.

### 4.4 `useMetrics.md` — `worldScalingCompensation` parameter

**Lines 52-68:** "determines whether the current Spatial Scene container's worldScaling should be compensated during the conversion" — the word "compensated" is ambiguous. A concrete before/after example showing the difference between compensated and uncompensated conversion would help.

### 4.5 `baseplateVisibility.md` — undefined concept

**Line 3:** The term "baseplate" is introduced without definition. Readers unfamiliar with the concept won't understand what they're controlling.

---

## 5. Incomplete or Missing Content

### 5.1 `non-ts.md` — placeholder document

**File:** `docs/how-to/non-ts.md` (5 lines total)

Line 5: "Configuration methods for more web build tools will be added to this document later."

This is TODO/placeholder text in production documentation. Either expand the document or remove the promise.

### 5.2 `xcode.md` — minimal content

**File:** `docs/how-to/xcode.md` (9 lines total)

Only 3 steps, no verification instructions, no troubleshooting, no explanation of why macOS is required.

### 5.3 DOM API files are extremely sparse

All DOM API files (`clientDepth.md`, `innerDepth.md`, `offsetBack.md`) are under 35 lines with:
- No code examples showing practical usage
- No explanation of units or expected value ranges
- No mention of when these properties are available vs unavailable

### 5.4 Event API files lack examples

All four event API files (`spatial-drag.md`, `spatial-magnify.md`, `spatial-rotate.md`, `spatial-tap.md`) have:
- No code examples
- No explanation of the "selection phase"
- No information about timing, constraints, or limits
- `spatial-rotate.md` mentions quaternion format without explaining what a quaternion is or how to use it

### 5.5 Missing "when to use what" guidance

- No guidance on choosing between `<Model>` and `<Reality>` components
- No guidance on choosing between `window` and `volume` scene types
- No guidance on `convertCoordinate` vs `useMetrics` usage scenarios

### 5.6 `spatialized-html-elements.md` — unexplained API

**Line 15:** Mentions `getBoundingClientCube()` as "newly added in WebSpatial API" but it is never documented anywhere in the docs.

### 5.7 Builder commands lack examples

`build.md`, `publish.md`, and `run.md` have no example command invocations or expected output. Also, identical text blocks for `--base`, `--manifest`, and `--manifest-url` are duplicated across all three files (~20 lines each) instead of being consolidated.

### 5.8 `ssr.md` — example mixes concerns

**Lines 17-42:** The Hydrogen/Remix example includes framework-specific code (Google Cache checks, Nonce handling) mixed with WebSpatial-specific code (`SSRProvider`) without any annotation distinguishing which is which.

---

## 6. Formatting Issues

### 6.1 `userAgent.md` — regex format inconsistency

| Line | Pattern | Issue |
|------|---------|-------|
| 13 | `/WebSpatial\/(\S+)/` | Correct regex with delimiters |
| 15 | `/\sVR\s/` | Correct |
| 17 | `\swv\)` | **Missing regex delimiters** — should be `/\swv\)/` |
| 19 | `/WSAppShell\/(\S+)/` | Correct |

Line 17 is inconsistent with all other patterns in the same file.

### 6.2 Inconsistent colon usage in DOM API files

All three DOM API files use an unusual pattern:

> "Like `Element.clientWidth`: read-only and unaffected by CSS Transform"

Standard English would be: "Like `Element.clientWidth`, this property is read-only and unaffected by CSS Transform."

### 6.3 Inconsistent Note/blockquote style

- Some files use `> Note:` prefix (e.g., `baseplateVisibility.md`, `defaultSize.md`)
- Others use bare `>` blockquotes (e.g., `Reality.md:101`)
- Others use inline notes without blockquotes

Should standardize on one format.

### 6.4 `jsx-marker.md` — potentially confusing example

**Line 26:** Shows `style={{ enableXr: true, marginTop: "10px" }}` — mixing a WebSpatial-specific directive (`enableXr`) with a standard CSS property (`marginTop`) in a style object without explanation that `enableXr` is special SDK handling, not standard CSS.

---

## Priority Recommendations

### P0 — Fix immediately
1. **Create `WebSpatialRuntime.md`** or redirect the 4 broken links in `getting-started.md`
2. **Fix the 2 broken relative paths** in `Reality.md:101`
3. **Fix the regex formatting** in `userAgent.md:17`

### P1 — High impact
4. **Standardize terminology** — create a glossary or terminology guide; pick one canonical term for each concept
5. **Replace "larger-near smaller-far"** with standard English phrasing across all files
6. **Fix the grammar error** in `natural-interactions.md:3` ("means" → "mean")
7. **Expand the stub docs** (`non-ts.md`, `xcode.md`) or remove placeholder promises

### P2 — Improve clarity
8. **Add code examples** to all DOM API and Event API files
9. **Add a coordinate system diagram** in `3d-content-containers.md`
10. **Break up long sentences** in `getting-started.md` overview
11. **Add "when to use" guidance** for Model vs Reality, window vs volume, etc.
12. **Consolidate duplicated parameter docs** across the three builder command files

### P3 — Polish
13. **Standardize blockquote/note formatting** across all files
14. **Fix awkward English phrasing** listed in Section 3
15. **Annotate the SSR example** to distinguish framework code from SDK code
16. **Define "baseplate"** before first use in `baseplateVisibility.md`
