import express from 'express';
import authRouter from './routes/auth.route';
import { config } from './common/config';

const PORT = config.server.port;
const BASE_PATH = "/api/v1";

const app = express();

// MIDDLEWARES
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// ROUTES
app.use(`${BASE_PATH}/auth`, authRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

async function main() {
  // ... you will write your Prisma Client queries here
}

export default app;