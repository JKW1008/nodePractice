const { spawn } = require("child_process");

const pythonPath = "/opt/homebrew/bin/python3"; // Python 3의 경로

const process = spawn(pythonPath, ["test.py"]);

process.stdout.on("data", function (data) {
  console.log(data.toString());
});
//  실행 결과

process.stderr.on("data", function (data) {
  console.error(data.toString());
});
//  실행 에러
