import hexRgb from "hex-rgb";

export const rgba = (hex, opacity) => {
  const rgb = hexRgb(hex)
  return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${opacity})`
}