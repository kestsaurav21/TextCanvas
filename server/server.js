import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

const app = express();

app.use(express.json());

// Configure CORS to allow specific origin and methods
app.use(cors({
    origin: 'https://text-canvas-livid.vercel.app', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, // Allow credentials (cookies, headers, etc.)
    optionsSuccessStatus: 200
}));

// Handle preflight OPTIONS requests
app.options('*', cors({
    origin: 'https://text-canvas-livid.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    optionsSuccessStatus: 200
}));

await connectDB();

const PORT = process.env.PORT || 7700;

app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

app.get('/', (req, res) => {
    res.send('API is working!!!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
