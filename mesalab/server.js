const express = require("express");
const path = require("path");

const {
  obtenerSolicitudes,
  crearSolicitud
} = require("./controllers/solicitudesController");

const app = express();
const PORT = 3000;


app.use(express.json());

app.use(express.static(path.join(__dirname, "Evaluacion")));


app.get("/api/solicitudes", async (req, res) => {
  try {
    const solicitudes = await obtenerSolicitudes();
    res.status(200).json({ ok: true, data: solicitudes });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ ok: false, mensaje: "Error interno al ingresar la solicitud." });
  }
});


app.post("/api/solicitudes", async (req, res) => {
  try {
    const { titulo, descripcion, prioridad } = req.body;


    if (!titulo || !descripcion) {
      return res.status(400).json({
        ok: false,
        mensaje: "Faltan campos obligatorios: titulo y descripcion."
      });
    }


    const nuevaSolicitud = await crearSolicitud({ titulo, descripcion, prioridad });

    res.status(201).json({ ok: true, mensaje: "Solicitud enviada con éxito.", data: nuevaSolicitud });

  } catch (error) {
    console.error("Error al crear solicitud:", error.message);
    res.status(500).json({ ok: false, mensaje: "Error interno al crear la solicitud." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`API disponible en http://localhost:${PORT}/api/solicitudes`);
});