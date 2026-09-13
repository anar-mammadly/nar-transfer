// Post-transfer support link — disabled. Nar Transfer doesn't solicit
// donations; kept as a no-op so receive/main.ts's call site and the
// standalone module-swap (build/use-inline-variants.ts) stay unchanged.
export function supportLink(): HTMLElement | null {
  return null;
}
