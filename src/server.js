const express = require("express");
const path = require("path");
const pages = require("./pages.js");
const server = express();
const port = process.env.PORT || 5000
server
  .use(express.urlencoded({ extended: true }))

  .use(express.static("public"))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

server.listen(port,console.log(`Servidor executando na porta ${{port}}`))