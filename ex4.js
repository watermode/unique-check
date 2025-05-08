function hasUniqueElements(arr) {
    const set = new Set(arr);
    return set.size === arr.length;
  }
  
  console.log(hasUniqueElements([1, 2, 3, 4]));
  console.log(hasUniqueElements([1, 2, 2, 4]));
