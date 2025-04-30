export default function (element: HTMLElement | undefined = undefined) {
  const state = useState<SizeState>(() => ({
    screenWidth: 0,
    screenHeight: 0,
    ratioWH: 0,
    ratioHW: 0,
  }));

  function onResize() {
    const t: SizeState = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      ratioWH: window.innerWidth / window.innerHeight,
      ratioHW: window.innerHeight / window.innerWidth,
    };
    if (element) {
      const clientRect = element.getBoundingClientRect();
      t.rect = {
        width: clientRect.width,
        height: clientRect.height,
        left: clientRect.left,
        right: clientRect.right,
        top: clientRect.top,
        bottom: clientRect.bottom,
      };
    }
    state.value = t;
  };

  onMounted(() => {
    window.addEventListener('resize', onResize, false);
    onResize();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onResize, false);
  });

  return state;
};

interface SizeState {
  screenWidth: number
  screenHeight: number
  ratioWH: number
  ratioHW: number
  rect?: ClientRect
}

interface ClientRect {
  width: number
  height: number
  left: number
  right: number
  top: number
  bottom: number
}
