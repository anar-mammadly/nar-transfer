// The sender's transmit tuning, in one place. The dropdowns in send/index.html
// are rendered from these lists via the %TX_FPS_OPTIONS% / %FRAME_BYTES_OPTIONS%
// tokens (see htmlTokens() in vite.config.ts), and the receiver's no-signal
// hint names its fallback values from here too — so the advice can never point
// at a setting the sender doesn't offer.

/** What the no-signal hint tells the user to turn the sender down to. */
export const NO_SIGNAL_HINT_FRAME_BYTES = 1465;
export const NO_SIGNAL_HINT_TX_FPS = 24;

// Default 55, not 60: most senders are ordinary 60 Hz screens, where a 60 fps
// frame gets exactly one refresh cycle and early field runs measured a
// 0.2–0.4 catch rate there — most transfers on the most common hardware were
// landing in that bad case. 55 sits just under the 60 Hz ceiling instead: on
// 120 Hz+ displays it still gets a clean ≥2 refresh cycles per frame, and on
// 60 Hz screens the deliberate 5 fps slip against the refresh clock means
// frame boundaries drift through the scanout instead of riding it, so the
// same frame is never torn twice in a row. 60 stays offered for confirmed
// high-refresh senders (and is what the benchmark rig uses). The no-signal
// hint still walks struggling pairs down to 24.
export const DEFAULT_TX_FPS = 55;
export const DEFAULT_FRAME_BYTES = 2953;

export const TX_FPS_OPTIONS: readonly number[] = [
  10,
  15,
  20,
  NO_SIGNAL_HINT_TX_FPS,
  30,
  DEFAULT_TX_FPS,
  60,
];
export const FRAME_BYTES_OPTIONS: readonly number[] = [
  500,
  1000,
  NO_SIGNAL_HINT_FRAME_BYTES,
  1850,
  2331,
  DEFAULT_FRAME_BYTES,
];
