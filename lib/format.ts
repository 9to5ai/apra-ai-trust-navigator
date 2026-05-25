export function formatDate(value?: string | null): string {
  if (!value) {
    return "Unpublished";
  }

  return new Intl.DateTimeFormat("en-AU", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(value));
}

export function percent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export function compactUrl(value: string): string {
  try {
    const url = new URL(value);
    return url.hostname.replace(/^www\./, "");
  } catch {
    return value;
  }
}
