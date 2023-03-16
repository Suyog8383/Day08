// let num = [1, 9, 2, 8, 3, 7, 4, 5];
// function sortArray(num) {
//   let sorted = num.sort();
//   return sorted;
// }
// console.log(sortArray(num));

let num = [1, 9, 2, 8, 3, 7, 4, 5];
function sortArray(num) {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] > num[j]) {
        let temp = num[i];
        num[i] = num[j];
        num[j] = temp;
      }
    }
  }
  return num;
}
console.log(sortArray(num));
