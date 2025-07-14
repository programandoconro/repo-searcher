export function formatNumberToK(n: number): string {
  return n >= 1000 ? Math.round(n / 1000) + "K" : n.toString();
}
