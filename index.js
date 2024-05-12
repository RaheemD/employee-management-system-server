import express from "express";
import cors from "cors";

const app = express();

// CORS configuration to accept all domains (for testing)
app.use(cors({
    origin: '*', 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// A simple route that returns a plain message
app.get('/', (req, res) => {
    res.send('Hello World! Server is up and running!');
});

// Define the port from the environment or use 3000 as default
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
