const text = "Hello";

//reverse
console.log(text.split("").reverse().join(""));

const array = [50, 14, 44, 1003, 59, 12, 44, 66];

// find min and max
minVal = Math.min(...array);
maxVal = Math.max(...array);
console.log(`Min: ${minVal}, Max: ${maxVal}`);

//find total
count = array.length;
total = 0;
for (let i = 0; i < count; i++) {
  total += array[i];
}
console.log(`Total: ${total}`);
