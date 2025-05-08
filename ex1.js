function unique(arr) {
    return Array.from(new Set(arr));
  }
  
  let values = ["яблуко", "апельсин", "яблуко", "груша", "апельсин"];
  console.log(unique(values));
  
