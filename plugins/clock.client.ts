import { sleep } from '~/utils';

const defaultConfig: Config = {
  updateInterval: 5000,
  pixelSize: 64,
  hourLeftColor: '#ff0000', // red
  hourRightColor: '#008000', // green
  minuteLeftColor: '#0000ff', // blue
  minuteRightColor: '#ff0000', // red
  backgroundColor: '#000',
  offColor: '#0A0A0A',
};

function createPattern(size: number, digit: number): boolean[] {
  const pattern = new Array<boolean>(size).fill(false).fill(true, 0, digit);
  if (digit == 0 || digit == size) return pattern;
  shuffleArray(pattern);
  return pattern;
}

// Durstenfeld shuffle
// https://stackoverflow.com/a/12646864
function shuffleArray<T>(array: Array<T>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default defineNuxtPlugin(() => {
  let config: Config = defaultConfig;
  const pixelSize = useState('pixelSize', () => config.pixelSize);
  const backgroundColor = useState('backgroundColor', () => config.backgroundColor);
  const offColor = useState('offColor', () => config.offColor);
  const hourL = useState<BlockState>('hourL');
  const hourR = useState<BlockState>('hourR');
  const minuteL = useState<BlockState>('minuteL');
  const minuteR = useState<BlockState>('minuteR');

  function updateState() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const hr = hours % 10;
    const hl = (hours - hr) / 10;
    const mr = minutes % 10;
    const ml = (minutes - mr) / 10;

    hourL.value = {
      pattern: createPattern(3, hl),
      color: config.hourLeftColor,
      digit: hl,
    };
    hourR.value = {
      pattern: createPattern(9, hr),
      color: config.hourRightColor,
      digit: hr,
    };
    minuteL.value = {
      pattern: createPattern(6, ml),
      color: config.minuteLeftColor,
      digit: ml,
    };
    minuteR.value = {
      pattern: createPattern(9, mr),
      color: config.minuteRightColor,
      digit: mr,
    };
  }

  async function loop() {
    for (; ;) {
      await sleep(config.updateInterval);
      updateState();
    }
  }

  /**
   * Get default config
   * @returns copy of default config
   */
  function getDefaultConfig() {
    return { ...defaultConfig };
  }

  /**
   * Get current config
   * @returns copy of current config
   */
  function getConfig() {
    return { ...config };
  }

  /**
   * Set current config
   * @param {Config} newConfig new config
   */
  function setConfig(newConfig: Config) {
    config = { ...config, ...newConfig };
    pixelSize.value = config.pixelSize;
    offColor.value = config.offColor;
    backgroundColor.value = config.backgroundColor;
    updateState();
  }

  function resetConfig() {
    setConfig(defaultConfig);
  }

  updateState();
  loop();

  return {
    provide: {
      clock: {
        hourL,
        hourR,
        minuteL,
        minuteR,
        pixelSize,
        backgroundColor,
        offColor,
        getDefaultConfig,
        resetConfig,
        getConfig,
        setConfig,
      },
    },
  };
});
