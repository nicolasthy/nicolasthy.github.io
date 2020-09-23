export const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}

export const getContrastRatio = (hex) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16))
  const brightness = Math.round((parseInt(r) * 299 + parseInt(g) * 587 + parseInt(b) * 114) / 1000)

  return brightness > 150
}
