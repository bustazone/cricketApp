export const mainColors: { [key: string]: string } = {
  grey: '#808080',
  white: '#FFFFFF',
}
export function getColorWithAlpha(color: string, alpha: number) {
  return getHexWithAlpha(color, alpha)
}
export function getHexWithAlpha(hex: string, alpha: number) {
  if (!alpha) return hex

  let r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
