export function getAspectRatioClass(ratio: string) {
  const [w, h] = ratio.split(":").map(Number);
  if (!w || !h) return "";
  return `aspect-[${w}/${h}]`;
}
