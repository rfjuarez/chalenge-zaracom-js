class Cache {
  cache;

  constructor() {
    this.cache = new Map();
  }

  add(key, value) {
    if (!key || !value) {
      return;
    }
    this.cache.set(key, value);
  }

  get(key){
    return this.cache.get(key);
  }

  flush() {
    this.cache.clear();
  }
}

const cache = new Cache();

export default cache;