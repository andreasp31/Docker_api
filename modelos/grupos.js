import mongoose from "mongoose";

const GrupoEschema = new mongoose.Schema({
    nombre_grupo: { 
        type: String, 
        required: true 
    },
    participantes: { 
        type: Array, 
        required: true 
    }
});

export default mongoose.model("Grupo", GrupoEschema);