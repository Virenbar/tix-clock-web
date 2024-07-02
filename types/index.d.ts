interface BlockState {
  digit: number
  pattern: boolean[]
  color: string
}

interface Config {
  pixelSize: number
  updateInterval: number
  hourLeftColor: string
  hourRightColor: string
  minuteLeftColor: string
  minuteRightColor: string
}
