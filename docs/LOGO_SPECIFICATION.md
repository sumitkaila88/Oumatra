# OUMATRA Logo Specification

Version 1 · Production geometry

## Source and intent

The supplied brand-kit concept and the locked direction in `BRAND_DECISIONS.md` are the source of truth. The production SVGs are a manual geometric interpretation, not an automatic raster trace. They preserve the approved relationship between opposing organic forms, sound, and silence while removing texture, lighting, mockup distortion, and raster noise.

## Symbol construction

The master symbol uses a `200 × 240` viewBox.

- A vertical axis runs through `x = 100`.
- The opposing outer forms share mirrored endpoints and curve proportions. They remain visually open rather than completing a literal O.
- The waveform contains eight rounded vertical bars. Five Deep Teal bars move toward the central axis; three Warm Peach bars move away from it. Their differing heights express vibration without adding decorative noise.
- Upper and lower silence dots are centered on the axis at `y = 10` and `y = 230` with radius `4`.
- The master dot diameter is `8` SVG units and defines the internal measurement unit `x`.
- The full-colour light-surface symbol uses Deep Teal and Warm Peach. The dark-surface adaptation changes Deep Teal elements to Ivory while retaining Warm Peach.

The outer contours are intentionally smoother and more symmetrical than the concept image because the reference contains illustrative depth and perspective that would not scale cleanly. No gradient, shadow, highlight, religious cue, infinity form, or AI/technology motif has been introduced.

## Wordmark construction

The production wordmark is restrained uppercase monoline vector geometry with generous spacing, reflecting the geometric sans-serif direction in the reference without introducing a radically stylized custom face. Letterforms are SVG geometry rather than an embedded font. The tagline variants use a conservative system-sans SVG text fallback; use the non-tagline lockups when exact cross-environment tagline rendering cannot be guaranteed.

Do not recreate the wordmark with website type, edit its spacing, or substitute individual letters.

## Clear space

`x` equals the diameter of a silence dot in the symbol (`8` units in the symbol master).

- Full lockups: minimum clear space of `4x` on all sides.
- Symbol only: minimum clear space of `3x` on all sides.
- Favicon and social-avatar containers: their supplied internal padding is already approved; do not crop it further.

Clear space is measured from the outermost visible artwork, not from the SVG viewBox edge.

## Minimum sizes

| Variant | Digital minimum | Print minimum |
| --- | ---: | ---: |
| Horizontal logo | 180 px wide | 40 mm wide |
| Horizontal with tagline | 260 px wide | 60 mm wide |
| Stacked logo | 120 px wide | 28 mm wide |
| Stacked with tagline | 180 px wide | 42 mm wide |
| Full-detail symbol | 32 px high | 8 mm high |
| Simplified favicon | 16 px | Not for print |

Below the listed sizes, use a simpler approved variant rather than allowing details or the tagline to become illegible.

## Variant inventory

- `oumatra-logo-horizontal.svg` — primary horizontal lockup
- `oumatra-logo-horizontal-tagline.svg` — horizontal lockup with tagline
- `oumatra-logo-stacked.svg` — primary stacked lockup
- `oumatra-logo-stacked-tagline.svg` — stacked lockup with tagline
- `oumatra-symbol.svg` — full-colour symbol for light surfaces
- `oumatra-symbol-on-dark.svg` — adapted full-colour symbol for dark surfaces
- `oumatra-symbol-dark.svg` — Deep Teal single-colour symbol
- `oumatra-symbol-light.svg` — Ivory single-colour symbol
- `oumatra-logo-monochrome-dark.svg` — Deep Teal single-colour horizontal lockup
- `oumatra-logo-monochrome-light.svg` — Ivory single-colour horizontal lockup

All SVG files have explicit viewBoxes, contain no raster image, avoid external references and embedded font files, and use minimal paths/primitives. Monochrome variants use `currentColor` with an approved default root colour so they work when opened directly.
