// src/lib/analytics.ts
export function track(event: string, params: Record<string, any> = {}) {
  // gtag is injected by index.html
  // @ts-ignore
  if (typeof window !== "undefined" && window.gtag) {
    // @ts-ignore
    window.gtag("event", event, params);
  }
}
