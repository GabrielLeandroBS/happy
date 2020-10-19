// importar dependência
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// iniciando o express
const server = express();
const port = process.env.PORT || 5500;
server
  // utilizar body so req
  .use(express.urlencoded({ extended: true }))

  // utilizando arquivos estáticos
  .use(express.static("public"))

  // configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // criar as rotas para as páginas
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .get("/informations", pages.informations)
  .post("/save-orphanage", pages.saveOrphanage)

  // ligar o servidor
  server.listen(port, console.log(`servidor executando na porta ${port}`));
