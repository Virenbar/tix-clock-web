export default function () {
  function getParams() {
    return new URLSearchParams(location.search);
  }

  function getParameter<K extends keyof Parameters>(key: K) {
    const params = getParams();
    const value = params.get(key);
    return value as Parameters[K] | null;
  }

  function setParameter<K extends keyof Parameters>(key: K, value: Parameters[K]) {
    const params = getParams();
    params.set(key, value);
    location.search = params.toString();
  }

  function setParameterA<K extends keyof Parameters>(key: K, value: Parameters[K]) {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.replaceState(null, '', url);
  }

  return {
    getParameter,
    setParameter,
    setParameterA,
  };
}

interface Parameters {
  config: string
}
