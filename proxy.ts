import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 renamed `middleware` to `proxy`; next-intl's handler is a
// standard Next request handler so it's re-exported as-is under the new name.
export const proxy = createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
