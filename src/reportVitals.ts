import { onCLS, onFCP, onLCP } from "web-vitals";

export function reportVitals() {
  onCLS(console.log);
  onFCP(console.log);
  onLCP(console.log);
}