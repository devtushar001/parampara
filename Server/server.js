// src/app.js
import express from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config(); //  Load env variables FIRST

const app = express();

//  Security HTTP headers
app.use(helmet());

//  CORS — restrict to your frontend origin in production
app.use(
    cors({
        origin: process.env.FRONTEND_URL || "*", // allow all in dev
        credentials: true,
    })
);

//  Body parser (limit payload size)
app.use(express.json({ limit: "10kb" }));

//  Prevent HTTP parameter pollution
app.use(hpp());

//  Prevent NoSQL injection
app.use(mongoSanitize());

//  Prevent XSS attacks
app.use(xss());

//  Enable response compression
app.use(compression());

//  Dev logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

//  Basic rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 100, // 100 requests per IP
    message: "Too many requests from this IP, please try again later.",
    standardHeaders: true,
    legacyHeaders: false,
});
app.use("/api", limiter);

app.get('/api/v1', (req, res) => {
    return res.status(200).json({
        success: true,
        message: `Server running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
    })
})

app.listen(process.env.PORT, () => {
    console.log(` Server running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
