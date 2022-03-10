const express = require("express");
const res = require("express/lib/response");
const log = require("./logger/logger");
const app = express();
const port = 8080;

// test api
app.get("/test", (req, res) => {
  // log.logger.debug("debug success");
   log.logger.error("error testing");
  // log.logger.http("http testing");
  // log.logger.info("info testing");
  
  // log.logger.verbose("verbose testing");
  // log.logger.warn("warn testing");
  log.logger.silly("silly testing");

  res.send("testing success!!");
});

app.listen(port, () => {
  console.log("server connection success !!");
});
