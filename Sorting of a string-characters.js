let str = "hello i am suyog";
function sortString(str) {
  let splited = str.split("");
  let sort = splited.sort();

  return sort;
}
console.log(sortString(str));
