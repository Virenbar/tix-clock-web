import { sleep } from "~/utils";

const def: Settings = {
  updateInterval: 5000,
  pixelSize: 4,
  hourLeftColor: "red",
  hourRightColor: "green",
  minuteLeftColor: "blue",
  minuteRightColor: "red"
};

// Durstenfeld shuffle
// https://stackoverflow.com/a/12646864
function shuffleArray<T>(array: Array<T>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createPattern(max: number, digit: number): boolean[] {
  const pattern = new Array<boolean>(max).fill(false).fill(true, 0, digit);
  if (digit == 0 || digit == max) { return pattern; }
  shuffleArray(pattern);
  return pattern;
}

export default defineNuxtPlugin(() => {
  const wait = useState("wait", () => def.updateInterval);
  const hourL = useState<BlockState>();
  const hourR = useState<BlockState>();
  const minuteL = useState<BlockState>();
  const minuteR = useState<BlockState>();

  function updateState() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const hr = hours % 10;
    const hl = (hours - hr) / 10;
    const mr = minutes % 10;
    const ml = (minutes - mr) / 10;

    hourL.value = {
      pixels: createPattern(3, hl),
      color: def.hourLeftColor,
      digit: hl
    };
    hourR.value = {
      pixels: createPattern(9, hr),
      color: def.hourRightColor,
      digit: hr
    };
    minuteL.value = {
      pixels: createPattern(6, ml),
      color: def.minuteLeftColor,
      digit: ml
    };
    minuteR.value = {
      pixels: createPattern(9, mr),
      color: def.minuteRightColor,
      digit: mr
    };
  }

  async function loop() {
    for (; ;) {
      await sleep(wait.value);
      updateState();
    }
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
        pixelSize: def.pixelSize
      }
    }
  };
});
