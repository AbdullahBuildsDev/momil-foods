/**
 * Parses the free-text `weight` field on a product and returns a consistent
 * metric + imperial pair so every product page shows both units the same way.
 *
 * Whichever unit the source string carries is treated as authoritative and the
 * other one is derived from it, so the two values can never disagree.
 */

const OZ_PER_GRAM = 1 / 28.349523125
const FLOZ_PER_ML = 1 / 29.5735295625

const num = (s) => parseFloat(String(s).replace(/,/g, ''))

function trim(n, digits) {
  const v = n.toFixed(digits)
  // Only strip padding zeros that sit after a decimal point — "400" must stay "400".
  return v.includes('.') ? v.replace(/0+$/, '').replace(/\.$/, '') : v
}

function massPair(grams) {
  const metric = grams >= 1000 ? `${trim(grams / 1000, 2)} kg` : `${trim(grams, 0)} g`
  const oz = grams * OZ_PER_GRAM
  const imperial = oz >= 16 ? `${trim(oz / 16, 2)} lb` : `${trim(oz, 1)} oz`
  return { metric, imperial }
}

// Used for multi-size retail packs (e.g. "200 g & 400 g"): the buyer wants a
// clean whole-ounce figure alongside the grams, never a "7.1 oz" or a lb value.
function massPairWhole(grams) {
  const metric = grams >= 1000 ? `${trim(grams / 1000, 2)} kg` : `${trim(grams, 0)} g`
  // Drop the decimal part of the ounce figure — the buyer wants "7 oz", "14 oz",
  // never "7.1 oz". Truncating (not rounding) also never overstates net weight.
  return { metric, imperial: `${Math.floor(grams * OZ_PER_GRAM)} oz` }
}

// Reads the grams out of a single "…g / …kg" fragment, or null if it isn't mass.
function gramsOf(fragment) {
  const lower = fragment.toLowerCase()
  const kgM = lower.match(/([\d.]+)\s*kg\b/)
  const gM = lower.match(/([\d.]+)\s*(?:gm|grams|gram|g)\b/)
  const lbM = lower.match(/([\d.]+)\s*lb\b/)
  const ozM = lower.match(/([\d.]+)\s*oz\b/)
  if (kgM) return num(kgM[1]) * 1000
  if (gM) return num(gM[1])
  if (lbM && ozM) return (num(lbM[1]) * 16 + num(ozM[1])) / OZ_PER_GRAM
  if (lbM) return (num(lbM[1]) * 16) / OZ_PER_GRAM
  if (ozM) return num(ozM[1]) / OZ_PER_GRAM
  return null
}

function volumePair(ml) {
  const metric = ml >= 1000 ? `${trim(ml / 1000, 2)} L` : `${trim(ml, 0)} ml`
  const imperial = `${trim(ml * FLOZ_PER_ML, 1)} fl oz`
  return { metric, imperial }
}

export function formatWeight(raw) {
  if (!raw || raw === '—') return null

  const s = String(raw)
  const lower = s.toLowerCase()

  // Non-numeric packing descriptions (bulk, assorted) pass straight through.
  if (!/\d/.test(s)) return { label: s, text: true }

  // Multi-size retail packs — "200 g & 400 g" — show every size as its own
  // grams + whole-ounce pair so the buyer sees the full range at a glance.
  if (s.includes('&')) {
    const sizes = s.split('&')
      .map((part) => gramsOf(part))
      .filter((g) => g != null)
      .map((g) => massPairWhole(g))
    if (sizes.length > 1) return { sizes }
  }

  const note = /\+-|±/.test(s) ? s.match(/\(([^)]*)\)/)?.[1] : null

  // ── Volume ──────────────────────────────────────────────
  const litre = lower.match(/([\d.]+)\s*(?:litre|liter|l)\b/)
  const mlM = lower.match(/([\d.]+)\s*ml\b/)
  const flozM = lower.match(/([\d.]+)\s*fl\s*oz/)
  if (litre || mlM || flozM) {
    let ml = null
    if (mlM) ml = num(mlM[1])
    else if (litre) ml = num(litre[1]) * 1000
    else if (flozM) ml = num(flozM[1]) / FLOZ_PER_ML
    const pair = volumePair(ml)
    return { ...pair, note, glass: /glass/.test(lower) }
  }

  // ── Mass ────────────────────────────────────────────────
  const kgM = lower.match(/([\d.]+)\s*kg\b/)
  const gM = lower.match(/([\d.]+)\s*(?:gm|grams|gram|g)\b/)
  const lbM = lower.match(/([\d.]+)\s*lb\b/)
  const ozM = lower.match(/([\d.]+)\s*oz\b/)

  let grams = null
  if (kgM) grams = num(kgM[1]) * 1000
  else if (gM) grams = num(gM[1])
  else if (lbM && ozM) grams = (num(lbM[1]) * 16 + num(ozM[1])) / OZ_PER_GRAM
  else if (lbM) grams = (num(lbM[1]) * 16) / OZ_PER_GRAM
  else if (ozM) grams = num(ozM[1]) / OZ_PER_GRAM

  if (grams == null) return { label: s, text: true }
  return { ...massPair(grams), note }
}
