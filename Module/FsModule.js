const fs = require("fs");

fs.writeFile("file2.txt", "thi is file2", () => {
  console.log("file written");
});
const file3 = fs.writeFileSync("./Module/fil3.txt", "this is file3");
// it read file asynchronously
fs.readFile("file2.txt", "utf8", (err, data) => console.log(data));

// synchronously
const file = fs.readFileSync("./Module/file2.txt");
console.log(file.toString());
