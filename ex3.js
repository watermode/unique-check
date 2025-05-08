function countOccurrences(arr) {
    const map = new Map();
  
    for (let num of arr) {
      map.set(num, (map.get(num) || 0) + 1);
    }
  
    return map;
  }
  
  let numbers = [1, 2, 2, 3, 3, 3, 4];
  let result = countOccurrences(numbers);
  
  for (let [key, value] of result) {
    console.log(`${key} => ${value}`);
  }
