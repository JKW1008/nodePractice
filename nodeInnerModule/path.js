const path = require("path");

const string = __filename;

console.log("path.sep : ", path.sep);
console.log("path.delimiter : ", path.delimiter);
console.log("------------------------------------------------");
console.log("path.dirname() : ", path.dirname(string));
console.log("path.extname() : ", path.extname(string));
console.log("path.basename() : ", path.basename(string));
console.log(
  "path.basename - extname : ",
  path.basename(string, path.extname(string))
);

console.log("------------------------------------------------");
console.log("path.parse()", path.parse(string));
console.log(
  "path.format()",
  path.format({
    dir: "/Users/woo/Desktop/nodePractice/nodeInnerModule",
    name: "path",
    ext: ".js",
  })
);
console.log(
  "path.normalize() : ",
  path.normalize("/Users/woo/Desktop/nodePractice/nodeInnerModule/path.js")
);
console.log("--------------------------------------------------");

console.log("path.isAbsolute('/Users/') : ", path.isAbsolute("/Users/"));
console.log("path.isAbsolute('./home') : ", path.isAbsolute("./home"));
console.log("--------------------------------------------------------------");
console.log(
  "path.relative() : ",
  path.relative(
    "/Users/woo/Desktop/nodePractice/nodeInnerModule/path.js",
    "/Users/"
  )
);
console.log(
  "path.join() : ",
  path.join(
    __dirname,
    "..",
    "..",
    "woo",
    "Desktop",
    "nodePractice",
    "nodeInnerModule"
  )
);

console.log(
  "path.resolve() : ",
  path.resolve(
    __dirname,
    "..",
    "..",
    "woo",
    "Desktop",
    "nodePractice",
    "nodeInnerModule"
  )
);
