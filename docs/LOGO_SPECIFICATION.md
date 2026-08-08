# OUMATRA Logo Specification

Version 1 · Corrected production geometry

## Source and intent

The supplied approved brand board and cropped lockup references, together with `BRAND_DECISIONS.md`, are the source of truth. The corrected production SVGs are a close manual reconstruction—not an automatic raster trace, font substitution, or new interpretation. They remove only raster noise, lighting, mockup perspective, and illustrative texture.

## Symbol construction

The corrected master symbol uses a square `240 × 240` viewBox with the artwork optically compressed to 85% on the vertical axis. The earlier full-height construction was rejected because it made the emblem feel too tall and oval.

- The vertical axis runs through `x = 120`.
- Before optical correction, crescent tips run from `y = 24` to `y = 216` and the widest points sit at `x = 30` and `x = 210`. The master applies `scale(1, 0.85)` around the field, producing a visible crescent body approximately 180 units wide by 163 units high.
- The outer forms share mirrored endpoints and curve proportions while remaining visually open rather than completing a literal O.
- The waveform contains nine rounded bars: five Deep Teal and four Warm Peach.
- The tallest teal bar runs from `y = 38` to `y = 202`; the adjacent peach bar runs from `y = 58` to `y = 182`.
- Silence dots are centered at `(120, 12)` and `(120, 228)` with radius `4`.
- The dot diameter is `8` SVG units and defines the internal measurement unit `x`.
- Light-surface artwork uses Deep Teal and Warm Peach. Dark-surface artwork changes teal elements to Ivory while retaining Warm Peach.

The corrected silhouette follows the approved broad circular composition rather than a tall oval. Full-colour variants include the approved restrained dimensional treatment: a soft downward shadow (`dy=3`, `stdDeviation=2.4`, 28% opacity) applied only to the symbol group. No gradient, religious cue, infinity form, letter O construction, or technology motif has been introduced.

## Wordmark construction

The OUMATRA wordmark is custom vector-path geometry, not editable text and not a generic substituted font. Its thin monoline construction, letter proportions, and generous spacing follow the approved reference. Both A letters are crossbar-free and contain the approved Warm Peach dot low in the counter.

The horizontal master uses a `1080 × 220` viewBox. Its symbol is rendered approximately 216 units wide by 197 units high including the dots. The wordmark begins at `x = 270`, leaving a 46-unit visual gap after the symbol. Wordmark cap construction is optically compressed to 68 units high with a 4.5-unit source stroke. The O is corrected to a true visible circle: 68 units wide by 68 units high.

Do not recreate the wordmark with website type, edit its spacing, replace its A treatment, or substitute individual letters.

## Tagline construction

The tagline uses a restrained serif treatment (`Georgia` with Times fallback) to match the approved elegant-serif character, replacing the rejected sans-serif treatment. “Beyond Silence.” is Warm Peach; “From Sound.” is Deep Teal. Thin horizontal rules flank the centered tagline.

- Horizontal lockup: 24-unit tagline below the wordmark in a `1080 × 280` field.
- Stacked lockup: 28-unit tagline below the wordmark in an `860 × 540` field.
- The horizontal tagline is centered at `x = 650`. Its two rules are equal at 120 units (`290–410` and `890–1010`) with matched optical gaps.
- Divider rules use a 1.5-unit stroke and align around the tagline baseline area.

Because the tagline remains SVG text, use a non-tagline lockup when exact cross-platform serif rendering cannot be guaranteed. The OUMATRA wordmark itself is always vector geometry.

## Clear space

`x` equals one silence-dot diameter (`8` units in the symbol master).

- Full lockups: at least `4x` on every side.
- Symbol only: at least `3x` on every side.
- Favicon and social containers: their supplied padding is already approved; do not crop it further.

Measure clear space from the outermost visible artwork, not the SVG viewBox edge.

## Minimum sizes

| Variant | Digital minimum | Print minimum |
| --- | ---: | ---: |
| Horizontal logo | 180 px wide | 40 mm wide |
| Horizontal with tagline | 260 px wide | 60 mm wide |
| Stacked logo | 120 px wide | 28 mm wide |
| Stacked with tagline | 180 px wide | 42 mm wide |
| Full-detail symbol | 32 px high | 8 mm high |
| Simplified favicon | 16 px | Not for print |

Below these sizes, use the simpler approved variant rather than allowing detail or the tagline to become illegible.

## Variant inventory

- `oumatra-logo-horizontal.svg` — primary horizontal lockup
- `oumatra-logo-horizontal-tagline.svg` — horizontal lockup with tagline and rules
- `oumatra-logo-horizontal-on-dark.svg` — adapted full-colour horizontal lockup for dark surfaces
- `oumatra-logo-stacked.svg` — primary stacked lockup
- `oumatra-logo-stacked-tagline.svg` — stacked lockup with tagline and rules
- `oumatra-symbol.svg` — full-colour symbol for light surfaces
- `oumatra-symbol-on-dark.svg` — adapted full-colour symbol for dark surfaces
- `oumatra-symbol-dark.svg` — Deep Teal single-colour symbol
- `oumatra-symbol-light.svg` — Ivory single-colour symbol
- `oumatra-logo-monochrome-dark.svg` — Deep Teal single-colour horizontal lockup
- `oumatra-logo-monochrome-light.svg` — Ivory single-colour horizontal lockup

All files have explicit viewBoxes, contain no raster images, and avoid external references or embedded font files. Monochrome variants use `currentColor` with an approved default so they render directly.
