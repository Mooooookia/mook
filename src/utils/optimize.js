export function debounce(fn, time) {
  let timer;
  return function() {
    if (timer) clearTimeout(timer);
    setTimeout(fn, time);
  }
}

export function throttle(fn, time) {
  let valid = true;
  return function() {
    if (!valid) return;
    valid = false;
    setTimeout(() => {
      fn();
      valid = true;
    }, time)
  }
}

export function scroll(fn) {
  return throttle(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const preDis = 50;
    if (scrollTop + clientHeight > scrollHeight - preDis) {
      fn()
    }
  }, 500)
}