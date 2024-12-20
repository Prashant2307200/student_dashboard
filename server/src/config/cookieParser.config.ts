import cookieParser, { CookieParseOptions } from "cookie-parser";
import { CookieOptions } from "express-serve-static-core";

const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", 
  sameSite: "lax",
  signed: true,
  maxAge: 24 * 60 * 60 * 1000,
};

export const cookieConfig = cookieParser(
  process.env.COOKIE_SECRET || "cookie-secret",
  cookieOptions as CookieParseOptions
);
