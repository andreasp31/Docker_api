import mongoose from "mongoose";

const UsuarioEschema = new mongoose.Schema({
    nombre_user: { 
        type: String, 
        required: true 
    },
    apellido_user: { 
        type: String, 
        required: true 
    },
    edad_user: { 
        type: Number, 
        required: true 
    },
    dni_user : {
        type: String, 
        required: true 
    }
});

export default mongoose.model("Usuario", UsuarioEschema);