import { rateLimit } from "express-rate-limit";

// Rate limit for login requests
export const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 login requests per minute
  message: "Too many login attempts, please try again later.",
});

// Rate limit for registration requests
export const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // limit each IP to 10 registration requests per hour
  message: "Too many registration requests, please try again later.",
});
