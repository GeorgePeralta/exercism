const AryColors =  [
  `black`,
  `brown`,
  `red`,
  `orange`,
  `yellow`,
  `green`,
  `blue`,
  `violet`,
  `grey`,
  `white`,] as const
  export type Color = typeof AryColors[number]

export function decodedValue([color1, color2]: Color[]) {
  return (AryColors.indexOf(color1) * 10) + AryColors.indexOf(color2)
}
