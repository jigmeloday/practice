// All Better Auth endpoints (/api/auth/sign-in/email, /sign-up/email, ...) live here.
import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@/lib/auth";

export const { GET, POST } = toNextJsHandler(auth);
