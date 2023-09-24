import { odd, even } from "./var.mjs";
import checkOddOrEven from "./func.mjs";

function checkStringOddorEven(str) {
  if (str.length % 2) {
    //  홀수 이면
    return odd;
  }
  return even;
}

console.log(checkOddOrEven(10));
console.log(checkStringOddorEven("hello"));
