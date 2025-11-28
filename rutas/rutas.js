import express from "express";
import Usuario from "../modelos/usuarios.js";
import Grupo from "../modelos/grupos.js";

const router = express.Router();

router.get("/usuarios", async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

router.get("/grupos", async (req, res) => {
  const grupos = await Grupo.find();
  res.json(grupos);
});

router.post("/usuarios", async (req, res) => {
  const nuevoUsuario = new Usuario(req.body);
  await nuevoUsuario.save();
  res.json(nuevoUsuario);
});

router.post("/grupos", async (req, res) => {
  const nuevoGrupo = new Grupo(req.body);
  await nuevoGrupo.save();
  res.json(nuevoGrupo);
});

router.get("/", (req, res) => {
  res.json({ mensaje: "API funcionando correctamente" });
});

export default router;