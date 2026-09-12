/**
 * Thin client for AramwayBackend (the real Express/Prisma API). Server-only —
 * every call goes through Next.js route handlers or server components, never
 * the browser.
 */
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000";

export function backendUrl(path: string): string {
  return `${BACKEND_URL}/api${path}`;
}

/** Forwards a form submission (JSON or FormData) to the backend and returns its Response. */
export function backendFetch(path: string, init: RequestInit = {}): Promise<Response> {
  return fetch(backendUrl(path), { ...init, cache: "no-store" });
}
