import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Trust Frontier",
  description: "Nightly technical assurance research on AI trust.",
};

const navItems = [
  { href: "/", label: "Latest" },
  { href: "/archive", label: "Archive" },
  { href: "/sources", label: "Sources" },
  { href: "/hypotheses", label: "Hypotheses" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="topbar">
            <Link href="/" className="brand" aria-label="AI Trust Frontier">
              <span className="brand-mark">AT</span>
              <span>AI Trust Frontier</span>
            </Link>
            <nav className="nav">
              {navItems.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
