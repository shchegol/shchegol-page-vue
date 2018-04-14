export function randomNotRepeat (max, oldNum) {
  let newNum = Math.floor(Math.random() * max)
  return newNum === oldNum ? randomNotRepeat(max, oldNum) : newNum
}

export function random(min, max) {
  if (max == null) { max = min; min = 0; }
  if (min > max) { let tmp = min; min = max; max = tmp; }
  return min + (max - min) * Math.random();
}
