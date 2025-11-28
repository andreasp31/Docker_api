import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import rutas from "./rutas/rutas.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(rutas);

const uri = process.env.MONGO_URI;

export async function conectarBD(){
    try{
        await mongoose.connect(uri,{});
        console.log("Base de datos conectada");
    }
    catch(error){
        console.log("Error conectándose a la base de datos", error);
    }
}

const PORT = process.env.PORT || 3000;

conectarBD().then(async () => {
  app.listen(PORT, () => console.log(`API en ${PORT}`));
});