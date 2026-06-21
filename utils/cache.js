const cache = new Map();

export function cacheGet(key) {
  return cache.get(key);
}

export function cacheSet(key, value) {
  cache.set(key, value);

  setTimeout(() => {
    cache.delete(key);
  }, 1000 * 60 * 30); // 30 min cache
}