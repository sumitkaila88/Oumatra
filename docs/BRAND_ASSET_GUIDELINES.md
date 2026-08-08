# OUMATRA Brand Asset Guidelines

## Choosing a logo

Use the horizontal logo as the default corporate identifier. Use the stacked logo when a centered or narrower composition is required. Use tagline lockups only where the tagline remains comfortably above its minimum size and does not compete with surrounding copy.

The symbol may stand alone when OUMATRA is already identified by context, in compact interface placements, or in approved avatar/favicon containers. It must not replace the full logo on first-contact corporate communications without a nearby OUMATRA name.

## Backgrounds

- **Ivory or light neutral surfaces:** Use the full-colour primary or Deep Teal monochrome asset.
- **Deep Teal, Indigo, or other sufficiently dark surfaces:** Use the dark-background symbol adaptation, full horizontal on-dark lockup, or Ivory monochrome asset.
- **Photography:** Place the logo only over calm, even-toned areas with strong contrast. Use an approved solid field when the image is busy.
- **Other palette colours:** Verify contrast at the actual output size. Do not recolour individual logo parts to force a match.

The production SVGs include a built-in dimensional rendering that follows the approved reference: restrained face shading, fine edge highlights, directional cast shadows and a soft wordmark halo. These are lighting effects derived from the locked colours, not additional brand colours or a decorative gradient treatment. Use the assets as supplied; do not add another shadow, glow, bevel or CSS filter. Monochrome variants retain one base colour while using opacity-based light and shadow to preserve the same raised construction.

## Colour roles

- **Ivory** is the default light background and the preferred light mark colour on dark surfaces.
- **Deep Teal** anchors primary text, primary dark backgrounds, and the standard dark logo.
- **Indigo** provides an alternative dark section surface and supporting depth.
- **Warm Peach** is the principal human accent and the approved warm half of the symbol.
- **Plum** is a restrained expressive accent and the accessible focus-ring colour on light surfaces.

Functional tokens in `app/globals.css` map these masters to backgrounds, text, borders, accents, and focus states without changing the five locked values. Never rely on colour alone to communicate state.

## Typography hierarchy

| Role | Family | Typical weight | Guidance |
| --- | --- | --- | --- |
| Display / H1 | Source Serif 4 | 400 | Tight tracking; concise lines |
| H2 / H3 | Source Serif 4 | 400–600 | Tight to normal tracking by size |
| Body | Manrope | 400 | Normal tracking; generous line-height |
| Navigation / UI | Manrope | 500–700 | Clear, compact, sentence case |
| Eyebrow / label | Manrope | 700 | Uppercase, `0.12em–0.20em` tracking |

Do not typeset a replacement OUMATRA wordmark using either family. The approved wordmark is custom vector geometry with crossbar-free, Warm Peach-dot A forms; always use the supplied asset.

## Favicon

The favicon uses the approved outer forms, silence dots and nine-bar master waveform. Stroke widths and lighting are reduced automatically for the compact rendering. Use `favicon.svg` where supported, with the supplied ICO and PNG fallbacks. Do not derive another micro-mark.

## Social avatar

The avatar uses the full adapted symbol on a Deep Teal rounded-square field with fixed internal padding. Keep the supplied crop. Do not add the wordmark, tagline, handle, border, or platform badge inside the avatar.

## Misuse

Do not:

- Stretch, squash, skew, or rotate any logo asset.
- Rearrange the outer forms, dots, or waveform.
- Separate or animate individual waveform components.
- Change individual colours arbitrarily.
- Add, remove, or modify the supplied dimensional shading, glow, highlight, bevel or shadow.
- Place the logo on a low-contrast or visually busy background.
- Substitute fonts or retype the approved wordmark.
- Recreate the symbol with emoji, icons, religious marks, a generic O, infinity geometry, or technology imagery.
- Crop inside the required clear space.

## Asset handling

Use SVG for responsive digital applications. Use the supplied PNG only where a platform requires raster artwork. Do not edit a PNG and treat it as a new master. Any new variant must be reviewed, documented, and explicitly moved from open to locked status before production use.
