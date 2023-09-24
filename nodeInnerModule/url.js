const url = require("url");

const { URL } = url;

const myURL = new URL(
  "https://port-9000-phptest-kvmh2mljzfmpxr.sel4.cloudtype.app/"
);

console.log("new URL() : ", myURL);
console.log("url.format() : ", url.format(myURL));
