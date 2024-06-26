interface BlockState {
  digit: number
  pixels: boolean[]
  color: string
}

interface Settings {
  pixelSize: number
  updateInterval: number
  hourLeftColor: string
  hourRightColor: string
  minuteLeftColor: string
  minuteRightColor: string
}
