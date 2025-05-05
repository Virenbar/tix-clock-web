export default function () {
  let wakeLock: WakeLockSentinel | null;

  const handleVisibilityChange = async () => {
    if (wakeLock !== null && document.visibilityState === 'visible') {
      await enable();
    }
  };

  async function enable() {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => {
        console.log('Wake Lock was released');
      });
      console.log('Wake Lock is active');
    }
    catch (err) {
      console.error(err);
    }
  }

  onMounted(async () => {
    await enable();
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('fullscreenchange', handleVisibilityChange);
  });
}
