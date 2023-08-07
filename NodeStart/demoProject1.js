const val = require("http");
const file = require("fs");
const server = val.createServer((req, res) => {
  const urlData = req.url;
  const methodData = req.method;
  const fl = file.readFileSync("dataFile.txt");

  if (urlData == "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body>");
    res.write(`${fl}`);
    res.write(
      '<form action="/message" method="POST"><input type="text" name="anything"><button type="submit">Submit</button></form>'
    );
    res.write("</body>");
    res.write("</html");
    return res.end();
  }

  if (urlData == "/message" && methodData == "POST") {
    const dataArr = [];
    req.on("data", (ch) => {
      dataArr.push(ch);
    });
    req.on("end", () => {
      const parsedataArr = Buffer.concat(dataArr).toString();
      const value = parsedataArr.split("=")[1];
      file.writeFileSync("dataFile.txt", value);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
});

server.listen(4000);
