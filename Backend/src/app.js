import express from 'express';
import dotenv from 'dotenv'
import AlunoRouter from './Routes/AlunoRouter.js'
import DbContext from './config/mongooseConnection.js';

dotenv.config();

// Criando uma instância do express
const app = express();
const PORT = process.env.PORT_SERVER || 8082;


dotenv.config();

// cconfigurando o express para usar json
app.use(express.json());

app.use('/api/v1', AlunoRouter);

// Up server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});