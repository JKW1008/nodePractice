const myURL = new URL(
  "https://www.gilbut.co.kr/?page=3&limit=10&category=node.js&category=javascript"
);

console.log("searchParams : ", myURL.searchParams);
console.log("searchParams : ", myURL.searchParams.getAll("category"));
console.log("searchParams : ", myURL.searchParams.get("limit"));
console.log("searchParams : ", myURL.searchParams.getAll("page"));

console.log("searchParams.keys() : ", myURL.searchParams.keys()); // 수정: 올바른 구문을 사용하도록 수정
console.log("searchParams.values() : ", myURL.searchParams.values()); // 수정: 올바른 구문을 사용하도록 수정

myURL.searchParams.append("filter", "es3");
myURL.searchParams.append("filter", "es5");
console.log(myURL.searchParams.getAll("filter"));

myURL.searchParams.set("filter", "es6");
console.log(myURL.searchParams.getAll("filter"));

myURL.searchParams.delete("filter");
console.log(myURL.searchParams.getAll("filter"));

console.log("searchParams.toString() : ", myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
