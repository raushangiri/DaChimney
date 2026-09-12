const AUTH_STORAGE_KEY = "den_admin_auth";

export const PASSCODE = process.env.NEXT_PUBLIC_ADMIN_PASSCODE ?? "den2026";

export function getAuth(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(AUTH_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function setAuth(value: boolean): void {
  if (typeof window === "undefined") return;
  try {
    if (value) {
      localStorage.setItem(AUTH_STORAGE_KEY, "1");
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  } catch {
    // localStorage unavailable (private mode, storage full, etc.)
  }
}

export function readStore<T>(key: string, seed: T[]): T[] {
  if (typeof window === "undefined") return seed;
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return seed;
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as T[]) : seed;
  } catch {
    return seed;
  }
}

export function writeStore<T>(key: string, value: T[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore quota / security errors
  }
}

export function addItem<T>(key: string, item: T, seed: T[]): T[] {
  const next = [item, ...readStore(key, seed)];
  writeStore(key, next);
  return next;
}

export function removeItem<T extends { id?: string; slug?: string }>(
  key: string,
  lookup: { id?: string; slug?: string }
): T[] {
  const next = readStore<T>(key, []).filter((item) => {
    if (lookup.id !== undefined && item.id === lookup.id) return false;
    if (lookup.slug !== undefined && item.slug === lookup.slug) return false;
    return true;
  });
  writeStore(key, next);
  return next;
}

export function readCounter(key: string, seed = 0): number {
  if (typeof window === "undefined") return seed;
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return seed;
    const value = Number(raw);
    return Number.isFinite(value) ? value : seed;
  } catch {
    return seed;
  }
}

export function writeCounter(key: string, value: number): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, String(value));
  } catch {
    // ignore quota / security errors
  }
}